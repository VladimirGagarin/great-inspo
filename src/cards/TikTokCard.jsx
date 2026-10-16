import { Photo, Avatar, Body} from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Heart, CommentIcon, ShareArrow, Bookmark, ReplyArrow, Plus, Dots } from './icons';
import { formatCount, formatFull } from '../lib/format';

export default function TikTokCard({ cfg, api }) {
  const accent = accentOf(cfg, '#fe2c55');
  const bg = cardBackground(cfg, '#000000', '#000000');

  return (
    <div
      className="card-root sc-tt is-dark"
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-tt-head">
        <span className="sc-tt-avatar">
          <Avatar cfg={cfg} size={40} />
          <i className="sc-tt-follow"><Plus size={10} color="#fff" /></i>
        </span>
        <div className="sc-tt-headtext">
          <div className="sc-tt-nameline">
            <span className="sc-tt-name">{cfg.handle.replace(/^@/, '')}</span>
            {cfg.verified && <span className="sc-tt-verified">✓</span>}
          </div>
          <span className="sc-tt-time">{cfg.timestamp}</span>
        </div>
        <button type="button" className="sc-tt-followbtn">Follow</button>
        <span className="sc-tt-menu"><Dots size={16} /></span>
      </div>

      <div className="sc-tt-main">
        <div className="sc-tt-content">
          <div className="sc-tt-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>
            <Body text={cfg.body} />
          </div>
          <div className="sc-tt-photowrap">
            <Photo cfg={cfg} api={api} ratio="16 / 9" radius={Math.min(cfg.style.radius, 6)} />
          </div>
          <div className="sc-tt-reply">
            <ReplyArrow size={15} />
            <span>Reply</span>
          </div>
        </div>

        <div className="sc-tt-rail">
          <span className="sc-tt-railitem">
            <i className="sc-tt-heart" style={{ background: accent }}>
              <Heart size={17} color="#fff" filled />
            </i>
            <em>{cfg.show.likes ? formatCount(cfg.stats.likes) : ''}</em>
          </span>
          <span className="sc-tt-railitem">
            <i><CommentIcon size={21} color="#fff" /></i>
            <em>{cfg.show.comments ? formatCount(cfg.stats.comments) : ''}</em>
          </span>
          <span className="sc-tt-railitem">
            <i><Bookmark size={20} color="#fff" /></i>
            <em>{cfg.show.shares ? formatCount(cfg.stats.shares) : ''}</em>
          </span>
          <span className="sc-tt-railitem">
            <i><ShareArrow size={20} color="#fff" /></i>
            <em>{cfg.show.views ? formatCount(cfg.stats.views) : ''}</em>
          </span>
        </div>
      </div>

      <div className="sc-tt-foot">
        <span>{formatFull(cfg.stats.comments)} comments</span>
        <span>·</span>
        <span>Share to</span>
      </div>
    </div>
  );
}
