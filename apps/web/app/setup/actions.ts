'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@media-steward/db';
import { revalidatePath } from 'next/cache';

export async function completeSetup(formData: FormData) {
  const householdName =
    (formData.get('household_name') as string)?.trim() || 'My Household';
  const preset = (formData.get('preset') as string) || 'balanced';

  // Validate preset
  if (!['light', 'balanced', 'intentional'].includes(preset)) {
    throw new Error('Invalid preset');
  }

  // Save household name and preset
  await prisma.settings.upsert({
    where: { key: 'household_name' },
    update: { value: householdName },
    create: { key: 'household_name', value: householdName },
  });

  await prisma.settings.upsert({
    where: { key: 'fence_preset' },
    update: { value: preset },
    create: { key: 'fence_preset', value: preset },
  });

  // Update blocklist enabled states from checkboxes
  const sources = await prisma.blocklistSource.findMany();
  for (const source of sources) {
    const enabled = formData.get(`blocklist_${source.id}`) === 'on';
    await prisma.blocklistSource.update({
      where: { id: source.id },
      data: { enabled },
    });
  }

  // Mark setup complete
  await prisma.settings.upsert({
    where: { key: 'setup_complete' },
    update: { value: 'true' },
    create: { key: 'setup_complete', value: 'true' },
  });

  revalidatePath('/');
  redirect('/');
}
