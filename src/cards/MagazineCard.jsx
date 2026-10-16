import { accentOf, cardBackground, cardVars } from './helpers';
import { Photo, Body} from './shared';

export default function MagazineCard({ cfg, api }) {
  const accent = accentOf(cfg, '#c0392b');
  const bg = cardBackground(cfg, '#ffffff', '#111111');

  return (
    <div className={`card-root sc-mg ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-mg-masthead">
        <span className="sc-mg-logo">THE DAILY</span>
        <span className="sc-mg-issue">{cfg.timestamp}</span>
      </div>
      <div className="sc-mg-headline" style={{ fontSize: `${cfg.style.fontSize + 14}px` }}><Body text={cfg.body} /></div>
      <div className="sc-mg-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={2} />
      </div>
      <div className="sc-mg-byline">
        <span className="sc-mg-by" style={{ color: accent }}>By {cfg.author}</span>
        <span className="sc-mg-deck">Culture · Lifestyle · Stories</span>
      </div>
    </div>
  );
}
