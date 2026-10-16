import { Body } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';

export default function MinimalCard({ cfg }) {
  const accent = accentOf(cfg, '#111111');
  const bg = cardBackground(cfg, '#ffffff', '#0d0d0d');

  return (
    <div className={`card-root sc-min ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-min-top">
        <span className="sc-min-label">{cfg.timestamp}</span>
        <span className="sc-min-index">№ 01</span>
      </div>
      <div className="sc-min-rule" style={{ background: accent }} />
      <div className="sc-min-body" style={{ fontSize: `${cfg.style.fontSize}px` }}><Body text={cfg.body} /></div>
      <div className="sc-min-rule sc-min-rule-thin" style={{ background: accent }} />
      <div className="sc-min-foot">
        <span>{cfg.author}</span>
        <span className="sc-min-handle">{cfg.handle}</span>
      </div>
    </div>
  );
}
