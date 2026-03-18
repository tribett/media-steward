import { redirect } from 'next/navigation';
import { prisma } from '@media-steward/db';
import Dashboard from '@/components/dashboard';

export default async function HomePage() {
  const setting = await prisma.settings.findUnique({
    where: { key: 'setup_complete' },
  });

  if (setting?.value !== 'true') {
    redirect('/setup');
  }

  return <Dashboard />;
}
