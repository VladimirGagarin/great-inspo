import { Photo, Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Eye, Bookmark, ShareArrow, Reply, Dots, Verified } from './icons';
import { formatCount } from '../lib/format';

export default function TelegramCard({ cfg, api }) {
  const accent = accentOf(cfg, '#2aabee');
  const bg = cardBackground(cfg, '#ffffff', '#17212b');
  const reactions = [
    { emoji: '❤️', count: cfg.stats.likes, show: cfg.show.likes },
    { emoji: '👍', count: cfg.stats.shares, show: cfg.show.shares },
    { emoji: '🔥', count: cfg.stats.comments, show: cfg.show.comments },
  ].filter((r) => r.show && r.count > 0);

  return (
    <div className={`card-root sc-tg ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-tg-channel">
        <Avatar cfg={cfg} size={40} />
        <div className="sc-tg-chtext">
          <span className="sc-tg-chname">
            {cfg.author}
            {cfg.verified && <Verified size={14} color={accent} />}
          </span>
          <span className="sc-tg-chsub">{formatCount(cfg.stats.likes)} subscribers</span>
        </div>
        <span className="sc-tg-menu"><Dots size={18} /></span>
      </div>

      <div className="sc-tg-forwarded">
        <span>Forwarded from</span>
        <b style={{ color: accent }}>{cfg.author}</b>
      </div>

      <div className="sc-tg-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>{cfg.body}</div>

      <div className="sc-tg-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={Math.min(cfg.style.radius, 12)} />
      </div>

      {reactions.length > 0 && (
        <div className="sc-tg-reactions">
          {reactions.map((r) => (
            <span key={r.emoji} className="sc-tg-chip">
              <i>{r.emoji}</i>
              {formatCount(r.count)}
            </span>
          ))}
          <span className="sc-tg-chip sc-tg-chip-add">＋</span>
        </div>
      )}

      <div className="sc-tg-foot">
        <span className="sc-tg-views" style={{ color: accent }}>
          <Eye size={16} />
          {cfg.show.views ? formatCount(cfg.stats.views) : '—'}
        </span>
        <span className="sc-tg-tools">
          <Reply size={17} />
          <ShareArrow size={17} />
          <Bookmark size={17} />
        </span>
      </div>
    </div>
  );
}
