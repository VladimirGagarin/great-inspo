export const TEMPLATES = [
  { id: 'x', name: 'X / Twitter', hint: 'Tweet with metrics' },
  { id: 'facebook', name: 'Facebook', hint: 'Feed post' },
  { id: 'instagram', name: 'Instagram', hint: 'Square post' },
  { id: 'tiktok', name: 'TikTok', hint: 'Comment card' },
  { id: 'threads', name: 'Threads', hint: 'Thread post' },
  { id: 'linkedin', name: 'LinkedIn', hint: 'Professional post' },
  { id: 'whatsapp', name: 'WhatsApp', hint: 'Chat bubble' },
  { id: 'telegram', name: 'Telegram', hint: 'Channel post · views' },
  { id: 'youtube', name: 'YouTube', hint: 'Video post' },
  { id: 'reddit', name: 'Reddit', hint: 'Subreddit post' },
  { id: 'snapchat', name: 'Snapchat', hint: 'Story · snap streak' },
  { id: 'wechat', name: 'WeChat', hint: 'Moments style', comments: true },
  { id: 'pinterest', name: 'Pinterest', hint: 'Pin · save button' },
  { id: 'tumblr', name: 'Tumblr', hint: 'Reblog · notes', comments: true },
  { id: 'mastodon', name: 'Mastodon', hint: 'Federated · boost/fav' },
  { id: 'bluesky', name: 'Bluesky', hint: 'AT Protocol post' },
  { id: 'discord', name: 'Discord', hint: 'Message bubble' },
  { id: 'slack', name: 'Slack', hint: 'Workspace message', comments: true },
  { id: 'quora', name: 'Quora', hint: 'Q&A answer' },
  { id: 'medium', name: 'Medium', hint: 'Article · claps' },
  { id: 'spotify', name: 'Spotify', hint: 'Now playing · track' },
  { id: 'podcast', name: 'Podcast', hint: 'Episode · player' },
  { id: 'quote', name: 'Quote', hint: 'Elegant quote' },
];

export const templateSupportsComments = (id) => Boolean(TEMPLATES.find((t) => t.id === id)?.comments);

export const EXTRA_METRICS = {
  tumblr: [{ key: 'notes', label: 'Notes', sub: 'likes + reblogs + replies' }],
};

export const templateWidth = (id) => {
  const map = {
    tiktok: 420,
    whatsapp: 400,
    instagram: 480,
    threads: 480,
    quote: 520,
    telegram: 480,
    snapchat: 380,
    wechat: 440,
    pinterest: 400,
    tumblr: 520,
    mastodon: 500,
    bluesky: 500,
    discord: 480,
    slack: 500,
    quora: 500,
    medium: 460,
    spotify: 420,
    podcast: 460,
  };
  return map[id] || 500;
};

export const VIRAL_PRESETS = [
  { label: 'Small', likes: 100, comments: 12, shares: 5, views: 2400 },
  { label: 'Rising', likes: 1200, comments: 84, shares: 40, views: 18000 },
  { label: 'Viral', likes: 10000, comments: 4000, shares: 5000, views: 850000 },
  { label: 'Mega', likes: 1000000, comments: 48000, shares: 120000, views: 12400000 },
];

export const EMOJIS = [
  '😀', '😂', '🥹', '😍', '😎', '🤔', '😭', '🥺',
  '🔥', '✨', '💯', '🎉', '🚀', '👀', '💪', '🙌',
  '❤️', '🤍', '💜', '⚡', '🌙', '☕', '🏆', '📈',
  '🐶', '🍕', '🌍', '🎨', '📸', '💡', '🧠', '🌈',
];

export const FIT_OPTIONS = [
  { value: 'cover', label: 'Cover' },
  { value: 'contain', label: 'Fit' },
  { value: 'fill', label: 'Stretch' },
];

export const SHAPE_OPTIONS = [
  { value: 'auto', label: 'Auto' },
  { value: 'square', label: 'Square' },
  { value: 'circle', label: 'Circle' },
];

export const ALIGN_GRID = [
  'top left', 'top center', 'top right',
  'center left', 'center', 'center right',
  'bottom left', 'bottom center', 'bottom right',
];

export const ALIGN_POS = {
  'top left': 'left top',
  'top center': 'center top',
  'top right': 'right top',
  'center left': 'left center',
  center: 'center center',
  'center right': 'right center',
  'bottom left': 'left bottom',
  'bottom center': 'center bottom',
  'bottom right': 'right bottom',
};

const now = new Date();
const defaultTimestamp = `${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })} · ${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

export const defaultConfig = {
  template: 'x',
  dark: false,
  author: 'Alex Morgan',
  handle: '@alexmorgan',
  verified: true,
  timestamp: defaultTimestamp,
  body: 'Just shipped a side project that turns any idea into a shareable social card in seconds. Would love your feedback!',
  photo: { src: null, zoom: 1, x: 0, y: 0, fit: 'cover', align: 'center', shape: 'auto', duration: '10:24' },
  avatar: { src: null },
  player: { time: '1:42', duration: '3:58', progress: 43 },
  stats: { likes: 12400, comments: 843, shares: 2100, views: 184000, notes: 9600 },
  show: { likes: true, comments: true, shares: true, views: true, notes: true },
  comments: {
    items: [
      { name: 'Riya Kapoor', text: 'This is unreal 🔥' },
      { name: 'Ken Owusu', text: 'Saving this for later' },
    ],
    likedBy: 'Alex Chen, Sam Ortiz, Riya Kapoor, Ken Owusu',
  },
  style: {
    fontSize: 15,
    accent: '',
    padding: 16,
    radius: 16,
    bgType: 'default',
    bg1: '#ffffff',
    bg2: '#e9e6ff',
  },
  watermark: true,
};
