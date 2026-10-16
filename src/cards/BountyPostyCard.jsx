import { Body, Photo } from './shared';
import { cardBackground, cardVars } from './helpers';

export default function BountyPostyCard({ cfg, api }) {
  const accent = cfg.style?.accent || '#b89a75';
  
  const bg = cardBackground(cfg, '#f3e7d7', '#151412');

  return (
    <div className="card-root sc-bp is-paper" style={cardVars(cfg, { bg, accent })}>
      <div className="sc-bp-poster">
        <div className="sc-bp-heading"><span>✦</span> BOUNTY <span>✦</span></div>
        <div className="sc-bp-rule" />
        <div className="sc-bp-name">{cfg.author || 'Unknown'}</div>
        <div className="sc-bp-photo-frame">
          <Photo cfg={cfg} api={api} ratio="4 / 3" height={320} radius={2} border="3px solid #8c6e4a" />
        </div>
        <div className="sc-bp-reward-label">BOUNTY PRIZE</div>
        <div className="sc-bp-amount">${(cfg.stats?.likes || 0).toLocaleString('en-US')}</div>
        <div className="sc-bp-dead">DEAD OR ALIVE</div>
        {cfg.body && <div className="sc-bp-body"><Body text={cfg.body} /></div>}
      </div>
      <div className="sc-bp-footer">
        <span className="sc-bp-author">WANTED FOR</span>
        <span className="sc-bp-handle">{cfg.handle}</span>
      </div>
    </div>
  );
}
