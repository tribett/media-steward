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
});
