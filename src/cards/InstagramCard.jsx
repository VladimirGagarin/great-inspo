import { Photo, Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Heart, CommentIcon, Send, Bookmark, Dots, Verified } from './icons';
import { formatFull } from '../lib/format';

export default function InstagramCard({ cfg, api }) {
  const accent = accentOf(cfg, '#0095f6');
  const bg = cardBackground(cfg, '#ffffff', '#000000');

  return (
    <div
      className={`card-root sc-ig ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-ig-head">
        <span className="sc-ig-avatar">
          <Avatar cfg={cfg} size={34} ring={accent} />
        </span>
        <span className="sc-ig-username">{cfg.handle.replace(/^@/, '')}</span>
        {cfg.verified && <Verified size={13} color={accent} />}
        <span className="sc-muted">·</span>
        <span className="sc-muted">Original audio</span>
        <span className="sc-ig-menu"><Dots size={18} /></span>
      </div>

      <div className="sc-ig-photowrap">
        <Photo cfg={cfg} api={api} ratio="1 / 1" radius={0} />
      </div>

      <div className="sc-ig-body">
        <div className="sc-ig-actions">
          <Heart size={24} />
          <CommentIcon size={24} />
          <Send size={24} />
          <span className="sc-ig-spacer" />
          <Bookmark size={24} />
        </div>

        <div className="sc-ig-likes">
          {cfg.show.likes ? <strong>{formatFull(cfg.stats.likes)} likes</strong> : <strong>—</strong>}
        </div>

        <div className="sc-ig-caption" style={{ fontSize: `${cfg.style.fontSize - 1}px` }}>
          <span className="sc-ig-capname">{cfg.handle.replace(/^@/, '')}</span>
          {cfg.body}
        </div>

        {cfg.show.comments && cfg.stats.comments > 0 && (
          <div className="sc-ig-viewcomments">
            View all {formatFull(cfg.stats.comments)} comments
          </div>
        )}

        {cfg.show.shares && cfg.stats.shares > 0 && (
          <div className="sc-ig-reshares">{formatFull(cfg.stats.shares)} shares</div>
        )}

        <div className="sc-ig-time">{cfg.timestamp}</div>
      </div>
    </div>
  );
}
