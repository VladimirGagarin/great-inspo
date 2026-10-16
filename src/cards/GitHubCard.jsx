import { Avatar, Body } from './shared';
import { cardBackground, cardVars } from './helpers';
import { formatCount } from '../lib/format';

export default function GitHubCard({ cfg }) {
  const accent = cfg.style?.accent || '#238636';
  const bg = cardBackground(cfg, '#f6f8fa', '#0d1117');

  return (
    <div className="card-root sc-gh" style={cardVars(cfg, { accent, bg })}>
      <div className="sc-gh-head">
        <span className="sc-gh-badge">PUBLIC</span>
        <span className="sc-gh-lang"><i className="sc-gh-dot" />JavaScript</span>
      </div>
      <div className="sc-gh-title">{cfg.author}/{cfg.handle?.replace('@', '') || 'repo'}</div>
      <div className="sc-gh-desc"><Body text={cfg.body || 'A minimal social card maker, built with React + Vite.'} /></div>
      <div className="sc-gh-meta">
        <span>★ {formatCount(cfg.stats?.likes || 0)}</span>
        <span>⑂ {formatCount(cfg.stats?.shares || 0)}</span>
        <span>👁 {formatCount(cfg.stats?.views || 0)}</span>
      </div>
      <div className="sc-gh-commit">
        <Avatar cfg={cfg} size={22} />
        <span className="sc-gh-committext">
          <b>{cfg.author}</b> committed {cfg.timestamp}
        </span>
      </div>
    </div>
  );
}
