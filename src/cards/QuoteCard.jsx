import { accentOf, cardBackground, cardVars } from './helpers';

export default function QuoteCard({ cfg }) {
  const accent = accentOf(cfg, '#8b7355');
  const bg = cardBackground(
    cfg,
    'linear-gradient(160deg, #fbf7f0 0%, #f1e9dd 55%, #e7eef7 100%)',
    'linear-gradient(160deg, #1b1b1f 0%, #26232b 60%, #1d2430 100%)',
  );

  return (
    <div
      className={`card-root sc-quote ${cfg.dark ? 'is-dark' : ''}`}
      style={{
        ...cardVars(cfg, { accent, bg }),
        textAlign: 'center',
      }}
    >
      <div className="sc-quote-frame">
        <span className="sc-quote-mark" aria-hidden="true">“</span>
        <p
          className="sc-quote-text"
          style={{ fontSize: `${Math.round(cfg.style.fontSize * 2.4)}px` }}
        >
          {cfg.body}
        </p>
        <div className="sc-quote-rule" style={{ background: accent }} />
        <div className="sc-quote-author">
          {cfg.author}
          {cfg.verified && <span className="sc-quote-verified" style={{ color: accent }}> ✦</span>}
        </div>
        {cfg.show.likes && (
          <div className="sc-quote-meta" style={{ color: accent }}>
            ♥ {cfg.stats.likes.toLocaleString('en-US')}
            {cfg.show.comments ? `  ·  ${cfg.stats.comments.toLocaleString('en-US')} comments` : ''}
          </div>
        )}
      </div>
    </div>
  );
}
