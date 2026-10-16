import { accentOf, cardBackground, cardVars } from './helpers';
import { Photo } from './shared';
import { PlayFilled, Heart, ShareArrow } from './icons';
import { formatCount } from '../lib/format';

export default function VinylCard({ cfg, api }) {
  const accent = accentOf(cfg, '#e11d48');
  const bg = cardBackground(cfg, '#f4f0ea', '#17141a');

  return (
    <div className={`card-root sc-vn ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-vn-kicker">Full album</div>
      <div className="sc-vn-sleeve">
        <div className="sc-vn-photowrap">
          <Photo cfg={cfg} api={api} ratio="1 / 1" radius={6} />
        </div>
        <div className="sc-vn-disc">
          <span className="sc-vn-label" style={{ background: accent }} />
        </div>
      </div>
      <div className="sc-vn-title" style={{ fontSize: `${cfg.style.fontSize + 4}px` }}>{cfg.body}</div>
      <div className="sc-vn-artist">{cfg.author}</div>
      <div className="sc-vn-bar">
        <span className="sc-vn-bar-fill" style={{ width: `${cfg.player?.progress ?? 43}%` }} />
      </div>
      <div className="sc-vn-times">
        <span>{cfg.player?.time || '1:42'}</span>
        <span>{cfg.player?.duration || cfg.photo.duration || '3:58'}</span>
      </div>
      <div className="sc-vn-controls">
        <span className="sc-vn-heart"><Heart size={16} color={accent} filled /></span>
        <span className="sc-vn-play" style={{ background: accent }}><PlayFilled size={18} color="#fff" /></span>
        <span className="sc-vn-share"><ShareArrow size={16} /></span>
        <span className="sc-vn-plays">{cfg.show.views ? `${formatCount(cfg.stats.views)} plays` : ''}</span>
      </div>
    </div>
  );
}
