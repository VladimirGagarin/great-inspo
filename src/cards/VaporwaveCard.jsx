import { Body } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';

export default function VaporwaveCard({ cfg }) {
  const accent = accentOf(cfg, '#ff71ce');
  const bg = cardBackground(
    cfg,
    'linear-gradient(180deg, #2b1055 0%, #7597de 55%, #ff71ce 100%)',
    'linear-gradient(180deg, #0f0221 0%, #1a0a3e 55%, #4a0e5c 100%)',
  );

  return (
    <div className={`card-root sc-vw ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-vw-sun" />
      <div className="sc-vw-gridlines" />
      <div className="sc-vw-content">
        <div className="sc-vw-kicker">// NOW PLAYING</div>
        <div className="sc-vw-title" style={{ fontSize: `${cfg.style.fontSize + 10}px` }}><Body text={cfg.body} /></div>
        <div className="sc-vw-author">{cfg.author}</div>
        <div className="sc-vw-meta">{cfg.timestamp}</div>
      </div>
    </div>
  );
}
