import { Photo, Avatar, Body} from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Dots, PlayFilled, PauseFilled, SkipPrev, SkipNext, Shuffle, Repeat, HeartFilledSmall, ShareArrow } from './icons';
import { formatCount } from '../lib/format';

export default function SpotifyCard({ cfg, api }) {
  const accent = accentOf(cfg, '#1db954');
  const bg = cardBackground(cfg, '#121212', '#0b0b0b');

  return (
    <div
      className={`card-root sc-sp ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-sp-head">
        <span className="sc-sp-badge">
          <SpotifyGlyph size={16} color={accent} />
          <span>Now playing</span>
        </span>
        <span className="sc-sp-menu"><Dots size={17} /></span>
      </div>

      <div className="sc-sp-photowrap">
        <Photo cfg={cfg} api={api} ratio="1 / 1" radius={Math.min(cfg.style.radius, 10)}>
          <span className="sc-sp-artfade" />
        </Photo>
      </div>

      <div className="sc-sp-meta">
        <div className="sc-sp-titleblock">
          <div className="sc-sp-title" style={{ fontSize: `${cfg.style.fontSize + 5}px` }}><Body text={cfg.body} /></div>
          <div className="sc-sp-artist">
            <Avatar cfg={cfg} size={20} />
            <span>{cfg.author}</span>
            {cfg.verified && <span className="sc-sp-verified">✓</span>}
          </div>
        </div>
        <span className="sc-sp-heart"><HeartFilledSmall size={20} color={accent} /></span>
      </div>

      <div className="sc-sp-progress">
        <span className="sc-sp-progress-fill" style={{ width: `${cfg.player?.progress ?? 43}%` }}>
          <i className="sc-sp-knob" />
        </span>
      </div>
      <div className="sc-sp-times">
        <span>{cfg.player?.time || '1:42'}</span>
        <span>{cfg.player?.duration || cfg.photo.duration || '3:58'}</span>
      </div>

      <div className="sc-sp-controls">
        <span className="sc-sp-ctl"><Shuffle size={16} /></span>
        <span className="sc-sp-ctl"><SkipPrev size={20} /></span>
        <span className="sc-sp-play" style={{ background: accent }}>
          <PauseFilled size={18} color="#000" />
        </span>
        <span className="sc-sp-ctl"><SkipNext size={20} /></span>
        <span className="sc-sp-ctl"><Repeat size={16} /></span>
      </div>

      <div className="sc-sp-foot">
        <span className="sc-sp-footstat">
          <PlayFilled size={12} />
          {cfg.show.views ? `${formatCount(cfg.stats.views)} plays` : ''}
        </span>
        <span className="sc-sp-footstat">
          <HeartFilledSmall size={12} />
          {cfg.show.likes ? formatCount(cfg.stats.likes) : ''}
        </span>
        <span className="sc-sp-footstat">
          <ShareArrow size={13} />
          {cfg.show.shares ? formatCount(cfg.stats.shares) : ''}
        </span>
        <span className="sc-sp-spacer" />
        <span className="sc-sp-footstat sc-sp-dots"><Dots size={15} /></span>
      </div>
    </div>
  );
}

function SpotifyGlyph({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <circle cx="12" cy="12" r="10" fill={color} />
      <path
        d="M6.8 9.9c3.4-1 7.4-.8 10.6 1M7.5 12.8c2.7-.8 5.9-.6 8.5.8M8.2 15.6c2-.6 4.3-.4 6.1.6"
        stroke="#000"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
