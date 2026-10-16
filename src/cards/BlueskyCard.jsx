import { Photo, Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Heart, Repost, Reply, Quote, Dots } from './icons';
import { formatCount, formatFull } from '../lib/format';

export default function BlueskyCard({ cfg, api }) {
  const accent = accentOf(cfg, '#0085ff');
  const bg = cardBackground(cfg, '#ffffff', '#0b1220');
  const domain = 'bsky.social';

  return (
    <div className={`card-root sc-bsky ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-bsky-head">
        <Avatar cfg={cfg} size={42} />
        <div className="sc-bsky-headtext">
          <div className="sc-bsky-nameline">
            <span className="sc-bsky-name">{cfg.author}</span>
            {cfg.verified && <span className="sc-bsky-flame" style={{ color: accent }}>✦</span>}
          </div>
          <span className="sc-bsky-handle">{cfg.handle.replace(/^@/, '@')}.{domain}</span>
        </div>
        <span className="sc-bsky-menu"><Dots size={18} /></span>
      </div>

      <div className="sc-bsky-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>{cfg.body}</div>

      <div className="sc-bsky-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={Math.min(cfg.style.radius, 10)} border="1px solid var(--line)" />
      </div>

      <div className="sc-bsky-actions">
        <span className="sc-bsky-act"><Reply size={17} /><em>{cfg.show.comments ? formatCount(cfg.stats.comments) : ''}</em></span>
        <span className="sc-bsky-act" style={{ color: accent }}>
          <Repost size={17} /><em>{cfg.show.shares ? formatCount(cfg.stats.shares) : ''}</em>
        </span>
        <span className="sc-bsky-act">
          <Heart size={17} /><em>{cfg.show.likes ? formatCount(cfg.stats.likes) : ''}</em>
        </span>
        <span className="sc-bsky-act"><Quote size={17} /><em>{formatCount(cfg.stats.views)}</em></span>
        <span className="sc-bsky-at" style={{ borderColor: accent, color: accent }}>
          {formatFull(cfg.stats.views)} views · AT Protocol
        </span>
      </div>
    </div>
  );
}
