import { accentOf, cardBackground, cardVars } from './helpers';
import { Avatar, Body} from './shared';

export default function MeshCard({ cfg }) {
  const accent = accentOf(cfg, '#ec4899');
  const bg = cardBackground(
    cfg,
    'radial-gradient(at 20% 20%, #f9a8d4 0%, transparent 50%), radial-gradient(at 80% 30%, #a78bfa 0%, transparent 50%), radial-gradient(at 50% 80%, #67e8f9 0%, transparent 50%), radial-gradient(at 10% 80%, #fde68a 0%, transparent 45%), #f4f0ff',
    'radial-gradient(at 20% 20%, #831843 0%, transparent 50%), radial-gradient(at 80% 30%, #4c1d95 0%, transparent 50%), radial-gradient(at 50% 80%, #164e63 0%, transparent 50%), #0f0a1a',
  );

  return (
    <div className={`card-root sc-mesh ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-mesh-panel">
        <div className="sc-mesh-head">
          <Avatar cfg={cfg} size={34} />
          <span className="sc-mesh-name">{cfg.author}</span>
        </div>
        <div className="sc-mesh-body" style={{ fontSize: `${cfg.style.fontSize + 3}px` }}><Body text={cfg.body} /></div>
        <div className="sc-mesh-foot">{cfg.timestamp}</div>
      </div>
    </div>
  );
}
