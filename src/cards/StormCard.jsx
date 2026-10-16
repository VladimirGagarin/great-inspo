import { accentOf, cardBackground, cardVars } from './helpers';
import { Avatar } from './shared';
import { Dots, Heart, Reply } from './icons';
import { formatCount } from '../lib/format';

export default function StormCard({ cfg }) {
  const accent = accentOf(cfg, '#1d9bf0');
  const bg = cardBackground(cfg, '#ffffff', '#000000');
  const replies = (cfg.comments.items || []).slice(0, 2);
  const posts = [
    { name: cfg.author, handle: cfg.handle, text: cfg.body, op: true, verified: cfg.verified },
    ...replies.map((r, i) => ({ name: r.name, handle: `@${r.name.toLowerCase().replace(/[^a-z0-9]/g, '')}${i + 1}`, text: r.text, op: false, verified: Boolean(r.verified) })),
  ];

  return (
    <div className={`card-root sc-st ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      {posts.map((p, i) => (
        <div key={`${p.name}-${i}`} className="sc-st-post">
          <div className="sc-st-rail">
            <Avatar cfg={{ ...cfg, author: p.name }} size={34} />
            {i < posts.length - 1 && <span className="sc-st-line" />}
          </div>
          <div className="sc-st-content">
            <div className="sc-st-nameline">
              <span className="sc-st-name">{p.name}</span>
              {p.verified && <span className="sc-st-check" style={{ background: accent }}>✓</span>}
              <span className="sc-st-handle">{p.handle}</span>
              {i === 0 && <span className="sc-st-menu"><Dots size={15} /></span>}
            </div>
            <div className="sc-st-text" style={{ fontSize: `${cfg.style.fontSize}px` }}>{p.text}</div>
            {i === 0 && (
              <div className="sc-st-metrics">
                <span><Reply size={14} />{cfg.show.comments ? formatCount(cfg.stats.comments) : ''}</span>
                <span><Heart size={14} color={accent} filled={false} />{cfg.show.likes ? formatCount(cfg.stats.likes) : ''}</span>
              </div>
            )}
            <div className="sc-st-counter">{i + 1}/{posts.length}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
