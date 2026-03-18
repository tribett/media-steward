import Link from 'next/link';
import { prisma } from '@media-steward/db';
import { FenceToggle } from './fence-toggle';

export default async function Dashboard() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [
    totalToday,
    blockedToday,
    fenceEnabledSetting,
    fencePresetSetting,
    householdNameSetting,
    rhythms,
  ] = await Promise.all([
    prisma.dnsQuery.count({ where: { timestamp: { gte: today } } }),
    prisma.dnsQuery.count({ where: { timestamp: { gte: today }, blocked: true } }),
    prisma.settings.findUnique({ where: { key: 'fence_enabled' } }),
    prisma.settings.findUnique({ where: { key: 'fence_preset' } }),
    prisma.settings.findUnique({ where: { key: 'household_name' } }),
    prisma.mediaRhythm.findMany({ take: 5 }),
  ]);

  const fenceEnabled = fenceEnabledSetting?.value === 'true';
  const fencePreset = fencePresetSetting?.value ?? 'balanced';
  const householdName = householdNameSetting?.value ?? 'My Household';
  const blockRate = totalToday > 0 ? Math.round((blockedToday / totalToday) * 100) : 0;

  // Get today's day name to filter rhythms (seed stores full names: "Monday", "Friday", etc.)
  const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = DAY_NAMES[new Date().getDay()];
  const todaysRhythms = rhythms.filter((r) => {
    try {
      const days: string[] = JSON.parse(r.days);
      return days.length === 0 || days.includes(todayName);
    } catch {
      return true;
    }
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <p className="text-emerald-400 font-mono text-xs">media-steward</p>
            <h1 className="text-2xl font-bold text-zinc-100">{householdName}</h1>
          </div>
          <FenceToggle initialEnabled={fenceEnabled} />
        </header>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Blocked today" value={blockedToday.toLocaleString()} />
          <StatCard label="Total queries" value={totalToday.toLocaleString()} />
          <StatCard label="Block rate" value={`${blockRate}%`} />
          <StatCard
            label="Fence level"
            value={fencePreset.charAt(0).toUpperCase() + fencePreset.slice(1)}
          />
        </div>

        {/* Navigation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <NavCard
            href="/fence"
            title="Fence"
            description="Manage DNS blocking, presets, and schedules"
            icon="🛡️"
          />
          <NavCard
            href="/cultivate"
            title="Cultivate"
            description="Curated RSS feeds — see only what you chose"
            icon="🌱"
          />
          <NavCard
            href="/steward"
            title="Steward"
            description="Your household's media rhythms"
            icon="📖"
          />
        </div>

        {/* Today's Rhythms */}
        {todaysRhythms.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-3">
              Today's Rhythms
            </h2>
            <div className="space-y-2">
              {todaysRhythms.map((rhythm) => (
                <div key={rhythm.id} className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <div>
                    <span className="text-zinc-100">{rhythm.title}</span>
                    {rhythm.time && (
                      <span className="text-zinc-500 font-mono text-xs ml-2">{rhythm.time}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
      <div className="text-2xl font-bold font-mono text-zinc-100">{value}</div>
      <div className="text-xs text-zinc-400 mt-1">{label}</div>
    </div>
  );
}

function NavCard({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="block bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg p-5 transition-colors group"
    >
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-semibold text-zinc-100 group-hover:text-white">{title}</div>
      <div className="text-sm text-zinc-400 mt-1">{description}</div>
    </Link>
  );
}
