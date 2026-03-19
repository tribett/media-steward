import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * GET /api/ai/models
 *
 * Checks whether Ollama is running locally and returns the list of
 * available models. The client polls this to decide whether to show
 * the AI repair UI.
 */
export async function GET() {
  try {
    const res = await fetch('http://localhost:11434/api/tags', {
      signal: AbortSignal.timeout(2_000), // fast fail if Ollama isn't running
    });

    if (!res.ok) {
      return NextResponse.json({ available: false, models: [] });
    }

    const data = await res.json() as { models?: { name: string }[] };
    const models = (data.models ?? []).map((m) => m.name);

    return NextResponse.json({ available: true, models });
  } catch {
    // Ollama not running, connection refused, or timeout
    return NextResponse.json({ available: false, models: [] });
  }
}
