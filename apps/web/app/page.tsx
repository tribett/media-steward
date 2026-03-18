import { redirect } from 'next/navigation';
import { prisma } from '@media-steward/db';

export default async function HomePage() {
  const setting = await prisma.settings.findUnique({
    where: { key: 'setup_complete' },
  });

  if (setting?.value !== 'true') {
    redirect('/setup');
  }

  // Dashboard placeholder — will be replaced in Task 8
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <p className="text-zinc-400 font-mono text-sm">Dashboard loading…</p>
    </main>
  );
}
