import { Photo, Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Globe, Dots, ThumbUp, CommentIcon, Repost } from './icons';
import { formatCount } from '../lib/format';

export default function FacebookCard({ cfg, api }) {
  const accent = accentOf(cfg, '#0866ff');
  const bg = cardBackground(cfg, '#ffffff', '#242526');

  return (
    <div
      className={`card-root sc-fb ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-fb-head">
        <Avatar cfg={cfg} size={40} />
        <div className="sc-fb-headtext">
          <span className="sc-fb-name">{cfg.author}</span>
          <span className="sc-fb-sub">
            <span>{cfg.timestamp}</span>
            <span className="sc-fb-dot">·</span>
            <Globe size={12} />
          </span>
        </div>
        <span className="sc-fb-menu"><Dots size={18} /></span>
      </div>

      <div className="sc-fb-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>
        {cfg.body}
      </div>

      <div className="sc-fb-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={0} />
      </div>

      <div className="sc-fb-reactions">
        <span className="sc-fb-reactions-left">
          <span className="sc-fb-react-emojis">
            <i style={{ background: '#1877f2' }}>👍</i>
            <i style={{ background: '#f33e58' }}>❤️</i>
            <i style={{ background: '#f7b125' }}>😮</i>
          </span>
          <span className="sc-fb-countlink">{cfg.show.likes ? formatCount(cfg.stats.likes) : ''}</span>
        </span>
        <span className="sc-fb-counts-right">
          {cfg.show.comments && <span>{formatCount(cfg.stats.comments)} comments</span>}
          {cfg.show.shares && <span>{formatCount(cfg.stats.shares)} shares</span>}
        </span>
      </div>

      <div className="sc-fb-divider" />

      <div className="sc-fb-actions">
        <button type="button"><ThumbUp size={17} /> Like</button>
        <button type="button"><CommentIcon size={17} /> Comment</button>
        <button type="button"><Repost size={17} /> Share</button>
      </div>
    </div>
  );
}
