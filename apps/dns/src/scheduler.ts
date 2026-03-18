import type { ScheduleBlock } from '@media-steward/types';

export function isCurrentlyBlocked(blocks: ScheduleBlock[], now: Date = new Date()): boolean {
  const day = now.getDay();
  const hour = now.getHours();
  return blocks.some(b => b.dayOfWeek === day && hour >= b.startHour && hour < b.endHour);
}
