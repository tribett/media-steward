import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@media-steward/db';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  let body: { enabled: unknown };
  try {
    body = await request.json() as { enabled: unknown };
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  if (typeof body.enabled !== 'boolean') {
    return NextResponse.json({ error: 'enabled must be a boolean' }, { status: 400 });
  }

  await prisma.settings.upsert({
    where: { key: 'fence_enabled' },
    update: { value: body.enabled ? 'true' : 'false' },
    create: { key: 'fence_enabled', value: body.enabled ? 'true' : 'false' },
  });

  revalidatePath('/');
  return NextResponse.json({ ok: true });
}
