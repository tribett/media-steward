'use server';

import { prisma } from '@media-steward/db';
import { revalidatePath } from 'next/cache';

const VALID_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export async function addRhythm(formData: FormData) {
  const title = (formData.get('title') as string)?.trim();
  const description = (formData.get('description') as string)?.trim() || null;
  const time = (formData.get('time') as string)?.trim() || null;

  if (!title) return;

  // Collect checked days (full names)
  const days = VALID_DAYS.filter(
    (day) => formData.get(`day_${day}`) === 'on'
  );

  // Generate stable ID from title (same slugId pattern as seed.ts)
  const id = title.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-');

  await prisma.mediaRhythm.upsert({
    where: { id },
    update: { title, description, time, days: JSON.stringify(days) },
    create: { id, title, description, time, days: JSON.stringify(days) },
  });

  revalidatePath('/steward');
  revalidatePath('/');
}

export async function deleteRhythm(formData: FormData) {
  const id = formData.get('id') as string;
  if (!id) return;
  await prisma.mediaRhythm.delete({ where: { id } });
  revalidatePath('/steward');
  revalidatePath('/');
}
