// Domains that serve algorithmic recommendation feeds (content you didn't choose)
export const ALGORITHMIC_FEEDS: string[] = [
  'suggestqueries.google.com',
  'suggestqueries-clients6.google.com',
  'graph.instagram.com',
  'www.tiktok.com',
  'm.tiktok.com',
  'twitter.com',
  'x.com',
  'www.twitter.com',
  'www.x.com',
  'www.facebook.com',
  'm.facebook.com',
  'www.reddit.com',
  'old.reddit.com',
  'discover.snapchat.com',
];

// Domains that primarily serve short-form video content
export const SHORT_FORM_CONTENT: string[] = [
  'www.tiktok.com',
  'm.tiktok.com',
  'vm.tiktok.com',
  'vt.tiktok.com',
  'tiktok.com',
];

// Social media platforms
export const SOCIAL_MEDIA: string[] = [
  'facebook.com',
  'www.facebook.com',
  'm.facebook.com',
  'instagram.com',
  'www.instagram.com',
  'twitter.com',
  'x.com',
  'www.twitter.com',
  'www.x.com',
  'tiktok.com',
  'www.tiktok.com',
  'snapchat.com',
  'www.snapchat.com',
  'pinterest.com',
  'www.pinterest.com',
  'threads.net',
  'www.threads.net',
  'reddit.com',
  'www.reddit.com',
];

// Preset configuration — which lists are active at each fence level
export const PRESETS = {
  light: {
    useAdTrackers: true,
    useAlgorithmicFeeds: false,
    useShortFormContent: false,
    useSocialMedia: false,
  },
  balanced: {
    useAdTrackers: true,
    useAlgorithmicFeeds: true,
    useShortFormContent: true,
    useSocialMedia: false,
  },
  intentional: {
    useAdTrackers: true,
    useAlgorithmicFeeds: true,
    useShortFormContent: true,
    useSocialMedia: true,
  },
} as const;
