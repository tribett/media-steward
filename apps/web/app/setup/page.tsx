import os from 'os';
import { prisma } from '@media-steward/db';
import { completeSetup } from './actions';

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

export default async function SetupPage() {
  const sources = await prisma.blocklistSource.findMany();
  const localIP = getLocalIP();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-emerald-400 font-mono text-sm mb-2">
            media-steward
          </p>
          <h1 className="text-3xl font-bold text-zinc-100">
            Set up your household
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Configure your digital fence in just a few steps.
          </p>
        </div>

        <form action={completeSetup} className="space-y-8">
          {/* Section 1: Household Name */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-100">
                1. Household Name
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Give your setup a name to identify it on the network.
              </p>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="household_name"
                className="block text-sm font-medium text-zinc-300"
              >
                Name
              </label>
              <input
                id="household_name"
                type="text"
                name="household_name"
                defaultValue="My Household"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                placeholder="My Household"
              />
            </div>
          </section>

          <hr className="border-zinc-800" />

          {/* Section 2: Fence Level */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-100">
                2. Choose Your Fence Level
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Select how much to filter on your network.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <label className="relative cursor-pointer">
                <input
                  type="radio"
                  name="preset"
                  value="light"
                  className="peer sr-only"
                />
                <div className="peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 border border-zinc-700 rounded-lg p-4 transition-colors hover:border-zinc-500">
                  <div className="font-semibold text-zinc-100">Light</div>
                  <div className="text-sm text-zinc-400 mt-1">
                    Blocks ads and trackers only
                  </div>
                </div>
              </label>

              <label className="relative cursor-pointer">
                <input
                  type="radio"
                  name="preset"
                  value="balanced"
                  defaultChecked
                  className="peer sr-only"
                />
                <div className="peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 border border-zinc-700 rounded-lg p-4 transition-colors hover:border-zinc-500">
                  <div className="font-semibold text-zinc-100">Balanced</div>
                  <div className="text-sm text-zinc-400 mt-1">
                    Also blocks algorithmic feeds and short-form video
                  </div>
                </div>
              </label>

              <label className="relative cursor-pointer">
                <input
                  type="radio"
                  name="preset"
                  value="intentional"
                  className="peer sr-only"
                />
                <div className="peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 border border-zinc-700 rounded-lg p-4 transition-colors hover:border-zinc-500">
                  <div className="font-semibold text-zinc-100">Intentional</div>
                  <div className="text-sm text-zinc-400 mt-1">
                    Also blocks social media entirely
                  </div>
                </div>
              </label>
            </div>
          </section>

          <hr className="border-zinc-800" />

          {/* Section 3: Blocklist Sources */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-100">
                3. Blocklist Sources
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Choose which categories to block on your network.
              </p>
            </div>
            <div className="space-y-3">
              {sources.map((source) => (
                <label
                  key={source.id}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    name={`blocklist_${source.id}`}
                    defaultChecked={source.enabled}
                    className="mt-1 h-4 w-4 rounded border-zinc-600 bg-zinc-800 checked:bg-emerald-500 checked:border-emerald-500 focus:ring-emerald-500 focus:ring-offset-zinc-950"
                  />
                  <div>
                    <div className="text-zinc-100 font-medium group-hover:text-white transition-colors">
                      {source.name}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </section>

          <hr className="border-zinc-800" />

          {/* Section 4: Point Your Router */}
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-100">
                4. Point Your Router
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                After setup, direct your router's DNS to this server to cover
                every device on your network.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
              <p className="text-zinc-300 text-sm mb-3">
                Point your router's Primary DNS to this server:
              </p>
              <code className="block bg-zinc-800 rounded px-3 py-2 font-mono text-emerald-400 text-sm">
                {localIP}:53
              </code>
              <p className="text-zinc-400 text-xs mt-3">
                In BrightSpeed: Router Settings → Internet → DNS Settings →
                Primary DNS
              </p>
              <p className="text-zinc-300 text-sm mt-2 font-medium">
                Every device on your WiFi will be covered automatically.
              </p>
            </div>
          </section>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg font-medium text-base transition-colors cursor-pointer"
          >
            Start stewarding →
          </button>
        </form>
      </div>
    </main>
  );
}
