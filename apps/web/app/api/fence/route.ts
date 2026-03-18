import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@media-steward/db';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const body = await request.json() as { enabled: boolean };

  await prisma.settings.upsert({
    where: { key: 'fence_enabled' },
    update: { value: body.enabled ? 'true' : 'false' },
    create: { key: 'fence_enabled', value: body.enabled ? 'true' : 'false' },
  });

  revalidatePath('/');
  return NextResponse.json({ ok: true });
}
