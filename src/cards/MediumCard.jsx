import { Photo, Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Bookmark, ShareArrow, Dots } from './icons';
import { formatCount } from '../lib/format';

export default function MediumCard({ cfg, api }) {
  const accent = accentOf(cfg, '#1a8917');
  const bg = cardBackground(cfg, '#ffffff', '#0f0f0f');
  const words = String(cfg.body).trim().split(/\s+/).filter(Boolean).length;
  const readMin = Math.max(1, Math.round(words / 40) || 1);

  return (
    <div className={`card-root sc-md ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-md-topbar">
        <span className="sc-md-logo">Medium</span>
        <span className="sc-md-topic">GreatInspo Publication</span>
      </div>

      <div className="sc-md-authorrow">
        <Avatar cfg={cfg} size={26} />
        <span className="sc-md-authorname">{cfg.author}</span>
        <span className="sc-md-sep">·</span>
        <span className="sc-md-follow" style={{ color: accent }}>Follow</span>
        <span className="sc-md-dots"><Dots size={16} /></span>
      </div>

      <div className="sc-md-title" style={{ fontSize: `${cfg.style.fontSize + 8}px` }}>{cfg.body}</div>
      <div className="sc-md-meta">
        {readMin} min read · {cfg.timestamp}
      </div>

      <div className="sc-md-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={Math.min(cfg.style.radius, 4)} />
      </div>

      <div className="sc-md-foot">
        <span className="sc-md-claps">
          <span className="sc-md-clapicon" style={{ background: accent }}>👏</span>
          <b>{cfg.show.likes ? formatCount(cfg.stats.likes) : '0'}</b>
          <span className="sc-md-clapword">claps</span>
        </span>
        <span className="sc-md-footmeta">
          {cfg.show.comments ? `${formatCount(cfg.stats.comments)} comments` : ''}
        </span>
        <span className="sc-md-footicons">
          <Bookmark size={17} />
          <ShareArrow size={17} />
        </span>
      </div>
    </div>
  );
}
