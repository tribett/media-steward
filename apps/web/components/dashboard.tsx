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

  const presetLabel = fencePreset.charAt(0).toUpperCase() + fencePreset.slice(1);

  return (
    <main className="min-h-screen pt-14 md:pt-0">
      <div className="max-w-3xl mx-auto px-5 py-10 space-y-10">

        {/* Header */}
        <header className="flex items-start justify-between">
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-1 tracking-wider uppercase">Dashboard</p>
            <h1 className="text-3xl font-serif font-semibold text-foreground tracking-tight">{householdName}</h1>
          </div>
          <FenceToggle initialEnabled={fenceEnabled} />
        </header>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Blocked today" value={blockedToday.toLocaleString()} highlight={blockedToday > 0} />
          <StatCard label="Total queries" value={totalToday.toLocaleString()} />
          <StatCard label="Block rate" value={`${blockRate}%`} highlight={blockRate > 0} />
          <StatCard label="Fence level" value={presetLabel} />
        </div>

        {/* Navigation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <NavCard
            href="/fence"
            title="Fence"
            description="DNS blocking, presets & schedules"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2L18 6.5v7L10 18 2 13.5v-7L10 2z"/>
                <path d="M10 7v6M7 8.5L10 7l3 1.5"/>
              </svg>
            }
          />
          <NavCard
            href="/cultivate"
            title="Cultivate"
            description="Curated RSS — only what you chose"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 18v-8"/>
                <path d="M10 10C10 10 5 9 4 5c3 0 5.5 2 6 5z"/>
                <path d="M10 10C10 10 15 9 16 5c-3 0-5.5 2-6 5z"/>
                <path d="M10 10c0 0 0-5-2.5-7.5C7 5 8.5 7.5 10 10z"/>
              </svg>
            }
          />
          <NavCard
            href="/steward"
            title="Steward"
            description="Your household's media rhythms"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="14" height="14" rx="2"/>
                <path d="M7 8h6M7 12h4"/>
              </svg>
            }
          />
        </div>

        {/* Today's Rhythms */}
        {todaysRhythms.length > 0 && (
          <section>
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              Today&apos;s Rhythms
            </h2>
            <div className="space-y-2">
              {todaysRhythms.map((rhythm) => (
                <div
                  key={rhythm.id}
                  className="flex items-center gap-4 py-3 px-4 rounded-xl bg-card border border-border"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'oklch(0.72 0.12 65)' }}
                  />
                  <span className="text-sm text-foreground flex-1">{rhythm.title}</span>
                  {rhythm.time && (
                    <span className="text-xs font-mono text-muted-foreground">{rhythm.time}</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}

function StatCard({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div
        className="text-2xl font-mono font-medium tabular-nums"
        style={highlight ? { color: 'oklch(0.72 0.12 65)' } : undefined}
      >
        {value}
      </div>
      <div className="text-xs text-muted-foreground mt-1.5 font-medium">{label}</div>
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
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block bg-card border border-border rounded-xl p-5 transition-all duration-200 group hover:bg-[oklch(0.14_0.012_60)] hover:border-[oklch(0.72_0.12_65/0.4)]"
    >
      <div className="text-muted-foreground group-hover:text-[oklch(0.72_0.12_65)] mb-3 transition-colors">
        {icon}
      </div>
      <div className="font-serif font-semibold text-foreground text-base mb-1">
        {title}
      </div>
      <div className="text-xs text-muted-foreground leading-relaxed">{description}</div>
    </Link>
  );
}
