import { Body } from './shared';
import { cardBackground, cardVars } from './helpers';
import { formatCount } from '../lib/format';

export default function HackerNewsCard({ cfg }) {
  const accent = cfg.style?.accent || '#ff6600';
  const bg = cardBackground(cfg, '#f6f6ef', '#1a1a1a');

  return (
    <div className="card-root sc-hn" style={cardVars(cfg, { accent, bg })}>
      <div className="sc-hn-head">
        <span className="sc-hn-logo">Y</span>
        <span className="sc-hn-title">Hacker News</span>
      </div>
      <div className="sc-hn-item">
        <div className="sc-hn-rank">1.</div>
        <div className="sc-hn-main">
          <div className="sc-hn-linkline">
            <span className="sc-hn-link">{cfg.author}'s side project hits the front page</span>
            <span className="sc-hn-domain">(github.com)</span>
          </div>
          <div className="sc-hn-sub">
            {formatCount(cfg.stats?.points || cfg.stats?.likes || 0)} points by {cfg.handle?.replace('@', '') || 'pg'} {cfg.timestamp}
          </div>
          <div className="sc-hn-comments">
            <Body text={cfg.body || 'Show HN: I built a tool that turns any idea into a shareable social card.'} />
          </div>
        </div>
      </div>
    </div>
  );
}
