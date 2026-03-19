import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const dynamic = 'force-dynamic';

// The built-in selectors per feature — sent to the AI as context
const BUILTIN_SELECTORS: Record<string, string[]> = {
  blockShorts: [
    'ytd-rich-shelf-renderer[is-shorts]',
    'ytd-rich-shelf-renderer[is-shorts-column]',
    'ytd-reel-shelf-renderer',
    'ytd-rich-grid-slim-media',
    'ytd-reel-item-renderer',
    '[page-subtype="shorts"]',
  ],
  hideSidebar: [
    '#secondary.ytd-watch-flexy',
    '#secondary-inner.ytd-watch-flexy',
    'ytd-watch-next-secondary-results-renderer',
  ],
  hideTrending: [
    'ytd-guide-entry-renderer:has(a[href="/feed/trending"])',
    'ytd-guide-entry-renderer:has(a[href="/feed/explore"])',
    'ytd-mini-guide-entry-renderer:has(a[href="/feed/trending"])',
  ],
};

const FEATURE_DESCRIPTIONS: Record<string, string> = {
  blockShorts:   'YouTube Shorts shelves (homepage, search results, channel pages)',
  hideSidebar:   '"Up Next" recommendations sidebar on video watch pages',
  hideTrending:  'Trending & Explore links in the YouTube navigation sidebar',
};

function buildPrompt(feature: string, domHints: string): string {
  const selectors = BUILTIN_SELECTORS[feature] ?? [];
  const desc = FEATURE_DESCRIPTIONS[feature] ?? feature;

  return `You are an expert Chrome extension developer who specialises in DOM selectors for YouTube.

A content filter extension hides "${desc}" using CSS selectors. Those selectors have stopped matching — YouTube likely updated its page structure.

FAILING SELECTORS (all return 0 elements):
${selectors.map((s) => `  ${s}`).join('\n')}

${domHints ? `YOUTUBE DOM HINTS from the user's live page:\n${domHints}\n` : ''}

YouTube uses Polymer/Lit custom elements with a "ytd-" prefix. Element names are stable but attributes (like [is-shorts]) can change. Href-based :has() selectors are very resilient.

Please respond with:

## What likely changed
One or two sentences explaining the probable cause.

## Updated selectors
A CSS code block containing 4–6 selectors, most specific first:
\`\`\`css
/* selector — why it targets the element */
ytd-example-renderer[attribute]
\`\`\`

## Quick console test
One line the user can paste into the YouTube browser console to verify:
\`\`\`js
document.querySelectorAll('SELECTOR').length
\`\`\`

Be concise. Only suggest selectors you are confident about. Do not include general notes — just the diagnosis, selectors, and test.`;
}

/**
 * POST /api/ai/repair
 *
 * Body: { feature: string, model: string, domHints?: string }
 *
 * Streams a repair suggestion from Ollama for a broken extension feature.
 * Uses @ai-sdk/openai pointed at localhost:11434 (Ollama's OpenAI-compat API).
 */
export async function POST(req: Request) {
  const { feature, model, domHints = '' } = await req.json() as {
    feature: string;
    model: string;
    domHints?: string;
  };

  if (!feature || !model) {
    return new Response('Missing feature or model', { status: 400 });
  }

  // Ollama exposes an OpenAI-compatible API at /v1 — no adapter needed
  const ollama = createOpenAI({
    baseURL: 'http://localhost:11434/v1',
    apiKey:  'ollama', // required by SDK type, ignored by Ollama
  });

  const result = streamText({
    model:       ollama(model),
    prompt:      buildPrompt(feature, domHints),
    temperature: 0.2,  // low temp for deterministic selector suggestions
  });

  return result.toTextStreamResponse();
}
