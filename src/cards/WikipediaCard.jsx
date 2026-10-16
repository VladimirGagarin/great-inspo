import { Body } from './shared';
import { cardBackground, cardVars } from './helpers';

export default function WikipediaCard({ cfg }) {
  const accent = cfg.style?.accent || '#202122';
  const bg = cardBackground(cfg, '#f8f9fa', '#202122');

  return (
    <div className="card-root sc-wiki" style={cardVars(cfg, { accent, bg })}>
      <div className="sc-wiki-head">
        <span className="sc-wiki-logo">W</span>
        <div className="sc-wiki-titleblock">
          <div className="sc-wiki-title">{cfg.author}</div>
          <div className="sc-wiki-sub">From GreatInspo Encyclopedia</div>
        </div>
      </div>
      <div className="sc-wiki-rule" />
      <div className="sc-wiki-body">
        <Body text={cfg.body || 'Wikipedia is a free online encyclopedia, created and edited by volunteers around the world.'} />
      </div>
      <div className="sc-wiki-footer">
        <span>Last edited {cfg.timestamp}</span>
      </div>
    </div>
  );
}
