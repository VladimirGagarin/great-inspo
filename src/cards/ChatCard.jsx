import { Body } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';

export default function ChatCard({ cfg }) {
  const accent = accentOf(cfg, '#25d366');
  const bg = cardBackground(cfg, '#e5ddd5', '#1f2c34');
  const items = cfg.comments.items || [];
  const bubbles = (cfg.show.comments ? items.slice(0, 3) : []).map((it, i) => ({ name: it.name, text: it.text, out: i % 2 === 1, verified: Boolean(it.verified) }));
  bubbles.push({ name: cfg.author, text: cfg.body, out: true });

  return (
    <div className={`card-root sc-ch ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-ch-head">
        <span className="sc-ch-avatar">{(cfg.author || '?')[0]}</span>
        <div className="sc-ch-nametext">
          <span className="sc-ch-name">{cfg.author}</span>
          <span className="sc-ch-status">online</span>
        </div>
        <span className="sc-ch-time">{String(cfg.timestamp).split('·')[0].trim()}</span>
      </div>
      <div className="sc-ch-thread">
        {bubbles.map((b, i) => (
          <div key={`${b.name}-${i}`} className={`sc-ch-row ${b.out ? 'is-out' : ''}`}>
            {!b.out && (
              <span className="sc-ch-bubble-name">
                {b.name}
                {b.verified && <i className="sc-ch-tick">✓</i>}
              </span>
            )}
            <div className="sc-ch-bubble" style={b.out ? { background: accent } : undefined}>
              <Body text={b.text} />
              <span className="sc-ch-stamp">{['9:41', '9:42', '9:44', '9:45'][i] || '9:45'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
