import { LogoX, FacebookGlyph, InstagramGlyph, TikTokNote, Ghost, Send, YouTubePlay, Quote } from './icons';

function S({ size, children, vb = '0 0 24 24' }) {
  return (
    <svg width={size} height={size} viewBox={vb} xmlns="http://www.w3.org/2000/svg" fill="none">
      {children}
    </svg>
  );
}

function Letter({ size, color, char, weight = 800, italic }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <text
        x="12"
        y="17.5"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif, sans-serif"
        fontSize="17"
        fontWeight={weight}
        fontStyle={italic ? 'italic' : 'normal'}
        fill={color}
      >
        {char}
      </text>
    </svg>
  );
}

export function PlatformLogo({ id, size = 18, color = 'currentColor' }) {
  switch (id) {
    case 'x':
      return <LogoX size={size} color={color} />;
    case 'facebook':
      return <FacebookGlyph size={size} color={color} />;
    case 'instagram':
      return <InstagramGlyph size={size} color={color} />;
    case 'tiktok':
      return <TikTokNote size={size} color={color} />;
    case 'snapchat':
      return <Ghost size={size} color={color} />;
    case 'telegram':
      return <Send size={size} color={color} />;
    case 'youtube':
      return <YouTubePlay size={size} color={color} />;
    case 'quote':
      return <Quote size={size} color={color} />;
    case 'threads':
      return <Letter size={size} color={color} char="@" />;
    case 'medium':
      return <Letter size={size} color={color} char="M" />;
    case 'quora':
      return <Letter size={size} color={color} char="Q" />;
    case 'pinterest':
      return (
        <S size={size} color={color}>
          <path
            fill={color}
            d="M12 2a10 10 0 0 0-3.7 19.3c-.1-.8-.2-2 .1-2.9l1.2-5.1s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.5 1.9 1.8 0 3.2-1.9 3.2-4.7 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.6 2.2-4.6 4.4 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.1c-.1.2-.2.2-.4.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.2 6.4-5.4 6.4-1 0-2-.5-2.4-1.2l-.7 2.5c-.2.9-.9 2-1.4 2.7A10 10 0 1 0 12 2z"
          />
        </S>
      );
    case 'tumblr':
      return (
        <S size={size} color={color}>
          <path
            fill={color}
            d="M14.5 2h-3.4c-.3 2.4-1.5 4.1-4 4.5v3.2h2.6v6.6c0 2.8 1.9 4.7 5.4 4.7 1.6 0 3.1-.4 4-1.1v-3.4c-.7.4-1.6.6-2.4.6-1.2 0-1.9-.6-1.9-1.8V9.7h4.1V6.3h-4.1V2z"
          />
        </S>
      );
    case 'mastodon':
      return (
        <S size={size} color={color}>
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill={color} />
          <text x="12" y="17" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fontWeight="800" fill="#fff">m</text>
        </S>
      );
    case 'linkedin':
      return (
        <S size={size} color={color}>
          <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill={color} />
          <circle cx="7.2" cy="7.6" r="1.5" fill="#fff" />
          <rect x="6" y="10.4" width="2.4" height="8" fill="#fff" />
          <path fill="#fff" d="M10.6 10.4h2.3v1.1c.5-.8 1.4-1.3 2.5-1.3 2 0 3.2 1.3 3.2 3.7v4.5h-2.4v-4c0-1.2-.5-1.9-1.5-1.9s-1.7.7-1.7 2v3.9h-2.4v-8z" />
        </S>
      );
    case 'bluesky':
      return (
        <S size={size} color={color}>
          <path
            fill={color}
            d="M12 10.8C10.9 8.6 7.9 4.6 5.2 2.9 2.6 1.3 1.7 1.6 1 1.9.2 2.3 0 3.9 0 4.6c0 .8.4 6.5.7 7.5.9 3.1 4.2 4.1 7.2 3.8-4.5.7-8.5 2.3-3.3 8.1 5.7 6 7.8-1.3 8.8-4.9.9 3.6 2 10.8 8.7 4.9 5-5.5 1.2-7.4-3.3-8.1 3 .3 6.3-.7 7.2-3.8.3-1 .7-6.7.7-7.5 0-.7-.2-2.3-1-2.7-.7-.3-1.6-.6-4.2 1-2.7 1.7-5.7 5.7-6.8 7.9z"
          />
        </S>
      );
    case 'discord':
      return (
        <S size={size} color={color}>
          <path
            fill={color}
            d="M19.3 5.3A16.5 16.5 0 0 0 15.2 4l-.2.4a12.6 12.6 0 0 0-6 0L8.8 4a16.4 16.4 0 0 0-4.1 1.3C2.2 9.2 1.5 13 1.9 16.7A16.6 16.6 0 0 0 7 19.3l1-1.4c-.6-.2-1.1-.5-1.6-.8l.4-.3a11.9 11.9 0 0 0 10.3 0l.4.3c-.5.3-1 .6-1.6.8l1 1.4a16.5 16.5 0 0 0 5.1-2.6c.5-4.3-.7-8.1-2.7-11.4zM8.7 14.9c-1 0-1.8-1-1.8-2.2s.8-2.2 1.8-2.2 1.8 1 1.8 2.2-.8 2.2-1.8 2.2zm6.6 0c-1 0-1.8-1-1.8-2.2s.8-2.2 1.8-2.2 1.8 1 1.8 2.2-.8 2.2-1.8 2.2z"
          />
        </S>
      );
    case 'slack':
      return (
        <S size={size} color={color}>
          <rect x="9.8" y="2" width="3.2" height="9.4" rx="1.6" fill={color} />
          <rect x="12.6" y="9.8" width="9.4" height="3.2" rx="1.6" fill={color} />
          <rect x="11" y="12.6" width="3.2" height="9.4" rx="1.6" fill={color} />
          <rect x="2" y="11" width="9.4" height="3.2" rx="1.6" fill={color} />
        </S>
      );
    case 'spotify':
      return (
        <S size={size} color={color}>
          <circle cx="12" cy="12" r="10" fill={color} />
          <path
            d="M6.8 9.9c3.4-1 7.4-.8 10.6 1M7.5 12.8c2.7-.8 5.9-.6 8.5.8M8.2 15.6c2-.6 4.3-.4 6.1.6"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </S>
      );
    case 'podcast':
      return (
        <S size={size} color={color}>
          <circle cx="12" cy="12" r="10" fill={color} />
          <rect x="10.1" y="5.5" width="3.8" height="8" rx="1.9" fill="#fff" />
          <path d="M7.8 11.2a4.2 4.2 0 0 0 8.4 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M12 15.4v2.6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </S>
      );
    case 'glass':
      return (
        <S size={size} color={color}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke={color} strokeWidth="2" />
          <path d="M8 16 16 8" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </S>
      );
    case 'neu':
      return (
        <S size={size} color={color}>
          <circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth="2" />
          <circle cx="12" cy="12" r="3.5" fill={color} />
        </S>
      );
    case 'elegant':
      return <Quote size={size} color={color} />;
    case 'polaroid':
      return (
        <S size={size} color={color}>
          <rect x="4" y="3" width="16" height="18" rx="1.5" stroke={color} strokeWidth="2" />
          <path d="M4 16h16" stroke={color} strokeWidth="2" />
        </S>
      );
    case 'magazine':
      return <Letter size={size} color={color} char="N" />;
    case 'mesh':
      return (
        <S size={size} color={color}>
          <circle cx="8.5" cy="9" r="4" fill={color} opacity=".9" />
          <circle cx="15" cy="12" r="4.5" fill={color} opacity=".6" />
          <circle cx="10" cy="16" r="3.5" fill={color} opacity=".45" />
        </S>
      );
    case 'noir':
      return (
        <S size={size} color={color}>
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
          <path d="M12 3a9 9 0 0 1 0 18z" fill={color} />
        </S>
      );
    case 'vaporwave':
      return (
        <S size={size} color={color}>
          <path d="M12 4 21 19H3z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        </S>
      );
    case 'minimal':
      return (
        <S size={size} color={color}>
          <path d="M5 12h14" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
        </S>
      );
    case 'news':
      return (
        <S size={size} color={color}>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="2" />
          <path d="M6.5 9.5h7M6.5 13h11M6.5 16h9" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
        </S>
      );
    case 'storm':
      return (
        <S size={size} color={color}>
          <path d="M5 7h14M5 12h10M5 17h12" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        </S>
      );
    case 'chat':
      return (
        <S size={size} color={color}>
          <path d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H10l-4.5 3.5V16H7a3 3 0 0 1-3-3z" fill={color} />
        </S>
      );
    case 'ripped':
      return (
        <S size={size} color={color}>
          <path d="M4 8l3-2 3 2 3-2 3 2 3-2v11H4z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        </S>
      );
    case 'visualizer':
      return (
        <S size={size} color={color}>
          <path d="M5 14v4M9 9v10M13 5v14M17 10v8M21 13v5" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        </S>
      );
    case 'vinyl':
      return (
        <S size={size} color={color}>
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill={color} />
        </S>
      );
    case 'whatsapp':
      return (
        <S size={size} color={color}>
          <path
            fill={color}
            d="M12 2.5A9.5 9.5 0 0 0 3.7 16.8L2.4 21.6l4.9-1.3A9.5 9.5 0 1 0 12 2.5zm0 2a7.5 7.5 0 1 1-3.9 13.9l-.4-.2-2.6.7.7-2.5-.3-.4A7.5 7.5 0 0 1 12 4.5z"
          />
          <path fill={color} d="M9.2 8.1c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.5l-.4.5c-.1.2-.2.3-.1.5a5.8 5.8 0 0 0 2.7 2.7c.2.1.4 0 .5-.1l.5-.5c.2-.2.3-.2.5-.1l1.6.7c.3.1.4.3.4.5 0 .5-.4 1.2-1 1.3-1.4.3-3.9-1.2-5.2-2.9-1.1-1.4-1.6-3-1.3-4.1.2-.7.8-1 1.7-1z" />
        </S>
      );
    case 'wechat':
      return (
        <S size={size} color={color}>
          <path fill={color} d="M9.4 3C5.8 3 2.9 5.5 2.9 8.6c0 1.7.9 3.2 2.3 4.2l-.6 2.1 2.4-1.2c.7.2 1.5.3 2.3.3a5 5 0 0 1-.2-1.4c0-3 2.9-5.4 6.4-5.4h.4C15.4 4.8 12.8 3 9.4 3z" />
          <path fill={color} opacity=".8" d="M21.1 13.9c0-2.6-2.5-4.7-5.6-4.7s-5.7 2.1-5.7 4.7 2.6 4.7 5.7 4.7c.7 0 1.3-.1 1.9-.3l2 1-.5-1.8c1.4-.9 2.2-2.2 2.2-3.6z" />
        </S>
      );
    case 'twitch':
      return (
        <S size={size} color={color}>
          <path fill={color} d=\"M4 3L3 7v12h4v2h3l2-2h3l6-6V3H4zm14 10l-3 3h-3l-2 2v-2H7V5h11v8z\" />
          <path fill={color} d=\"M14 8h2v5h-2zm-3 0h2v5h-2z\" />
        </S>
      );
    case 'github':
      return (
        <S size={size} color={color}>
          <path fill={color} d=\"M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z\" />
        </S>
      );
    case 'wikipedia':
      return (
        <S size={size} color={color}>
          <path fill={color} d=\"M6.5 6l2.5 6.5L11.5 6h1l-3 7h-1l-3-7h1zm10 0l-2.5 6.5L12.5 6h-1l3 7h1l3-7h-1z\" />
          <circle cx=\"12\" cy=\"5\" r=\"1.5\" fill={color} />
        </S>
      );
    case 'resume':
      return (
        <S size={size} color={color}>
          <rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\" stroke={color} strokeWidth=\"2\" fill=\"none\" />
          <path fill={color} d=\"M8 8h8v2H8zm0 4h5v2H8z\" />
          <circle cx=\"12\" cy=\"7.5\" r=\"2\" fill={color} />
        </S>
      );
    case 'hackernews':
      return (
        <S size={size} color={color}>
          <path fill={color} d=\"M4 4h16v16H4V4zm2 2v12h12V6H6zm3.5 2l2.5 4 2.5-4h-5zm2.5 5h2v3h-2v-3z\" />
        </S>
      );
    default:
      return (
        <S size={size} color={color}>
          <circle cx="12" cy="12" r="9" fill={color} />
        </S>
      );
  }
}

