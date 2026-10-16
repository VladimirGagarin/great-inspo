import { Body, Photo } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';

export default function NewsCard({ cfg, api }) {
  const accent = accentOf(cfg, '#dc2626');
  const bg = cardBackground(cfg, '#ffffff', '#0c0c0c');

  return (
    <div className={`card-root sc-nw ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-nw-banner" style={{ background: accent }}>
        <span className="sc-nw-flash">● LIVE</span>
        <span>BREAKING NEWS</span>
      </div>
      <div className="sc-nw-headline" style={{ fontSize: `${cfg.style.fontSize + 10}px` }}><Body text={cfg.body} /></div>
      <div className="sc-nw-photo">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={3} border="1px solid var(--line)" />
      </div>
      <div className="sc-nw-source">
        <span className="sc-nw-srcname">{cfg.author}</span>
        <span className="sc-nw-time">{cfg.timestamp}</span>
      </div>
      <div className="sc-nw-ticker">
        <span className="sc-nw-tickerlabel" style={{ background: accent }}>NEWS</span>
        <div className="sc-nw-tickerwin">
          <span className="sc-nw-tickertext">
            <Body text={cfg.body} /> · More details developing · Stay tuned for updates · {cfg.author} reporting ·
          </span>
        </div>
      </div>
    </div>
  );
}
