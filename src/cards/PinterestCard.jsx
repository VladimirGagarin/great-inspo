import { Photo, Avatar, Body} from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Dots, ShareArrow, Bookmark } from './icons';
import { formatCount } from '../lib/format';

export default function PinterestCard({ cfg, api }) {
  const accent = accentOf(cfg, '#e60023');
  const bg = cardBackground(cfg, '#ffffff', '#1f1f1f');
  const board = cfg.handle.replace(/^@/, '') + ' · Inspiration';

  return (
    <div className={`card-root sc-pin ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-pin-photowrap">
        <Photo cfg={cfg} api={api} ratio="3 / 4" radius={Math.min(cfg.style.radius, 16)} />
        <button type="button" className="sc-pin-save" style={{ background: accent }}>
          Save
        </button>
        <button type="button" className="sc-pin-jump"><ShareArrow size={15} /></button>
      </div>

      <div className="sc-pin-title" style={{ fontSize: `${cfg.style.fontSize + 3}px` }}><Body text={cfg.body} /></div>

      <div className="sc-pin-author">
        <Avatar cfg={cfg} size={24} />
        <span><b>{cfg.author}</b><i>{board}</i></span>
        <span className="sc-pin-follow" style={{ color: accent }}>Follow</span>
      </div>

      <div className="sc-pin-foot">
        <span className="sc-pin-board" style={{ borderColor: accent, color: accent }}>{board}</span>
        <span className="sc-pin-stats">
          <Bookmark size={15} />
          {cfg.show.shares ? formatCount(cfg.stats.shares) : ''} saves
          <Dots size={15} />
        </span>
      </div>
    </div>
  );
}
