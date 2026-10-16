import { accentOf, cardBackground, cardVars } from './helpers';
import { Photo } from './shared';

export default function PolaroidCard({ cfg, api }) {
  const accent = accentOf(cfg, '#b45309');
  const bg = cardBackground(cfg, '#f5f1ea', '#23201b');

  return (
    <div className={`card-root sc-po ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-po-frame">
        <div className="sc-po-photowrap">
          <Photo cfg={cfg} api={api} ratio="1 / 1" radius={0} />
        </div>
        <div className="sc-po-caption" style={{ fontSize: `${cfg.style.fontSize + 2}px` }}>{cfg.body}</div>
        <div className="sc-po-sub">
          <span>{cfg.author}</span>
          <span className="sc-po-dot">·</span>
          <span>{cfg.timestamp}</span>
        </div>
      </div>
    </div>
  );
}
