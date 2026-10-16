import { Photo, Avatar } from './shared';
import { cardBackground, cardVars } from './helpers';
import { Verified } from './icons';
import { formatCount } from '../lib/format';

export default function TwitchCard({ cfg }) {
  const bg = cardBackground(cfg, '#0f0e13', '#050507');
  const accent = cfg.style?.accent || '#a970ff';
  return (
    <div className="card-root sc-tw" style={cardVars(cfg, { accent, bg })}>
      <div className="sc-tw-head">
        <div className="sc-tw-left">
          <Avatar cfg={cfg} size={36} />
          <div className="sc-tw-name-wrap">
            <div className="sc-tw-name">
              {cfg.author}
              {cfg.verified && <Verified size={13} color={accent} />}
            </div>
            <div className="sc-tw-handle">{cfg.handle}</div>
          </div>
        </div>
        <span className="sc-tw-live" style={{ background: accent }}>
          LIVE
        </span>
      </div>
      <Photo cfg={cfg} api={null} ratio="16 / 9" radius={12} />
      <div className="sc-tw-body">
        <div className="sc-tw-title">{cfg.body || 'Live now'}</div>
        <div className="sc-tw-meta">
          {cfg.stats?.views ? `${formatCount(cfg.stats.views)} watching` : ''}
        </div>
      </div>
    </div>
  );
}
