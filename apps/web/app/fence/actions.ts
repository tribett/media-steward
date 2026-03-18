'use server';

import { prisma } from '@media-steward/db';
import { revalidatePath } from 'next/cache';

export async function updatePreset(formData: FormData) {
  const preset = formData.get('preset') as string;
  if (!['light', 'balanced', 'intentional'].includes(preset)) return;
  await prisma.settings.upsert({
    where: { key: 'fence_preset' },
    update: { value: preset },
    create: { key: 'fence_preset', value: preset },
  });
  revalidatePath('/fence');
  revalidatePath('/');
}

export async function toggleBlocklist(formData: FormData) {
  const id = formData.get('id') as string;
  if (!id) return;
  const enabled = formData.get('enabled') === 'true';
  await prisma.blocklistSource.update({
    where: { id },
    data: { enabled },
  });
  revalidatePath('/fence');
  revalidatePath('/');
}

export async function addScheduleBlock(formData: FormData) {
  const dayOfWeek = parseInt(formData.get('dayOfWeek') as string, 10);
  const startHour = parseInt(formData.get('startHour') as string, 10);
  const endHour = parseInt(formData.get('endHour') as string, 10);
  const label = (formData.get('label') as string)?.trim() || null;

  if (
    isNaN(dayOfWeek) || dayOfWeek < 0 || dayOfWeek > 6 ||
    isNaN(startHour) || startHour < 0 || startHour > 23 ||
    isNaN(endHour) || endHour < 1 || endHour > 24 ||
    startHour >= endHour
  ) {
    return;
  }

  await prisma.scheduleBlock.create({
    data: { dayOfWeek, startHour, endHour, label },
  });
  revalidatePath('/fence');
  revalidatePath('/');
}

export async function deleteScheduleBlock(formData: FormData) {
  const id = formData.get('id') as string;
  if (!id) return;
  await prisma.scheduleBlock.delete({ where: { id } });
  revalidatePath('/fence');
  revalidatePath('/');
}
