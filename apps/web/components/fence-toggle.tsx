'use client';

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';

interface FenceToggleProps {
  initialEnabled: boolean;
}

export function FenceToggle({ initialEnabled }: FenceToggleProps) {
  const [enabled, setEnabled] = useState(initialEnabled);
  const [pending, setPending] = useState(false);

  async function handleToggle(checked: boolean) {
    setPending(true);
    setEnabled(checked); // optimistic
    try {
      const res = await fetch('/api/fence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: checked }),
      });
      if (!res.ok) setEnabled(!checked); // rollback on failure
    } catch {
      setEnabled(!checked); // rollback on error
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className={`text-xs font-mono ${enabled ? 'text-emerald-400' : 'text-zinc-500'}`}>
        {pending ? '…' : enabled ? 'Active' : 'Paused'}
      </span>
      <Switch
        checked={enabled}
        onCheckedChange={handleToggle}
        disabled={pending}
        className="data-[state=checked]:bg-emerald-500"
      />
    </div>
  );
}
