import Link from 'next/link';
import { prisma } from '@media-steward/db';
import { addFeed, deleteFeed, toggleFeed } from './actions';

interface FeedItem {
  title: string;
  link: string;
  date: Date | null;
  feedName: string;
}

function extractTag(xml: string, tag: string): string {
  const match = xml.match(
    new RegExp(
      `<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\\/${tag}>`,
      'i'
    )
  );
  if (!match) return '';
  return (match[1] ?? match[2] ?? '').trim();
}

function extractLink(xml: string): string {
  const rssLink = extractTag(xml, 'link');
  if (rssLink) return rssLink;
  const atomLink = xml.match(/<link[^>]+href="([^"]+)"/i);
  return atomLink?.[1] ?? '';
}

async function fetchFeed(feed: { name: string; url: string }): Promise<FeedItem[]> {
  try {
    const res = await fetch(feed.url, {
      next: { revalidate: 1800 },
      headers: { 'User-Agent': 'MediaSteward/1.0 RSS Reader' },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const itemRegex = /<(?:item|entry)[\s>]([\s\S]*?)<\/(?:item|entry)>/gi;
    const items: FeedItem[] = [];
    let match;

    while ((match = itemRegex.exec(xml)) !== null && items.length < 20) {
      const block = match[1];
      const title = extractTag(block, 'title') || '(no title)';
      const link = extractLink(block);
      const dateStr =
        extractTag(block, 'pubDate') ||
        extractTag(block, 'published') ||
        extractTag(block, 'updated');
      const date = dateStr ? new Date(dateStr) : null;

      if (link) {
        items.push({ title, link, date, feedName: feed.name });
      }
    }

    return items;
  } catch {
    return [];
  }
}

export default async function CultivatePage() {
  const feeds = await prisma.rssFeed.findMany({ orderBy: { createdAt: 'asc' } });
  const enabledFeeds = feeds.filter((f) => f.enabled);

  const feedItemGroups = await Promise.all(enabledFeeds.map(fetchFeed));

  const allItems = feedItemGroups
    .flat()
    .sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return b.date.getTime() - a.date.getTime();
    })
    .slice(0, 50);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-zinc-500 hover:text-zinc-300 text-sm mb-2 inline-block"
          >
            ← Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-zinc-100">Cultivate</h1>
          <p className="text-zinc-400 text-sm mt-1">Your chosen feeds. Nothing else.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-3">
                Add Feed
              </h2>
              <form action={addFeed} className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Feed name"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <input
                  type="url"
                  name="url"
                  placeholder="https://example.com/feed.xml"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-2 rounded text-sm font-medium transition-colors"
                >
                  Add Feed
                </button>
              </form>
            </div>

            {feeds.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-3">
                  Your Feeds
                </h2>
                <div className="space-y-2">
                  {feeds.map((feed) => (
                    <div
                      key={feed.id}
                      className="flex items-center justify-between gap-2 bg-zinc-900 rounded px-3 py-2"
                    >
                      <span
                        className={`text-sm truncate ${
                          feed.enabled ? 'text-zinc-100' : 'text-zinc-500 line-through'
                        }`}
                      >
                        {feed.name}
                      </span>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <form action={toggleFeed}>
                          <input type="hidden" name="id" value={feed.id} />
                          <input
                            type="hidden"
                            name="enabled"
                            value={feed.enabled ? 'false' : 'true'}
                          />
                          <button
                            type="submit"
                            className={`text-xs px-2 py-0.5 rounded transition-colors ${
                              feed.enabled
                                ? 'text-emerald-400 hover:text-emerald-300'
                                : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            {feed.enabled ? 'on' : 'off'}
                          </button>
                        </form>
                        <form action={deleteFeed}>
                          <input type="hidden" name="id" value={feed.id} />
                          <button
                            type="submit"
                            className="text-xs text-zinc-600 hover:text-red-400 px-1 transition-colors"
                          >
                            &times;
                          </button>
                        </form>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>

          <section>
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">
              Latest Articles
            </h2>
            {allItems.length === 0 ? (
              <div className="text-zinc-500 text-sm py-12 text-center">
                {feeds.length === 0
                  ? 'Add your first feed to start reading.'
                  : 'No articles found. Feeds may still be loading or empty.'}
              </div>
            ) : (
              <div className="space-y-1">
                {allItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg px-4 py-3 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="text-zinc-100 text-sm font-medium group-hover:text-white truncate">
                          {item.title}
                        </div>
                        <div className="text-zinc-500 text-xs mt-0.5">{item.feedName}</div>
                      </div>
                      {item.date && (
                        <div className="text-zinc-500 text-xs font-mono flex-shrink-0">
                          {item.date.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
