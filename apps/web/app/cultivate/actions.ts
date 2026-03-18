'use server';

import { prisma } from '@media-steward/db';
import { revalidatePath } from 'next/cache';

export async function addFeed(formData: FormData) {
  const name = (formData.get('name') as string)?.trim();
  const url = (formData.get('url') as string)?.trim();

  if (!name || !url) return;

  // Basic URL validation
  try {
    new URL(url);
  } catch {
    return; // silently ignore invalid URL
  }

  await prisma.rssFeed.create({
    data: { name, url, enabled: true },
  });
  revalidatePath('/cultivate');
}

export async function deleteFeed(formData: FormData) {
  const id = formData.get('id') as string;
  if (!id) return;
  await prisma.rssFeed.delete({ where: { id } });
  revalidatePath('/cultivate');
}

export async function toggleFeed(formData: FormData) {
  const id = formData.get('id') as string;
  if (!id) return;
  const enabled = formData.get('enabled') === 'true';
  await prisma.rssFeed.update({ where: { id }, data: { enabled } });
  revalidatePath('/cultivate');
}
