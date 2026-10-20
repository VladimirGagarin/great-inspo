export const TEMPLATES = [
  { id: 'x', name: 'X / Twitter', hint: 'Tweet with metrics', comments: true, premiumComments: true },
  { id: 'facebook', name: 'Facebook', hint: 'Feed post', comments: true, premiumComments: true },
  { id: 'instagram', name: 'Instagram', hint: 'Square post', comments: true, premiumComments: true },
  { id: 'tiktok', name: 'TikTok', hint: 'Comment card' },
  { id: 'threads', name: 'Threads', hint: 'Thread post' },
  { id: 'linkedin', name: 'LinkedIn', hint: 'Professional post', comments: true, premiumComments: true },
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
  { id: 'glass', name: 'Glass', hint: 'Frosted glassmorphism', cat: 'aesthetic' },
  { id: 'neu', name: 'Soft UI', hint: 'Neumorphic extrude', cat: 'aesthetic' },
  { id: 'elegant', name: 'Elegant', hint: 'Serif quote card', cat: 'aesthetic' },
  { id: 'polaroid', name: 'Polaroid', hint: 'Photo + caption strip', cat: 'aesthetic' },
  { id: 'magazine', name: 'Magazine', hint: 'Editorial headline', cat: 'aesthetic' },
  { id: 'mesh', name: 'Mesh', hint: 'Gradient blob background', cat: 'aesthetic' },
  { id: 'noir', name: 'Noir', hint: 'Monochrome · high contrast', cat: 'aesthetic' },
  { id: 'vaporwave', name: 'Vaporwave', hint: 'Retro pink / cyan', cat: 'aesthetic' },
  { id: 'minimal', name: 'Minimal', hint: 'Clean thin-line card', cat: 'aesthetic' },
  { id: 'news', name: 'Breaking News', hint: 'Headline ticker', cat: 'aesthetic' },
  { id: 'storm', name: 'Thread', hint: 'Stacked posts', cat: 'aesthetic', comments: true },
  { id: 'chat', name: 'Chat', hint: 'Conversation bubbles', cat: 'aesthetic', comments: true },
  { id: 'ripped', name: 'Ripped Paper', hint: 'Torn-edge photo', cat: 'aesthetic' },
  { id: 'visualizer', name: 'Visualizer', hint: 'Audio bars', cat: 'aesthetic' },
  { id: 'vinyl', name: 'Vinyl', hint: 'Album + record', cat: 'aesthetic' },
  { id: 'bounty-posty', name: 'Bounty Posty', hint: 'Old paper bounty poster', cat: 'aesthetic', premium: true },
  { id: 'success', name: 'Success', hint: 'Congrats · achievement', cat: 'aesthetic', premium: true },
  { id: 'christmas', name: 'Merry Christmas', hint: 'Holiday greeting', cat: 'aesthetic', premium: true },
  { id: 'eid', name: 'Eid al-Fitr', hint: 'Festival greeting', cat: 'aesthetic', premium: true },
  { id: 'diwali', name: 'Diwali', hint: 'Festival of lights', cat: 'aesthetic', premium: true },
  { id: 'birthday', name: 'Happy Birthday', hint: 'Party celebration', cat: 'aesthetic', premium: true },
  { id: 'sorry', name: 'Sorry', hint: 'Apology card', cat: 'aesthetic', premium: true },
  { id: 'thankyou', name: 'Thank You', hint: 'Gratitude card', cat: 'aesthetic', premium: true },
  { id: 'recovery', name: 'Quick Recovery', hint: 'Get well soon', cat: 'aesthetic', premium: true },
  { id: 'newyear', name: 'Happy New Year', hint: 'Countdown celebration', cat: 'aesthetic', premium: true },
  { id: 'valentine', name: "Valentine's Day", hint: 'Love card', cat: 'aesthetic', premium: true },
  { id: 'wedding', name: 'Best Wishes', hint: 'Wedding · engagement', cat: 'aesthetic', premium: true },
  { id: 'goodluck', name: 'Good Luck', hint: 'Encouragement card', cat: 'aesthetic', premium: true },
  { id: 'mothersday', name: "Mother's Day", hint: 'Tribute card', cat: 'aesthetic', premium: true },
  { id: 'fathersday', name: "Father's Day", hint: 'Tribute card', cat: 'aesthetic', premium: true },
  { id: 'ramadan', name: 'Ramadan Kareem', hint: 'Blessed month', cat: 'aesthetic', premium: true },
  { id: 'twitch', name: 'Twitch', hint: 'Stream preview', cat: 'social' },
  { id: 'github', name: 'GitHub', hint: 'Repo/commit style', cat: 'social' },
  { id: 'wikipedia', name: 'Wikipedia', hint: 'Article snapshot', cat: 'social', premium: true },
  { id: 'resume', name: 'Resume Card', hint: 'Mini CV', cat: 'social', premium: true },
  { id: 'hackernews', name: 'Hacker News', hint: 'Front page post', cat: 'social', premium: true },
  { id: 'didyouknow', name: 'Did You Know?', hint: 'Fact card · custom watermark', cat: 'social', premium: true },
];

export const templateSupportsComments = (id) => Boolean(TEMPLATES.find((t) => t.id === id)?.comments);

export const templateCommentsPremium = (id) => Boolean(TEMPLATES.find((t) => t.id === id)?.premiumComments);

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
    glass: 460,
    neu: 440,
    elegant: 460,
    polaroid: 400,
    magazine: 480,
    mesh: 460,
    noir: 440,
    vaporwave: 460,
    minimal: 420,
    news: 480,
    storm: 480,
    chat: 400,
    ripped: 440,
    visualizer: 460,
    vinyl: 480,
    'bounty-posty': 500,
    success: 480,
    christmas: 480,
    eid: 480,
    diwali: 480,
    birthday: 480,
    sorry: 480,
    thankyou: 480,
    recovery: 480,
    newyear: 480,
    valentine: 480,
    wedding: 480,
    goodluck: 480,
    mothersday: 480,
    fathersday: 480,
    ramadan: 480,
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
  avatar: { src: null, x: 0, y: 0, zoom: 1, align: 'center' },
  player: { time: '1:42', duration: '3:58', progress: 43 },
  stats: { likes: 12400, comments: 843, shares: 2100, views: 184000, notes: 9600 },
  show: { likes: true, comments: false, shares: true, views: true, notes: true },
  comments: {
    items: [
      { name: 'Riya Kapoor', text: 'This is unreal 🔥' },
      { name: 'Ken Owusu', text: 'Saving this for later' },
    ],
    likedBy: 'Alex Chen, Sam Ortiz, Riya Kapoor, Ken Owusu',
  },
  style: {
    fontSize: 15,
    font: 'default',
    accent: '',
    padding: 16,
    radius: 16,
    bgType: 'default',
    bg1: '#ffffff',
    bg2: '#e9e6ff',
  },
  watermark: true,
  watermarkText: '',
};

