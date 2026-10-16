import { Photo, Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { CommentIcon, Dots } from './icons';
import { formatCount, formatFull } from '../lib/format';

export default function WeChatCard({ cfg, api }) {
  const accent = accentOf(cfg, '#576b95');
  const bg = cardBackground(cfg, '#ededed', '#191919');
  const likers = (cfg.comments?.likedBy || '').split(',').map((s) => s.trim()).filter(Boolean);
  const comments = cfg.comments?.items || [];

  return (
    <div className={`card-root sc-wc ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-wc-cover">
        <Photo cfg={cfg} api={api} height={132} radius={Math.min(cfg.style.radius, 10)} />
        <span className="sc-wc-coverlabel">Moments</span>
      </div>

      <div className="sc-wc-post">
        <Avatar cfg={cfg} size={44} />
        <div className="sc-wc-content">
          <span className="sc-wc-name">{cfg.author}</span>
          <div className="sc-wc-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>{cfg.body}</div>
          <div className="sc-wc-photowrap">
            <Photo cfg={cfg} api={api} ratio="4 / 3" radius={6} className="sc-wc-image" />
          </div>
          <div className="sc-wc-meta">
            <span>{cfg.timestamp}</span>
            <span className="sc-wc-more"><Dots size={16} /></span>
          </div>

          <div className="sc-wc-interactions">
            {likers.length > 0 && (
              <div className="sc-wc-likes">
                <b style={{ color: accent }}>♥</b>
                <span>{likers.join(', ')}</span>
                {cfg.show.likes && <em>+{formatCount(cfg.stats.likes)}</em>}
              </div>
            )}
            {cfg.show.comments && (
              <div className="sc-wc-comments">
                {comments.map((c, i) => (
                  <p key={i}><b>{c.name}:</b> {c.text}</p>
                ))}
                <p className="sc-wc-viewall">
                  <CommentIcon size={13} />
                  View all {formatFull(cfg.stats.comments)} comments
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
