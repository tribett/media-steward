'use client';

import { useState } from 'react';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="text-xs font-mono transition-colors ml-2"
      style={copied ? { color: 'oklch(0.72 0.12 65)' } : { color: 'oklch(0.55 0.018 65)' }}
    >
      {copied ? '✓ copied' : 'copy'}
    </button>
  );
}
