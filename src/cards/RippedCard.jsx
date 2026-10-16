import { accentOf, cardBackground, cardVars } from './helpers';
import { Photo } from './shared';

export default function RippedCard({ cfg, api }) {
  const accent = accentOf(cfg, '#a16207');
  const bg = cardBackground(cfg, '#f7f3ec', '#26221c');

  return (
    <div className={`card-root sc-rp ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-rp-photowrap">
        <Photo cfg={cfg} api={api} ratio="4 / 3" radius={0} />
        <span className="sc-rp-edge" />
      </div>
      <div className="sc-rp-paper">
        <div className="sc-rp-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>{cfg.body}</div>
        <div className="sc-rp-sub">
          <span className="sc-rp-author">{cfg.author}</span>
          <span>{cfg.timestamp}</span>
        </div>
      </div>
    </div>
  );
}
