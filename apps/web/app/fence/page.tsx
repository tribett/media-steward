import Link from 'next/link';
import { prisma } from '@media-steward/db';
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

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        {/* Header */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors"
          >
            ← Back
          </Link>
          <h1 className="text-2xl font-bold flex-1">Fence</h1>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium ${
              isActive
                ? 'bg-emerald-900 text-emerald-300'
                : 'bg-zinc-800 text-zinc-400'
            }`}
          >
            {isActive ? 'Active' : 'Paused'}
          </span>
        </div>

        {/* Section 1: Preset Selector */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-100">Fence Level</h2>
          <div className="flex gap-3">
            {(['light', 'balanced', 'intentional'] as const).map((p) => (
              <form key={p} action={updatePreset}>
                <input type="hidden" name="preset" value={p} />
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    currentPreset === p
                      ? 'bg-emerald-600 text-white'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  }`}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              </form>
            ))}
          </div>
        </section>

        {/* Section 2: Blocklist Sources */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-100">Blocklist Sources</h2>
          {sources.length === 0 ? (
            <p className="text-zinc-500 text-sm">No blocklist sources configured.</p>
          ) : (
            <div className="space-y-2">
              {sources.map((source) => (
                <div
                  key={source.id}
                  className="flex items-center justify-between bg-zinc-900 rounded-lg px-4 py-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-sm font-medium text-zinc-100 truncate">
                      {source.name}
                    </span>
                    {source.domainCount > 0 && (
                      <span className="shrink-0 text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">
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
                      className={`text-sm font-medium px-3 py-1 rounded-md transition-colors ${
                        source.enabled
                          ? 'text-emerald-400 bg-emerald-950 hover:bg-emerald-900'
                          : 'text-zinc-500 bg-zinc-800 hover:bg-zinc-700'
                      }`}
                    >
                      {source.enabled ? 'Enabled' : 'Disabled'}
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section 3: Schedule Blocks */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-100">Schedule Blocks</h2>
          <p className="text-zinc-500 text-sm">
            Time blocks when all internet is blocked regardless of fence setting.
          </p>

          {/* Existing blocks */}
          {scheduleBlocks.length === 0 ? (
            <p className="text-zinc-600 text-sm italic">No schedule blocks defined.</p>
          ) : (
            <div className="space-y-2">
              {scheduleBlocks.map((block) => (
                <div
                  key={block.id}
                  className="flex items-center justify-between bg-zinc-900 rounded-lg px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                      {DAY_NAMES[block.dayOfWeek]}
                    </span>
                    <span className="text-sm text-zinc-200">
                      {formatHour(block.startHour)} – {formatHour(block.endHour)}
                    </span>
                    {block.label && (
                      <span className="text-xs text-zinc-500">{block.label}</span>
                    )}
                  </div>
                  <form action={deleteScheduleBlock} className="shrink-0 ml-4">
                    <input type="hidden" name="id" value={block.id} />
                    <button
                      type="submit"
                      className="text-zinc-500 hover:text-red-400 text-sm transition-colors"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}

          {/* Add block form */}
          <div className="bg-zinc-900 rounded-lg px-4 py-4 mt-4">
            <h3 className="text-sm font-medium text-zinc-300 mb-3">Add Block</h3>
            <form
              action={addScheduleBlock}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-end"
            >
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Day</label>
                <select
                  name="dayOfWeek"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1.5 text-sm text-zinc-100"
                >
                  {DAY_NAMES.map((d, i) => (
                    <option key={i} value={i}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Start (0–23)</label>
                <input
                  type="number"
                  name="startHour"
                  min="0"
                  max="23"
                  defaultValue="21"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1.5 text-sm text-zinc-100"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-400 mb-1">End (1–24)</label>
                <input
                  type="number"
                  name="endHour"
                  min="1"
                  max="24"
                  defaultValue="24"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1.5 text-sm text-zinc-100"
                />
              </div>
              <div>
                <label className="block text-xs text-zinc-400 mb-1">
                  Label (optional)
                </label>
                <input
                  type="text"
                  name="label"
                  placeholder="Bedtime"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1.5 text-sm text-zinc-100"
                />
              </div>
              <div className="col-span-2 sm:col-span-4">
                <button
                  type="submit"
                  className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Add Block
                </button>
              </div>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}
