import { Photo, Avatar, Body} from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Globe, Dots, CommentIcon, Send, ThumbUp } from './icons';
import { formatCount, formatFull } from '../lib/format';

export default function LinkedInCard({ cfg, api }) {
  const accent = accentOf(cfg, '#0a66c2');
  const bg = cardBackground(cfg, '#ffffff', '#1b1f23');

  return (
    <div
      className={`card-root sc-li ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-li-head">
        <Avatar cfg={cfg} size={48} />
        <div className="sc-li-headtext">
          <div className="sc-li-nameline">
            <span className="sc-li-name">{cfg.author}</span>
            <span className="sc-muted">· 1st</span>
          </div>
          <div className="sc-li-headline">{cfg.handle}</div>
          <div className="sc-li-sub">
            <span>{cfg.timestamp}</span>
            <span className="sc-li-dot">·</span>
            <Globe size={12} />
          </div>
        </div>
        <span className="sc-li-menu"><Dots size={18} /></span>
      </div>

      <div className="sc-li-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>
        <Body text={cfg.body} />
      </div>

      <div className="sc-li-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={Math.min(cfg.style.radius, 6)} />
      </div>

      <div className="sc-li-reactions">
        <span className="sc-li-reactions-left">
          <span className="sc-li-react-emojis">
            <i style={{ background: '#0a66c2' }}>👍</i>
            <i style={{ background: '#6dae4f' }}>👏</i>
            <i style={{ background: '#f5bb5c' }}>💡</i>
          </span>
          <span className="sc-li-countlink">{cfg.show.likes ? formatCount(cfg.stats.likes) : ''}</span>
        </span>
        <span className="sc-li-counts-right">
          {cfg.show.comments && <span>{formatCount(cfg.stats.comments)} comments</span>}
          {cfg.show.shares && <span>{formatCount(cfg.stats.shares)} reposts</span>}
        </span>
      </div>

      <div className="sc-li-divider" />

      <div className="sc-li-actions">
        <button type="button"><ThumbUp size={18} /> Like</button>
        <button type="button"><CommentIcon size={18} /> Comment</button>
        <button type="button" style={{ color: accent }}><Send size={18} /> Repost</button>
        <button type="button"><Send size={18} /> Send</button>
      </div>

      <span className="sc-li-sr">{formatFull(cfg.stats.likes)} reactions</span>
    </div>
  );
}
