import os from 'os';
import { prisma } from '@media-steward/db';
import { completeSetup } from './actions';
import { CopyButton } from '@/components/copy-button';

export const dynamic = 'force-dynamic';

function getLocalIP(): string {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    if (!iface) continue;
    for (const addr of iface) {
      if (addr.family === 'IPv4' && !addr.internal) {
        return addr.address;
      }
    }
  }
  return '192.168.x.x';
}

const LOCAL_IP = getLocalIP();

export default async function SetupPage() {
  const sources = await prisma.blocklistSource.findMany();
  const localIP = LOCAL_IP;

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-xl mx-auto px-5 py-16">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center border"
              style={{
                background: 'oklch(0.16 0.04 55)',
                borderColor: 'oklch(0.72 0.12 65 / 0.3)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" stroke="oklch(0.72 0.12 65)" strokeWidth="1.5"/>
                <path d="M8 2v2M8 12v2M2 8h2M12 8h2" stroke="oklch(0.72 0.12 65)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">media-steward</span>
          </div>
          <h1 className="text-4xl font-serif font-semibold text-foreground tracking-tight mb-3">
            Set up your household
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Configure your digital fence in just a few steps.
          </p>
        </div>

        <form action={completeSetup} className="space-y-10">

          {/* Step 1: Household Name */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground/60 w-4">01</span>
              <h2 className="text-base font-serif font-medium text-foreground">Household Name</h2>
            </div>
            <input
              id="household_name"
              type="text"
              name="household_name"
              defaultValue="My Household"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground text-sm transition-all focus:outline-none"
              style={{ '--tw-ring-color': 'oklch(0.72 0.12 65)' } as React.CSSProperties}
              placeholder="My Household"
            />
          </div>

          <div className="h-px bg-border" />

          {/* Step 2: Fence Level */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground/60 w-4">02</span>
              <h2 className="text-base font-serif font-medium text-foreground">Fence Level</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'light', label: 'Light', desc: 'Blocks ads and trackers only' },
                { value: 'balanced', label: 'Balanced', desc: 'Also blocks algorithmic feeds', checked: true },
                { value: 'intentional', label: 'Intentional', desc: 'Also blocks social media entirely' },
              ].map(({ value, label, desc, checked }) => (
                <label key={value} className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="preset"
                    value={value}
                    defaultChecked={checked}
                    className="peer sr-only"
                  />
                  <div className="peer-checked:border-[oklch(0.72_0.12_65/0.6)] peer-checked:bg-[oklch(0.16_0.04_55)] border border-border rounded-xl p-4 transition-all hover:border-[oklch(0.30_0.010_55)]">
                    <div className="font-medium text-foreground text-sm mb-1">{label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* Step 3: Blocklists */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground/60 w-4">03</span>
              <h2 className="text-base font-serif font-medium text-foreground">Blocklist Sources</h2>
            </div>
            <div className="space-y-3">
              {sources.map((source) => (
                <label
                  key={source.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card cursor-pointer hover:border-[oklch(0.30_0.010_55)] transition-colors group"
                >
                  <div className="relative flex-shrink-0">
                    <input
                      type="checkbox"
                      name={`blocklist_${source.id}`}
                      defaultChecked={source.enabled}
                      className="peer h-4 w-4 rounded border-border bg-input cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    {source.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* Step 4: Router DNS */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground/60 w-4">04</span>
              <h2 className="text-base font-serif font-medium text-foreground">Point Your Router</h2>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                After setup, point your router&apos;s Primary DNS to this address to cover every device on your network:
              </p>
              <div className="flex items-center gap-3 bg-background rounded-lg px-4 py-3 border border-border">
                <code className="font-mono text-sm flex-1 tracking-wide" style={{ color: 'oklch(0.72 0.12 65)' }}>
                  {localIP}
                </code>
                <CopyButton text={localIP} />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                BrightSpeed: Router Settings → Internet → DNS Settings → Primary DNS
              </p>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
            style={{
              background: 'oklch(0.72 0.12 65)',
              color: 'oklch(0.085 0.006 55)',
              boxShadow: '0 0 20px oklch(0.72 0.12 65 / 0.2)',
            }}
          >
            Begin stewarding →
          </button>

        </form>
      </div>
    </main>
  );
}
