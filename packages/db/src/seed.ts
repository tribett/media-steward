import { PrismaClient } from '../generated/client';

const prisma = new PrismaClient();

async function main() {
  // Default settings
  const defaultSettings = [
    { key: 'setup_complete', value: 'false' },
    { key: 'household_name', value: 'My Household' },
    { key: 'fence_enabled', value: 'true' },
    { key: 'fence_preset', value: 'balanced' },
  ];

  for (const setting of defaultSettings) {
    await prisma.settings.upsert({
      where: { key: setting.key },
      update: {},
      create: setting,
    });
  }

  // Built-in blocklist sources
  const builtinSources = [
    {
      id: 'ads-trackers',
      name: 'Ads & Trackers',
      url: 'https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts',
      type: 'builtin',
      enabled: true,
    },
    {
      id: 'algorithmic-feeds',
      name: 'Algorithmic Feeds',
      url: null,
      type: 'builtin',
      enabled: true,
    },
    {
      id: 'short-form-content',
      name: 'Short-form Content',
      url: null,
      type: 'builtin',
      enabled: true,
    },
    {
      id: 'social-media',
      name: 'Social Media',
      url: null,
      type: 'builtin',
      enabled: false,
    },
  ];

  for (const source of builtinSources) {
    await prisma.blocklistSource.upsert({
      where: { id: source.id },
      update: {},
      create: {
        id: source.id,
        name: source.name,
        url: source.url ?? undefined,
        type: source.type,
        enabled: source.enabled,
      },
    });
  }

  // Default media rhythms
  const defaultRhythms = [
    {
      title: 'No screens before breakfast',
      description: 'Protect the morning. Start the day without a feed.',
      time: '8:00 AM',
      days: JSON.stringify(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
    },
    {
      title: 'Friday family movie',
      description: 'Chosen together. Watched together.',
      time: '7:00 PM',
      days: JSON.stringify(['Friday']),
    },
    {
      title: 'Reading hour',
      description: 'Books over feeds after dinner.',
      time: '8:00 PM',
      days: JSON.stringify(['Monday', 'Tuesday', 'Wednesday', 'Thursday']),
    },
  ];

  for (const rhythm of defaultRhythms) {
    await prisma.mediaRhythm.upsert({
      where: { title: rhythm.title },
      update: {},
      create: rhythm,
    });
  }

  console.log('✓ Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
