import Link from 'next/link';
import { prisma } from '@media-steward/db';
import { OllamaRepair } from '@/components/ollama-repair';
import {
  updatePreset,
  toggleBlocklist,
  addScheduleBlock,
  deleteScheduleBlock,
} from './actions';

export const dynamic = 'force-dynamic';

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function formatHour(hour: number): string {
  if (hour === 0 || hour === 24) return '12:00 AM';
  if (hour === 12) return '12:00 PM';
  return hour < 12 ? `${hour}:00 AM` : `${hour - 12}:00 PM`;
}

function hourOptions(type: 'start' | 'end') {
  const range = type === 'start'
    ? Array.from({ length: 24 }, (_, i) => i)
    : Array.from({ length: 24 }, (_, i) => i + 1);

  return range.map((h) => {
    const label =
      h === 0 ? '12:00 AM'
      : h === 12 ? '12:00 PM'
      : h === 24 ? '12:00 AM (midnight)'
      : h < 12 ? `${h}:00 AM`
      : `${h - 12}:00 PM`;
    return { value: h, label };
  });
}

export default async function FencePage() {
  const [fencePreset, fenceEnabled, sources, scheduleBlocks] = await Promise.all([
    prisma.settings.findUnique({ where: { key: 'fence_preset' } }),
    prisma.settings.findUnique({ where: { key: 'fence_enabled' } }),
    prisma.blocklistSource.findMany({ orderBy: { name: 'asc' } }),
    prisma.scheduleBlock.findMany({
      orderBy: [{ dayOfWeek: 'asc' }, { startHour: 'asc' }],
    }),
  ]);

  const currentPreset = fencePreset?.value ?? 'balanced';
  const isActive = fenceEnabled?.value === 'true';

  const presets = [
    { value: 'light', label: 'Light', desc: 'Ads & trackers' },
    { value: 'balanced', label: 'Balanced', desc: 'Adds algorithmic feeds' },
    { value: 'intentional', label: 'Intentional', desc: 'Adds social media' },
  ] as const;

  return (
    <div className="min-h-screen pt-14 md:pt-0">
      <div className="max-w-3xl mx-auto px-5 py-10 space-y-12">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-1 tracking-wider uppercase">Section</p>
            <h1 className="text-3xl font-serif font-semibold text-foreground tracking-tight">Fence</h1>
          </div>
          <span
            className="px-3 py-1.5 rounded-full text-xs font-mono font-medium border"
            style={isActive ? {
              background: 'oklch(0.16 0.04 55)',
              color: 'oklch(0.72 0.12 65)',
              borderColor: 'oklch(0.72 0.12 65 / 0.3)',
            } : {
              background: 'oklch(0.16 0.008 55)',
              color: 'oklch(0.55 0.018 65)',
              borderColor: 'oklch(0.20 0.007 55)',
            }}
          >
            {isActive ? 'Active' : 'Paused'}
          </span>
        </div>

        {/* Section 1: Preset Selector */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground/60 w-4">01</span>
            <h2 className="text-base font-serif font-medium text-foreground">Fence Level</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {presets.map((p) => {
              const isSelected = currentPreset === p.value;
              return (
                <form key={p.value} action={updatePreset}>
                  <input type="hidden" name="preset" value={p.value} />
                  <button
                    type="submit"
                    className="w-full text-left rounded-xl p-4 border transition-all duration-150"
                    style={isSelected ? {
                      background: 'oklch(0.16 0.04 55)',
                      borderColor: 'oklch(0.72 0.12 65 / 0.5)',
                      color: 'oklch(0.92 0.012 75)',
                    } : {
                      background: 'oklch(0.12 0.008 55)',
                      borderColor: 'oklch(0.20 0.007 55)',
                      color: 'oklch(0.55 0.018 65)',
                    }}
                  >
                    <div className="font-semibold text-sm mb-1" style={isSelected ? { color: 'oklch(0.72 0.12 65)' } : undefined}>
                      {p.label}
                    </div>
                    <div className="text-xs leading-relaxed">{p.desc}</div>
                  </button>
                </form>
              );
            })}
          </div>
        </section>

        <div className="h-px bg-border" />

        {/* Section 2: Blocklist Sources */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground/60 w-4">02</span>
            <h2 className="text-base font-serif font-medium text-foreground">Blocklist Sources</h2>
          </div>
          {sources.length === 0 ? (
            <p className="text-muted-foreground text-sm">No blocklist sources configured.</p>
          ) : (
            <div className="space-y-2">
              {sources.map((source) => (
                <div
                  key={source.id}
                  className="flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-sm font-medium text-foreground truncate">
                      {source.name}
                    </span>
                    {source.domainCount > 0 && (
                      <span className="shrink-0 text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-full font-mono">
                        {source.domainCount.toLocaleString()} domains
                      </span>
                    )}
                  </div>
                  <form action={toggleBlocklist} className="shrink-0 ml-4">
                    <input type="hidden" name="id" value={source.id} />
                    <input
                      type="hidden"
                      name="enabled"
                      value={source.enabled ? 'false' : 'true'}
                    />
                    <button
                      type="submit"
                      className="text-xs font-mono font-medium px-3 py-1.5 rounded-full border transition-all duration-150"
                      style={source.enabled ? {
                        background: 'oklch(0.16 0.04 55)',
                        color: 'oklch(0.72 0.12 65)',
                        borderColor: 'oklch(0.72 0.12 65 / 0.3)',
                      } : {
                        background: 'oklch(0.16 0.008 55)',
                        color: 'oklch(0.55 0.018 65)',
                        borderColor: 'oklch(0.20 0.007 55)',
                      }}
                    >
                      {source.enabled ? 'Enabled' : 'Disabled'}
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="h-px bg-border" />

        {/* Section 3: Schedule Blocks */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground/60 w-4">03</span>
            <h2 className="text-base font-serif font-medium text-foreground">Schedule Blocks</h2>
          </div>
          <p className="text-muted-foreground text-sm -mt-2">
            Time blocks when all internet is blocked regardless of fence setting.
          </p>

          {/* Existing blocks */}
          {scheduleBlocks.length === 0 ? (
            <p className="text-muted-foreground/50 text-sm italic">No schedule blocks defined.</p>
          ) : (
            <div className="space-y-2">
              {scheduleBlocks.map((block) => (
                <div
                  key={block.id}
                  className="flex items-center justify-between bg-card border border-border rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono bg-secondary text-foreground px-2.5 py-1 rounded-lg">
                      {DAY_NAMES[block.dayOfWeek]}
                    </span>
                    <span className="text-sm text-foreground">
                      {formatHour(block.startHour)} – {formatHour(block.endHour)}
                    </span>
                    {block.label && (
                      <span className="text-xs text-muted-foreground">{block.label}</span>
                    )}
                  </div>
                  <form action={deleteScheduleBlock} className="shrink-0 ml-4">
                    <input type="hidden" name="id" value={block.id} />
                    <button
                      type="submit"
                      className="text-muted-foreground hover:text-destructive text-sm transition-colors"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}

          {/* Add block form */}
          <div className="bg-card border border-border rounded-xl px-5 py-5 mt-2">
            <h3 className="text-sm font-serif font-medium text-foreground mb-4">Add Block</h3>
            <form
              action={addScheduleBlock}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-end"
            >
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Day</label>
                <select
                  name="dayOfWeek"
                  className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none"
                >
                  {DAY_NAMES.map((d, i) => (
                    <option key={i} value={i}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Start</label>
                <select
                  name="startHour"
                  defaultValue={21}
                  className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none"
                >
                  {hourOptions('start').map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 font-medium">End</label>
                <select
                  name="endHour"
                  defaultValue={24}
                  className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none"
                >
                  {hourOptions('end').map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5 font-medium">
                  Label <span className="text-muted-foreground/50">(optional)</span>
                </label>
                <input
                  type="text"
                  name="label"
                  placeholder="Bedtime"
                  className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
                />
              </div>
              <div className="col-span-2 sm:col-span-4">
                <button
                  type="submit"
                  className="bg-secondary hover:bg-[oklch(0.20_0.008_55)] text-foreground px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border border-border"
                >
                  Add Block
                </button>
              </div>
            </form>
          </div>
        </section>

        <div className="h-px bg-border" />

        {/* Section 4: AI Repair (Ollama) */}
        <section className="space-y-5" id="ai-repair">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground/60 w-4">04</span>
            <h2 className="text-base font-serif font-medium text-foreground">AI Repair</h2>
          </div>
          <p className="text-muted-foreground text-sm -mt-2">
            If the browser extension stops hiding Shorts or recommendations, YouTube may have
            updated its page structure. Use a local Ollama model to diagnose the issue and
            generate updated CSS selectors — no data leaves your machine.
          </p>
          <OllamaRepair />
        </section>

      </div>
    </div>
  );
}
