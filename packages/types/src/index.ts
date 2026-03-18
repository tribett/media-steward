// packages/types/src/index.ts

export type FencePreset = 'light' | 'balanced' | 'intentional';

export interface FenceConfig {
  enabled: boolean;
  preset: FencePreset;
}

export interface ScheduleBlock {
  id: string;
  dayOfWeek: number;   // 0 = Sunday, 6 = Saturday
  startHour: number;   // 0–23
  endHour: number;     // exclusive, 1–24
  label?: string;
}

export interface RssFeed {
  id: string;
  name: string;
  url: string;
  enabled: boolean;
}

export interface MediaRhythm {
  id: string;
  title: string;
  description?: string;
  time?: string;    // e.g. "8:00 PM"
  days: string[];   // e.g. ["Friday", "Saturday"]
}

export interface BlocklistSource {
  id: string;
  name: string;
  url?: string;
  enabled: boolean;
  type: 'builtin' | 'custom';
  domainCount?: number;
  lastSynced?: string;
}

export interface DnsStats {
  totalQueries: number;
  blockedQueries: number;
  blockedToday: number;
  totalToday: number;
  blockRate: number;
}
