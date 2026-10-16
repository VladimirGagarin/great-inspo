import { accentOf, cardBackground, cardVars } from './helpers';
import { Photo, Body} from './shared';
import { Dots, Heart } from './icons';

export default function GlassCard({ cfg, api }) {
  const accent = accentOf(cfg, '#8b5cf6');
  const bg = cardBackground(cfg, 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)', 'linear-gradient(135deg, #1f2937 0%, #4c1d95 50%, #831843 100%)');

  return (
    <div className={`card-root sc-gl ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      {cfg.photo.src && (
        <div className="sc-gl-bg">
          <Photo cfg={cfg} api={api} ratio="auto" radius={0} height="100%" />
        </div>
      )}
      <div className="sc-gl-panel">
        <div className="sc-gl-head">
          <span className="sc-gl-dot" style={{ background: accent }} />
          <span className="sc-gl-name">{cfg.author}</span>
          <span className="sc-gl-menu"><Dots size={16} /></span>
        </div>
        <div className="sc-gl-body" style={{ fontSize: `${cfg.style.fontSize}px` }}><Body text={cfg.body} /></div>
        <div className="sc-gl-foot">
          <span className="sc-gl-time">{cfg.timestamp}</span>
          <span className="sc-gl-heart"><Heart size={15} filled color={accent} /></span>
        </div>
      </div>
    </div>
  );
}
