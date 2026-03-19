import Link from 'next/link';
import { prisma } from '@media-steward/db';
import { addRhythm, deleteRhythm } from './actions';

export const dynamic = 'force-dynamic';

const FULL_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ABBR_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default async function StewardPage() {
  const rhythms = await prisma.mediaRhythm.findMany();

  return (
    <main className="min-h-screen pt-14 md:pt-0">
      <div className="max-w-3xl mx-auto px-5 py-10 space-y-10">

        {/* Header */}
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1 tracking-wider uppercase">Section</p>
          <h1 className="text-3xl font-serif font-semibold text-foreground tracking-tight">Steward</h1>
          <p className="text-muted-foreground text-sm mt-1.5">
            Your household&apos;s intentional media rhythms — practices you&apos;ve chosen.
          </p>
        </div>

        {/* Rhythm cards */}
        {rhythms.length === 0 ? (
          <div className="py-16 text-center">
            <div className="text-muted-foreground/30 text-5xl mb-4 font-serif">∅</div>
            <p className="text-muted-foreground text-sm">
              No rhythms yet. Add one below to get started.
            </p>
          </div>
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
                  className="bg-card border border-border rounded-xl px-5 py-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="font-serif font-semibold text-foreground">{rhythm.title}</h3>
                        {rhythm.time && (
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-full"
                            style={{
                              background: 'oklch(0.16 0.04 55)',
                              color: 'oklch(0.72 0.12 65)',
                            }}
                          >
                            {rhythm.time}
                          </span>
                        )}
                      </div>
                      {rhythm.description && (
                        <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">{rhythm.description}</p>
                      )}
                      {/* Day pills */}
                      <div className="flex gap-1.5 mt-3.5 flex-wrap">
                        {FULL_DAYS.map((fullDay, i) => {
                          const active = parsedDays.includes(fullDay);
                          return (
                            <span
                              key={fullDay}
                              className="text-xs px-2.5 py-1 rounded-full font-mono"
                              style={active ? {
                                background: 'oklch(0.20 0.007 55)',
                                color: 'oklch(0.92 0.012 75)',
                              } : {
                                color: 'oklch(0.36 0.012 60)',
                              }}
                            >
                              {ABBR_DAYS[i]}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    {/* Delete button */}
                    <form action={deleteRhythm}>
                      <input type="hidden" name="id" value={rhythm.id} />
                      <button
                        type="submit"
                        className="text-muted-foreground hover:text-destructive text-sm transition-colors flex-shrink-0 px-1"
                      >
                        &times;
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
          <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-5">
            Add a Rhythm
          </h2>
          <form action={addRhythm} className="space-y-5 bg-card border border-border rounded-xl p-6">

            <div>
              <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Title *</label>
              <input
                type="text"
                name="title"
                required
                placeholder="No screens before breakfast"
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Description</label>
              <input
                type="text"
                name="description"
                placeholder="Optional description"
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Time</label>
              <input
                type="text"
                name="time"
                placeholder="7:00 PM"
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs text-muted-foreground mb-3 font-medium">Days</label>
              <div className="flex gap-2 flex-wrap">
                {FULL_DAYS.map((fullDay, i) => (
                  <label key={fullDay} className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      name={`day_${fullDay}`}
                      className="peer sr-only"
                    />
                    <span
                      className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-150 cursor-pointer select-none bg-[oklch(0.16_0.008_55)] border-[oklch(0.20_0.007_55)] text-[oklch(0.55_0.018_65)] peer-checked:bg-[oklch(0.72_0.12_65)] peer-checked:border-[oklch(0.72_0.12_65)] peer-checked:text-[oklch(0.085_0.006_55)]"
                    >
                      {ABBR_DAYS[i]}
                    </span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/50 mt-2">Leave all unchecked for every day</p>
            </div>

            <button
              type="submit"
              className="py-2.5 px-5 rounded-lg text-sm font-medium transition-all duration-150"
              style={{
                background: 'oklch(0.72 0.12 65)',
                color: 'oklch(0.085 0.006 55)',
              }}
            >
              Add Rhythm
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
