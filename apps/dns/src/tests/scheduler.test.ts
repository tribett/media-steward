import { describe, it, expect } from 'vitest';
import { isCurrentlyBlocked } from '../scheduler.js';

describe('isCurrentlyBlocked', () => {
  it('returns false with no blocks', () => {
    expect(isCurrentlyBlocked([], new Date('2026-03-18T14:00:00'))).toBe(false);
  });

  it('blocks within window', () => {
    const blocks = [{ id: '1', dayOfWeek: 3, startHour: 21, endHour: 24, label: 'Bedtime' }];
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-18T22:00:00'))).toBe(true);
  });

  it('allows outside window', () => {
    const blocks = [{ id: '1', dayOfWeek: 3, startHour: 21, endHour: 24, label: 'Bedtime' }];
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-18T14:00:00'))).toBe(false);
  });

  it('respects day of week', () => {
    const blocks = [{ id: '1', dayOfWeek: 0, startHour: 9, endHour: 17 }];
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-18T12:00:00'))).toBe(false);
  });

  // ── boundary conditions ───────────────────────────────────────────────────

  it('startHour is inclusive — blocks at exactly startHour', () => {
    const blocks = [{ id: '1', dayOfWeek: 3, startHour: 21, endHour: 24 }];
    // Wednesday 21:00 sharp — hour >= startHour, so must be blocked
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-18T21:00:00'))).toBe(true);
  });

  it('endHour is exclusive — does not block at exactly endHour', () => {
    const blocks = [{ id: '1', dayOfWeek: 3, startHour: 9, endHour: 17 }];
    // Wednesday 17:00 — hour is NOT < 17, so must be free
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-18T17:00:00'))).toBe(false);
  });

  it('blocks when any one of multiple blocks matches', () => {
    const blocks = [
      { id: '1', dayOfWeek: 1, startHour: 9, endHour: 17 },  // Monday 9–17
      { id: '2', dayOfWeek: 3, startHour: 21, endHour: 24 }, // Wednesday 21–24
    ];
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-18T22:00:00'))).toBe(true);  // Wed match
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-16T10:00:00'))).toBe(true);  // Mon match
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-20T12:00:00'))).toBe(false); // no match
  });

  it('all-day block (0–24) covers every hour of that day', () => {
    const blocks = [{ id: '1', dayOfWeek: 0, startHour: 0, endHour: 24 }];
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-15T00:00:00'))).toBe(true);  // Sun 00:00
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-15T12:00:00'))).toBe(true);  // Sun 12:00
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-15T23:00:00'))).toBe(true);  // Sun 23:00
    expect(isCurrentlyBlocked(blocks, new Date('2026-03-16T12:00:00'))).toBe(false); // Mon — free
  });
});
