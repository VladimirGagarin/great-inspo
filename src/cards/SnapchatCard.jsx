import { Photo, Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Heart, CommentIcon, Send } from './icons';
import { formatCount } from '../lib/format';

export default function SnapchatCard({ cfg, api }) {
  const accent = accentOf(cfg, '#fffc00');
  const bg = cardBackground(cfg, '#000000', '#000000');

  return (
    <div className="card-root sc-sn" style={cardVars(cfg, { accent, bg, textPad: 0 })}>
      <Photo cfg={cfg} api={api} ratio="9 / 14" radius={cfg.style.radius} className="sc-sn-photo">
        <div className="sc-sn-shade" />
        <div className="sc-sn-frame" />
        <div className="sc-sn-top">
          <Avatar cfg={cfg} size={36} ring="#fff" />
          <div className="sc-sn-who">
            <b>{cfg.author}</b>
            <span>{cfg.timestamp}</span>
          </div>
          <span className="sc-sn-streak">🔥 {formatCount(cfg.stats.shares)}</span>
        </div>

        <div className="sc-sn-filter">
          <span className="sc-sn-time">{cfg.timestamp.split('·')[0].trim()}</span>
          <span className="sc-sn-geo">◉ {cfg.handle.replace(/^@/, '')}</span>
        </div>

        <div className="sc-sn-caption">
          <div className="sc-sn-text" style={{ fontSize: `${cfg.style.fontSize + 2}px` }}>{cfg.body}</div>
          <div className="sc-sn-row">
            <span className="sc-sn-ico"><Heart size={20} color="#fff" filled /></span>
            <span className="sc-sn-count">{cfg.show.likes ? formatCount(cfg.stats.likes) : ''}</span>
            <span className="sc-sn-ico"><CommentIcon size={20} color="#fff" /></span>
            <span className="sc-sn-count">{cfg.show.comments ? formatCount(cfg.stats.comments) : ''}</span>
            <span className="sc-sn-spacer" />
            <span className="sc-sn-ico"><Send size={20} color="#fff" /></span>
          </div>
        </div>
      </Photo>
    </div>
  );
}
