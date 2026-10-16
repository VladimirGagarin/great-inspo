import { Photo, Avatar, Metric, Body} from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Heart, Repost, Send, CommentIcon, Dots, Verified } from './icons';
import { formatCount, formatFull } from '../lib/format';

export default function ThreadsCard({ cfg, api }) {
  const accent = accentOf(cfg, '#0a7cff');
  const bg = cardBackground(cfg, '#ffffff', '#101010');

  return (
    <div
      className={`card-root sc-th ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-th-head">
        <Avatar cfg={cfg} size={40} />
        <div className="sc-th-headtext">
          <div className="sc-th-nameline">
            <span className="sc-th-name">{cfg.author}</span>
            {cfg.verified && <Verified size={14} color={accent} />}
            <span className="sc-muted">{cfg.handle}</span>
            <span className="sc-muted">·</span>
            <span className="sc-muted">{cfg.timestamp}</span>
          </div>
        </div>
        <span className="sc-th-menu">
          <span className="sc-th-follow">＋</span>
          <Dots size={17} />
        </span>
      </div>

      <div className="sc-th-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>
        <Body text={cfg.body} />
      </div>

      <div className="sc-th-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={Math.min(cfg.style.radius, 12)} border="1px solid var(--line)" />
      </div>

      <div className="sc-th-actions">
        <Metric show={cfg.show.likes} icon={<Heart size={20} />} value={formatCount(cfg.stats.likes)} gap={6} />
        <Metric show={cfg.show.comments} icon={<CommentIcon size={20} />} value={formatCount(cfg.stats.comments)} gap={6} />
        <Metric show={cfg.show.shares} icon={<Repost size={20} />} value={formatCount(cfg.stats.shares)} gap={6} />
        <Metric show={cfg.show.views} icon={<Send size={20} />} value={formatCount(cfg.stats.views)} gap={6} />
        <span className="sc-th-spacer" />
        <Dots size={18} />
      </div>

      <div className="sc-th-foot">
        {cfg.show.likes ? `${formatFull(cfg.stats.likes)} likes` : ''}
        {cfg.show.comments ? `  ·  ${formatFull(cfg.stats.comments)} replies` : ''}
      </div>
    </div>
  );
}
