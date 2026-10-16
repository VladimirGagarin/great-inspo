import { Photo } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { RedditArrow, CommentIcon, ShareArrow, Bookmark, Dots, Plus } from './icons';
import { formatCount, hashHue, initials } from '../lib/format';

export default function RedditCard({ cfg, api }) {
  const accent = accentOf(cfg, '#ff4500');
  const bg = cardBackground(cfg, '#ffffff', '#1a1a1b');
  const sub = 'r/' + (cfg.handle.replace(/^@/, '').toLowerCase() || 'social');
  const hue = hashHue(sub);

  return (
    <div
      className={`card-root sc-rd ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-rd-head">
        <span
          className="sc-rd-subavatar"
          style={{ background: `linear-gradient(135deg, hsl(${hue} 72% 52%), hsl(${(hue + 70) % 360} 72% 44%))` }}
        >
          {initials(sub)}
        </span>
        <div className="sc-rd-headtext">
          <span className="sc-rd-subname">{sub}</span>
          <span className="sc-rd-submeta">Posted by {cfg.author} · {cfg.timestamp}</span>
        </div>
        <button type="button" className="sc-rd-join" style={{ background: accent }}>
          <Plus size={12} color="#fff" /> Join
        </button>
      </div>

      <div className="sc-rd-body" style={{ fontSize: `${Math.max(cfg.style.fontSize, 15)}px` }}>
        {cfg.body}
      </div>

      <div className="sc-rd-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={Math.min(cfg.style.radius, 8)} />
      </div>

      <div className="sc-rd-footer">
        <span className="sc-rd-vote">
          <RedditArrow size={17} color={accent} up />
          <em>{cfg.show.likes ? formatCount(cfg.stats.likes) : '·'}</em>
          <RedditArrow size={17} color="currentColor" up={false} />
        </span>
        <span className="sc-rd-btn">
          <CommentIcon size={16} />
          {cfg.show.comments ? formatCount(cfg.stats.comments) : '0'}
        </span>
        <span className="sc-rd-btn">
          <ShareArrow size={16} />
          {cfg.show.shares ? formatCount(cfg.stats.shares) : '0'}
        </span>
        <span className="sc-rd-btn"><Bookmark size={16} />Save</span>
        <span className="sc-rd-btn sc-rd-btn-dots"><Dots size={16} /></span>
      </div>
    </div>
  );
}
