import { accentOf, cardBackground, cardVars } from './helpers';
import { Photo } from './shared';
import { PlayFilled } from './icons';

const BARS = [28, 52, 38, 70, 46, 88, 60, 34, 76, 50, 92, 42, 66, 30, 80, 54, 40, 72, 48, 62, 36, 84, 56, 44];

export default function VisualizerCard({ cfg, api }) {
  const accent = accentOf(cfg, '#06b6d4');
  const bg = cardBackground(
    cfg,
    'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0c4a6e 100%)',
    'linear-gradient(135deg, #020617 0%, #1e1b4b 50%, #164e6e 100%)',
  );

  return (
    <div className={`card-root sc-vz ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-vz-head">
        <div className="sc-vz-photowrap">
          <Photo cfg={cfg} api={api} ratio="1 / 1" radius={8} height={72} />
        </div>
        <div className="sc-vz-text">
          <div className="sc-vz-title" style={{ fontSize: `${cfg.style.fontSize + 2}px` }}>{cfg.body}</div>
          <div className="sc-vz-artist">{cfg.author}</div>
        </div>
        <span className="sc-vz-play"><PlayFilled size={16} color="#fff" /></span>
      </div>
      <div className="sc-vz-bars">
        {BARS.map((h, i) => (
          <span
            key={i}
            className="sc-vz-bar"
            style={{
              height: `${h}%`,
              background: i % 3 === 0 ? accent : `${accent}${i % 2 ? 'aa' : '66'}`,
              animationDelay: `${(i % 8) * 0.12}s`,
            }}
          />
        ))}
      </div>
      <div className="sc-vz-foot">{cfg.timestamp}</div>
    </div>
  );
}
