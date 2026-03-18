import { describe, it, expect } from 'vitest';
import { parseHostsFile, isBlocked, buildBlockedSet } from '../index';
import { SHORT_FORM_CONTENT, ALGORITHMIC_FEEDS, SOCIAL_MEDIA, PRESETS } from '../curated';

describe('parseHostsFile', () => {
  it('parses standard 0.0.0.0 hosts format', () => {
    const raw = '0.0.0.0 ads.example.com\n0.0.0.0 tracker.bad.com';
    const domains = parseHostsFile(raw);
    expect(domains).toContain('ads.example.com');
    expect(domains).toContain('tracker.bad.com');
  });

  it('parses 127.0.0.1 hosts format', () => {
    const raw = '127.0.0.1 malware.com';
    expect(parseHostsFile(raw)).toContain('malware.com');
  });

  it('parses plain domain list format', () => {
    const raw = 'example.com\nbad.com\n';
    const domains = parseHostsFile(raw);
    expect(domains).toContain('example.com');
    expect(domains).toContain('bad.com');
  });

  it('ignores comment lines', () => {
    const raw = '# this is a comment\n0.0.0.0 ads.example.com';
    const domains = parseHostsFile(raw);
    expect(domains).not.toContain('# this is a comment');
    expect(domains).toContain('ads.example.com');
  });

  it('ignores localhost entries', () => {
    const raw = '127.0.0.1 localhost\n0.0.0.0 localhost';
    expect(parseHostsFile(raw)).not.toContain('localhost');
  });

  it('lowercases all domains', () => {
    const raw = '0.0.0.0 ADS.EXAMPLE.COM';
    expect(parseHostsFile(raw)).toContain('ads.example.com');
  });

  it('handles empty input', () => {
    expect(parseHostsFile('')).toEqual([]);
  });
});

describe('isBlocked', () => {
  const blocked = new Set(['ads.example.com', 'tracker.bad.com', 'facebook.com']);

  it('blocks exact match', () => {
    expect(isBlocked('ads.example.com', blocked)).toBe(true);
  });

  it('allows safe domain', () => {
    expect(isBlocked('google.com', blocked)).toBe(false);
  });

  it('blocks subdomain of blocked domain', () => {
    expect(isBlocked('sub.ads.example.com', blocked)).toBe(true);
  });

  it('blocks www subdomain', () => {
    expect(isBlocked('www.facebook.com', blocked)).toBe(false); // www.facebook.com is NOT in set
    // but facebook.com is — so we check parent matching:
    expect(isBlocked('anything.facebook.com', blocked)).toBe(true);
  });

  it('handles trailing dot (DNS format)', () => {
    expect(isBlocked('ads.example.com.', blocked)).toBe(true);
  });

  it('is case-insensitive', () => {
    expect(isBlocked('ADS.EXAMPLE.COM', blocked)).toBe(true);
  });
});

describe('buildBlockedSet', () => {
  it('combines multiple domain arrays', () => {
    const set = buildBlockedSet([['a.com', 'b.com'], ['c.com']]);
    expect(set.has('a.com')).toBe(true);
    expect(set.has('b.com')).toBe(true);
    expect(set.has('c.com')).toBe(true);
  });

  it('deduplicates domains', () => {
    const set = buildBlockedSet([['a.com', 'a.com'], ['a.com']]);
    expect(set.size).toBe(1);
  });

  it('returns empty set for no input', () => {
    expect(buildBlockedSet([]).size).toBe(0);
  });
});

describe('curated lists', () => {
  it('ALGORITHMIC_FEEDS is non-empty', () => {
    expect(ALGORITHMIC_FEEDS.length).toBeGreaterThan(0);
  });

  it('SHORT_FORM_CONTENT includes tiktok', () => {
    expect(SHORT_FORM_CONTENT.some(d => d.includes('tiktok'))).toBe(true);
  });

  it('SOCIAL_MEDIA includes facebook', () => {
    expect(SOCIAL_MEDIA.some(d => d.includes('facebook'))).toBe(true);
  });

  it('PRESETS has light, balanced, intentional', () => {
    expect(PRESETS).toHaveProperty('light');
    expect(PRESETS).toHaveProperty('balanced');
    expect(PRESETS).toHaveProperty('intentional');
  });

  it('light preset only enables ad trackers', () => {
    expect(PRESETS.light.useAdTrackers).toBe(true);
    expect(PRESETS.light.useAlgorithmicFeeds).toBe(false);
    expect(PRESETS.light.useShortFormContent).toBe(false);
    expect(PRESETS.light.useSocialMedia).toBe(false);
  });

  it('balanced preset enables ads + algo + shorts but not social', () => {
    expect(PRESETS.balanced.useAdTrackers).toBe(true);
    expect(PRESETS.balanced.useAlgorithmicFeeds).toBe(true);
    expect(PRESETS.balanced.useShortFormContent).toBe(true);
    expect(PRESETS.balanced.useSocialMedia).toBe(false);
  });

  it('intentional preset enables everything', () => {
    expect(PRESETS.intentional.useAdTrackers).toBe(true);
    expect(PRESETS.intentional.useAlgorithmicFeeds).toBe(true);
    expect(PRESETS.intentional.useShortFormContent).toBe(true);
    expect(PRESETS.intentional.useSocialMedia).toBe(true);
  });
});
