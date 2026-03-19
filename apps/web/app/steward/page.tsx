import Link from 'next/link';
import { prisma } from '@media-steward/db';
import { addRhythm, deleteRhythm } from './actions';

export const dynamic = 'force-dynamic';

const FULL_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ABBR_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default async function StewardPage() {
  const rhythms = await prisma.mediaRhythm.findMany();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {/* Header */}
        <div>
          <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-sm mb-2 inline-block">
            ← Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-zinc-100">Steward</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Your household's intentional media rhythms — practices you've chosen.
          </p>
        </div>

        {/* Rhythm cards */}
        {rhythms.length === 0 ? (
          <p className="text-zinc-500 text-sm">
            No rhythms yet. Add one below to get started.
          </p>
        ) : (
          <div className="space-y-3">
            {rhythms.map((rhythm) => {
              let parsedDays: string[] = [];
              try {
                parsedDays = JSON.parse(rhythm.days) as string[];
              } catch {
                parsedDays = [];
              }

              return (
                <div
                  key={rhythm.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg px-5 py-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-zinc-100">{rhythm.title}</h3>
                        {rhythm.time && (
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                            {rhythm.time}
                          </span>
                        )}
                      </div>
                      {rhythm.description && (
                        <p className="text-zinc-400 text-sm mt-1">{rhythm.description}</p>
                      )}
                      {/* Day pills */}
                      <div className="flex gap-1 mt-3 flex-wrap">
                        {FULL_DAYS.map((fullDay, i) => (
                          <span
                            key={fullDay}
                            className={`text-xs px-2 py-0.5 rounded font-mono ${
                              parsedDays.includes(fullDay)
                                ? 'bg-zinc-700 text-zinc-200'
                                : 'text-zinc-700'
                            }`}
                          >
                            {ABBR_DAYS[i]}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Delete button */}
                    <form action={deleteRhythm}>
                      <input type="hidden" name="id" value={rhythm.id} />
                      <button
                        type="submit"
                        className="text-zinc-600 hover:text-red-400 text-sm transition-colors flex-shrink-0"
                      >
                        ×
                      </button>
                    </form>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Add rhythm form */}
        <section>
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-4">
            Add a Rhythm
          </h2>
          <form action={addRhythm} className="space-y-4 bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            <div>
              <label className="block text-xs text-zinc-400 mb-1">Title *</label>
              <input
                type="text"
                name="title"
                required
                placeholder="No screens before breakfast"
                className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1">Description</label>
              <input
                type="text"
                name="description"
                placeholder="Optional description"
                className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-1">Time</label>
              <input
                type="text"
                name="time"
                placeholder="7:00 PM"
                className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs text-zinc-400 mb-2">Days</label>
              <div className="flex gap-2 flex-wrap">
                {FULL_DAYS.map((fullDay, i) => (
                  <label key={fullDay} className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name={`day_${fullDay}`}
                      className="h-3.5 w-3.5 rounded border-zinc-600 bg-zinc-800 checked:bg-emerald-500 checked:border-emerald-500"
                    />
                    <span className="text-xs text-zinc-300 font-mono">{ABBR_DAYS[i]}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              Add Rhythm
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
