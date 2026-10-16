import { accentOf, cardBackground, cardVars } from './helpers';
import { Photo } from './shared';
import { Dots } from './icons';

export default function NoirCard({ cfg, api }) {
  const accent = accentOf(cfg, '#ffffff');
  const bg = cardBackground(cfg, '#0a0a0a', '#000000');

  return (
    <div className={`card-root sc-nr ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-nr-head">
        <span className="sc-nr-label">Noir</span>
        <span className="sc-nr-menu"><Dots size={16} /></span>
      </div>
      <div className="sc-nr-body" style={{ fontSize: `${cfg.style.fontSize + 6}px` }}>{cfg.body}</div>
      <div className="sc-nr-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 10" radius={0} />
      </div>
      <div className="sc-nr-foot">
        <span>{cfg.author}</span>
        <span className="sc-nr-sep">—</span>
        <span>{cfg.timestamp}</span>
      </div>
    </div>
  );
}
