import { Avatar, Body } from './shared';
import { cardBackground, cardVars } from './helpers';

export default function ResumeCard({ cfg }) {
  const accent = cfg.style?.accent || '#1a365d';
  const bg = cardBackground(cfg, '#ffffff', '#12161f');

  return (
    <div className="card-root sc-res" style={cardVars(cfg, { accent, bg })}>
      <div className="sc-res-head">
        <Avatar cfg={cfg} size={64} />
        <div className="sc-res-nameline">
          <div className="sc-res-name">{cfg.author}</div>
          <div className="sc-res-role">{cfg.handle || 'Product Designer'}</div>
        </div>
      </div>
      <div className="sc-res-body">
        <Body text={cfg.body || 'Crafting clean interfaces and design systems with 6+ years of experience shipping products people love.'} />
      </div>
      <div className="sc-res-skills">
        {['Figma', 'React', 'Design Systems', 'Motion'].map((s) => (
          <span key={s} className="sc-res-skill">{s}</span>
        ))}
      </div>
      <div className="sc-res-foot">
        <span>{cfg.stats?.likes ? `${cfg.stats.likes} endorsements` : 'Open to work'}</span>
      </div>
    </div>
  );
}
