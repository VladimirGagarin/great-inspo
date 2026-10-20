import { Body } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';

export default function DidYouKnowCard({ cfg }) {
  const accent = accentOf(cfg, '#168a8a');
  const bg = cardBackground(cfg, '#f4fbf8', '#102923');
  return (
    <div className={`card-root sc-dyk ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-dyk-label"><span>✦</span> DID YOU KNOW?</div>
      <div className="sc-dyk-copy" style={{ fontSize: `${cfg.style.fontSize + 8}px` }}><Body text={cfg.body} /></div>
      {cfg.photo.src && <img className="sc-dyk-photo" src={cfg.photo.src} alt="" />}
      <div className="sc-dyk-footer">
        <span>{cfg.author}</span>
        {cfg.watermarkText?.trim() && <b>{cfg.watermarkText.trim()}</b>}
      </div>
    </div>
  );
}
