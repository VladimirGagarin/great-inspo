import { accentOf, cardBackground, cardVars } from './helpers';

export default function ElegantCard({ cfg }) {
  const accent = accentOf(cfg, '#8a7350');
  const bg = cardBackground(cfg, '#faf6ef', '#1c1917');

  return (
    <div className={`card-root sc-el ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-el-frame">
        <span className="sc-el-mark" style={{ color: accent }}>“</span>
        <div className="sc-el-body" style={{ fontSize: `${cfg.style.fontSize + 5}px` }}>{cfg.body}</div>
        <span className="sc-el-dash" style={{ background: accent }} />
        <div className="sc-el-author">{cfg.author}</div>
        {cfg.timestamp && <div className="sc-el-time">{cfg.timestamp}</div>}
      </div>
    </div>
  );
}
