import { prisma } from '@media-steward/db';
import { addFeed, deleteFeed, toggleFeed } from './actions';

export const dynamic = 'force-dynamic';

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

/** Only allow http/https links — discards javascript: and other dangerous protocols. */
function sanitizeHref(href: string): string {
  try {
    const { protocol } = new URL(href);
    return protocol === 'https:' || protocol === 'http:' ? href : '';
  } catch {
    return '';
  }
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

    while ((match = itemRegex.exec(xml)) !== null) {
      const block = match[1];
      const title = extractTag(block, 'title') || '(no title)';
      const link = extractLink(block);
      const dateStr =
        extractTag(block, 'pubDate') ||
        extractTag(block, 'published') ||
        extractTag(block, 'updated');
      const date = dateStr ? new Date(dateStr) : null;

      const safeLink = sanitizeHref(link);
      if (safeLink) {
        items.push({ title, link: safeLink, date, feedName: feed.name });
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
    <main className="min-h-screen pt-14 md:pt-0">
      <div className="max-w-5xl mx-auto px-5 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-mono text-muted-foreground mb-1 tracking-wider uppercase">Section</p>
          <h1 className="text-3xl font-serif font-semibold text-foreground tracking-tight">Cultivate</h1>
          <p className="text-muted-foreground text-sm mt-1.5">Your chosen feeds. Nothing else.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">

          {/* Sidebar */}
          <aside className="space-y-8">

            {/* Add Feed form */}
            <div>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                Add Feed
              </h2>
              <form action={addFeed} className="space-y-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Feed name"
                  required
                  className="w-full bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
                />
                <input
                  type="url"
                  name="url"
                  placeholder="https://example.com/feed.xml"
                  required
                  className="w-full bg-card border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
                  style={{
                    background: 'oklch(0.72 0.12 65)',
                    color: 'oklch(0.085 0.006 55)',
                  }}
                >
                  Add Feed
                </button>
              </form>
            </div>

            {/* Feed list */}
            {feeds.length > 0 && (
              <div>
                <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                  Your Feeds
                </h2>
                <div className="space-y-1.5">
                  {feeds.map((feed) => (
                    <div
                      key={feed.id}
                      className="flex items-center justify-between gap-2 bg-card border border-border rounded-lg px-3 py-2.5"
                    >
                      <span
                        className={`text-sm truncate ${
                          feed.enabled ? 'text-foreground' : 'text-muted-foreground line-through'
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
                            className="text-xs px-2 py-0.5 rounded-full font-mono transition-colors"
                            style={feed.enabled ? { color: 'oklch(0.72 0.12 65)' } : { color: 'oklch(0.55 0.018 65)' }}
                          >
                            {feed.enabled ? 'on' : 'off'}
                          </button>
                        </form>
                        <form action={deleteFeed}>
                          <input type="hidden" name="id" value={feed.id} />
                          <button
                            type="submit"
                            className="text-xs text-muted-foreground hover:text-destructive px-1 transition-colors"
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

          {/* Article list */}
          <section>
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-5">
              Latest Articles
            </h2>
            {allItems.length === 0 ? (
              <div className="py-20 text-center">
                <div className="text-muted-foreground/40 text-4xl mb-4 font-serif">∅</div>
                <p className="text-muted-foreground text-sm">
                  {feeds.length === 0
                    ? 'Add your first feed to start reading.'
                    : 'No articles found. Feeds may still be loading or empty.'}
                </p>
              </div>
            ) : (
              <div className="space-y-px">
                {allItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-l-2 border-transparent hover:border-[oklch(0.72_0.12_65/0.5)] bg-card hover:bg-[oklch(0.14_0.012_60)] border-y border-y-border px-5 py-4 transition-all duration-150 group"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <div className="text-foreground text-sm font-medium group-hover:text-[oklch(0.72_0.12_65)] transition-colors leading-snug">
                          {item.title}
                        </div>
                        <div className="text-muted-foreground text-xs mt-1 font-mono">{item.feedName}</div>
                      </div>
                      {item.date && (
                        <div className="text-muted-foreground text-xs font-mono flex-shrink-0 pt-0.5">
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
