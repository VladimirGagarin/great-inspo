import { accentOf, cardBackground, cardVars } from './helpers';
import { Avatar } from './shared';
import { Heart, CommentIcon } from './icons';
import { formatCount } from '../lib/format';

export default function NeuCard({ cfg }) {
  const accent = accentOf(cfg, '#64748b');
  const bg = cardBackground(cfg, '#e8edf2', '#2b3038');

  return (
    <div className={`card-root sc-ne ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-ne-card">
        <div className="sc-ne-head">
          <Avatar cfg={cfg} size={44} />
          <div className="sc-ne-nametext">
            <span className="sc-ne-name">{cfg.author}</span>
            <span className="sc-ne-handle">{cfg.handle}</span>
          </div>
        </div>
        <div className="sc-ne-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>{cfg.body}</div>
        <div className="sc-ne-actions">
          <span className="sc-ne-btn"><Heart size={17} color={accent} />{cfg.show.likes ? formatCount(cfg.stats.likes) : ''}</span>
          <span className="sc-ne-btn"><CommentIcon size={16} color={accent} />{cfg.show.comments ? formatCount(cfg.stats.comments) : ''}</span>
        </div>
      </div>
    </div>
  );
}
