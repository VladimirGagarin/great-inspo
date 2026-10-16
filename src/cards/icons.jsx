const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
});

export function Reply({ size = 18, color = 'currentColor', filled = false }) {
  return (
    <svg {...base(size)} fill={filled ? color : 'none'} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.6 8.6 0 0 1-3.9-.9L3 20.5l1.6-4.7a8.4 8.4 0 0 1 1-8A8.4 8.4 0 0 1 12.5 3.1 8.4 8.4 0 0 1 21 11.5z" />
    </svg>
  );
}

export function Repost({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

export function Heart({ size = 18, color = 'currentColor', filled = false }) {
  return (
    <svg {...base(size)} fill={filled ? color : 'none'} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

export function Views({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M21 20H3" />
    </svg>
  );
}

export function Bookmark({ size = 18, color = 'currentColor', filled = false }) {
  return (
    <svg {...base(size)} fill={filled ? color : 'none'} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function ShareArrow({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
      <path d="M12 3v13" />
      <path d="m7.5 7.5 4.5-4.5 4.5 4.5" />
    </svg>
  );
}

export function Send({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4z" />
    </svg>
  );
}

export function Dots({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill={color}>
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="12" cy="12" r="1.7" />
      <circle cx="19" cy="12" r="1.7" />
    </svg>
  );
}

export function Globe({ size = 13, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.7">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </svg>
  );
}

export function ThumbUp({ size = 16, color = 'currentColor', filled = false }) {
  return (
    <svg {...base(size)} fill={filled ? color : 'none'} stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z" />
      <path d="M7 10l4.2-7.2a2 2 0 0 1 3.5 1.7L14 9h4.8a2 2 0 0 1 2 2.4l-1.4 7A2 2 0 0 1 17.4 20H7" />
    </svg>
  );
}

export function ThumbDown({ size = 16, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 14V3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1z" />
      <path d="M17 14l-4.2 7.2a2 2 0 0 1-3.5-1.7L10 15H5.2a2 2 0 0 1-2-2.4l1.4-7A2 2 0 0 1 6.6 4H17" />
    </svg>
  );
}

export function CommentIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.6 8.6 0 0 1-3.9-.9L3 20.5l1.6-4.7a8.4 8.4 0 0 1 1-8A8.4 8.4 0 0 1 12.5 3.1 8.4 8.4 0 0 1 21 11.5z" />
    </svg>
  );
}

export function InstagramGlyph({ size = 18, color = 'currentColor', filled = false }) {
  if (filled) {
    return (
      <svg {...base(size)} fill={color}>
        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.4.4 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.4.2-1.1.4-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2z" />
      </svg>
    );
  }
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill={color} stroke="none" />
    </svg>
  );
}

export function LogoX({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill={color}>
      <path d="M18.2 2.3h3.3l-7.3 8.3 8.6 11.1h-6.7l-5.3-6.8-6 6.8H1.5l7.8-8.9L1 2.3h6.9l4.8 6.2zm-1.2 17.5h1.8L7.1 4.1H5.1z" />
    </svg>
  );
}

export function Verified({ size = 16, color = '#1d9bf0' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M22.3 12l-2.2-2.5.3-3.3-3.2-.8-1.7-2.9L12 3.8 8.5 2.5 6.8 5.4l-3.2.8.3 3.3L1.7 12l2.2 2.5-.3 3.3 3.2.8 1.7 2.9L12 20.2l3.5 1.3 1.7-2.9 3.2-.8-.3-3.3zM10.6 15.9l-3.3-3.3 1.3-1.3 2 2 4.6-4.6 1.3 1.3z"
      />
    </svg>
  );
}

export function VerifiedSimple({ size = 16, color = '#1d9bf0' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill={color} />
      <path d="M7.5 12.4l3 3 6-6.4" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TikTokNote({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5.5 5.5 0 0 0 5.5 5.5" />
    </svg>
  );
}

export function FacebookGlyph({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill={color}>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

export function RedditArrow({ size = 18, color = 'currentColor', up = true }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: up ? 'none' : 'rotate(180deg)' }}>
      <path d="M12 4.5 4.5 12h4v7h7v-7h4z" />
    </svg>
  );
}

export function YouTubePlay({ size = 22, color = '#ff0000' }) {
  return (
    <svg width={size} height={size * 0.72} viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M23.5 2.6A3 3 0 0 0 21.4.5C19.6 0 12 0 12 0S4.4 0 2.6.5A3 3 0 0 0 .5 2.6 31 31 0 0 0 0 8.5a31 31 0 0 0 .5 5.9 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.9 31 31 0 0 0-.5-5.9z" />
      <path fill="#fff" d="M9.5 12.3V4.7l6.3 3.8z" />
    </svg>
  );
}

export function Plus({ size = 14, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ReplyArrow({ size = 16, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h9a7 7 0 0 1 7 7v4" />
    </svg>
  );
}

export function DownloadIcon({ size = 16, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
}

export function Check({ size = 14, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function Eye({ size = 17, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Star({ size = 17, color = 'currentColor', filled = false }) {
  return (
    <svg {...base(size)} fill={filled ? color : 'none'} stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" />
    </svg>
  );
}

export function Quote({ size = 17, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill={color}>
      <path d="M7.6 5.5C5.3 5.5 3.5 7.4 3.5 9.9c0 2.2 1.5 3.8 3.5 3.8.3 0 .6 0 .9-.1-.5 2-2 3.6-4 4.4l.7 1.5c3.7-1.1 6.1-4.4 6.1-8.3 0-3.3-1.4-5.7-3.1-5.7zm9.3 0c-2.3 0-4.1 1.9-4.1 4.4 0 2.2 1.5 3.8 3.5 3.8.3 0 .6 0 .9-.1-.5 2-2 3.6-4 4.4l.7 1.5c3.7-1.1 6.1-4.4 6.1-8.3 0-3.3-1.4-5.7-3.1-5.7z" />
    </svg>
  );
}

export function Ghost({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill={color}>
      <path d="M12 2C8 2 5.5 5 5.5 8.6c0 1.6.2 2.7.2 4 0 1.6-1.4 2-1.4 3.2 0 .9.7 1.6 1.6 1.6.9 0 1.3-.5 2.1-.5.9 0 1.2.9 2.4.9s1.5-.9 2.4-.9c.8 0 1.2.5 2.1.5.9 0 1.6-.7 1.6-1.6 0-1.2-1.4-1.6-1.4-3.2 0-1.3.2-2.4.2-4C18.5 5 16 2 12 2z" opacity=".95" />
    </svg>
  );
}

export function PlayFilled({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill={color}>
      <path d="M8 5.6c0-.8.9-1.3 1.6-.9l9.5 6.4c.6.4.6 1.4 0 1.8l-9.5 6.4c-.7.4-1.6-.1-1.6-.9V5.6z" />
    </svg>
  );
}

export function PauseFilled({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill={color}>
      <rect x="6.5" y="5" width="3.6" height="14" rx="1.2" />
      <rect x="13.9" y="5" width="3.6" height="14" rx="1.2" />
    </svg>
  );
}

export function SkipPrev({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill={color}>
      <rect x="5" y="5.5" width="2.2" height="13" rx="1.1" />
      <path d="M19 6.8v10.4c0 .8-.9 1.3-1.6.9l-8.2-5.2c-.6-.4-.6-1.4 0-1.8l8.2-5.2c.7-.4 1.6.1 1.6.9z" />
    </svg>
  );
}

export function SkipNext({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill={color}>
      <rect x="16.8" y="5.5" width="2.2" height="13" rx="1.1" />
      <path d="M5 6.8v10.4c0 .8.9 1.3 1.6.9l8.2-5.2c.6-.4.6-1.4 0-1.8L6.6 5.9C5.9 5.5 5 6 5 6.8z" />
    </svg>
  );
}

export function Shuffle({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3h5v5" />
      <path d="M4 20 21 3" />
      <path d="M21 16v5h-5" />
      <path d="m15 15 6 6" />
      <path d="M4 4l5 5" />
    </svg>
  );
}

export function Repeat({ size = 18, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

export function HeartFilledSmall({ size = 16, color = 'currentColor' }) {
  return (
    <svg {...base(size)} fill={color}>
      <path d="M12 21s-7.5-4.6-9.3-8.5C1.2 9.3 2.6 5.5 6.1 4.7c2-.5 4 .2 5.1 1.8l.8 1.1.8-1.1c1.1-1.6 3.1-2.3 5.1-1.8 3.5.8 4.9 4.6 3.4 7.8C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}
