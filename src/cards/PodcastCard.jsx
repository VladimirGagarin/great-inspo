import { Photo, Body} from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Dots, PlayFilled, SkipPrev, SkipNext, ShareArrow, Bookmark } from './icons';
import { formatCount } from '../lib/format';

export default function PodcastCard({ cfg, api }) {
  const accent = accentOf(cfg, '#9b59b6');
  const bg = cardBackground(cfg, '#ffffff', '#18141f');

  return (
    <div
      className={`card-root sc-pc ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-pc-head">
        <span className="sc-pc-badge">
          <PodcastGlyph size={16} color={accent} />
          <span>New episode</span>
        </span>
        <span className="sc-pc-menu"><Dots size={17} /></span>
      </div>

      <div className="sc-pc-main">
        <div className="sc-pc-photowrap">
          <Photo cfg={cfg} api={api} ratio="1 / 1" radius={Math.min(cfg.style.radius, 10)} />
        </div>
        <div className="sc-pc-text">
          <div className="sc-pc-show">{cfg.author}</div>
          <div className="sc-pc-title" style={{ fontSize: `${cfg.style.fontSize + 3}px` }}><Body text={cfg.body} /></div>
          <div className="sc-pc-ep">{cfg.timestamp}</div>
          <div className="sc-pc-progress">
            <span className="sc-pc-progress-fill" style={{ width: `${cfg.player?.progress ?? 43}%` }}>
              <i className="sc-pc-knob" />
            </span>
          </div>
          <div className="sc-pc-times">
            <span>{cfg.player?.time || '8:20'}</span>
            <span>{cfg.player?.duration || cfg.photo.duration || '24:10'}</span>
          </div>
        </div>
      </div>

      <div className="sc-pc-controls">
        <span className="sc-pc-ctl"><ShareArrow size={16} /></span>
        <span className="sc-pc-ctl"><Bookmark size={16} /></span>
        <span className="sc-pc-ctl sc-pc-ctl-prev"><SkipPrev size={18} /></span>
        <span className="sc-pc-play" style={{ background: accent }}>
          <PlayFilled size={16} color="#fff" />
        </span>
        <span className="sc-pc-ctl sc-pc-ctl-next"><SkipNext size={18} /></span>
        <span className="sc-pc-spacer" />
        <span className="sc-pc-speed">1.0×</span>
      </div>

      <div className="sc-pc-foot">
        <span className="sc-pc-footstat">
          <PodcastGlyph size={12} color="currentColor" />
          {cfg.show.views ? `${formatCount(cfg.stats.views)} plays` : ''}
        </span>
        <span className="sc-pc-footstat">
          <ShareArrow size={13} />
          {cfg.show.shares ? formatCount(cfg.stats.shares) : ''}
        </span>
        <span className="sc-pc-follow" style={{ color: accent }}>Follow</span>
      </div>
    </div>
  );
}

function PodcastGlyph({ size = 16, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <circle cx="12" cy="12" r="10" fill={color} />
      <rect x="10.1" y="5.5" width="3.8" height="8" rx="1.9" fill="#fff" />
      <path d="M7.8 11.2a4.2 4.2 0 0 0 8.4 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 15.4v2.6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
