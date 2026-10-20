import { Photo, Body } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { GREETINGS } from './greetings';

export default function GreetingCard({ cfg, api }) {
  const g = GREETINGS[cfg.template] || GREETINGS.success;
  const accent = accentOf(cfg, g.accent);
  const bg = cardBackground(cfg, g.bgLight, g.bgDark);

  return (
    <div
      className={`card-root sc-gr sc-gr-${cfg.template} ${g.darkText ? 'is-inv' : ''} ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <span className="sc-gr-emoji" aria-hidden="true">{g.emoji}</span>

      <div className="sc-gr-kicker">{g.kicker}</div>
      <h2 className="sc-gr-headline">{g.headline}</h2>
      <div className="sc-gr-msg" style={{ fontSize: `${cfg.style.fontSize}px` }}>
        <Body text={cfg.body} />
      </div>

      <div className="sc-gr-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={cfg.style.radius} />
      </div>

      <div className="sc-gr-foot">
        <span className="sc-gr-from">
          With love, <b>{cfg.author}</b>
        </span>
        {cfg.timestamp && <span className="sc-gr-time">{cfg.timestamp}</span>}
      </div>
    </div>
  );
}
