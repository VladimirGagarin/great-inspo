import { Body } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';

export default function BountyPostyCard({ cfg }) {
  const accent = cfg.style?.accent || '#b89a75';
  
  const bg = cardBackground(cfg, '#f3e7d7', '#151412');

  return (
    <div className="card-root sc-bp is-paper" style={cardVars(bg, accent)}>
      <div className="sc-bp-header">
        <div className="sc-bp-flag">
          <span className="sc-bp-badge">BOUNTY</span>
          <span className="sc-bp-amount">${cfg.stats?.likes || 0}</span>
        </div>
        <div className="sc-bp-meta">
          <span>Views: {(cfg.stats?.views || 0).toLocaleString('en-US')}</span>
          <span>Comments: {(cfg.stats?.comments || 0).toLocaleString('en-US')}</span>
        </div>
      </div>
      <div className="sc-bp-body">
        <Body text={cfg.body || 'Bounty Posty'} />
      </div>
      <div className="sc-bp-footer">
        <span className="sc-bp-author">@{cfg.author}</span>
        <span className="sc-bp-handle">{cfg.handle}</span>
      </div>
    </div>
  );
}
