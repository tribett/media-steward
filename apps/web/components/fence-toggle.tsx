'use client';

import { useState } from 'react';

interface FenceToggleProps {
  initialEnabled: boolean;
}

export function FenceToggle({ initialEnabled }: FenceToggleProps) {
  const [enabled, setEnabled] = useState(initialEnabled);
  const [pending, setPending] = useState(false);

  async function handleToggle() {
    const next = !enabled;
    setPending(true);
    setEnabled(next); // optimistic
    try {
      const res = await fetch('/api/fence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: next }),
      });
      if (!res.ok) setEnabled(!next); // rollback
    } catch {
      setEnabled(!next); // rollback
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      onClick={handleToggle}
      disabled={pending}
      className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full border text-xs font-medium font-mono transition-all duration-200 ${
        pending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'
      }`}
      style={enabled ? {
        background: 'oklch(0.16 0.04 55)',
        borderColor: 'oklch(0.72 0.12 65 / 0.4)',
        color: 'oklch(0.72 0.12 65)',
      } : undefined}
    >
      <span
        className="w-1.5 h-1.5 rounded-full transition-colors"
        style={enabled ? { background: 'oklch(0.72 0.12 65)' } : undefined}
      />
      {pending ? '…' : enabled ? 'Active' : 'Paused'}
    </button>
  );
}
