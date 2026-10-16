import { Photo, Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Reply, Dots, Plus } from './icons';
import { formatCount } from '../lib/format';

export default function DiscordCard({ cfg, api }) {
  const accent = accentOf(cfg, '#5865f2');
  const bg = cardBackground(cfg, '#ffffff', '#313338');
  const server = cfg.handle.replace(/^@/, '').replace(/[._-]/g, ' ') || 'great inspo';
  const reactions = [
    { emoji: '🔥', count: cfg.stats.likes, show: cfg.show.likes },
    { emoji: '👍', count: cfg.stats.shares, show: cfg.show.shares },
    { emoji: '😂', count: cfg.stats.comments, show: cfg.show.comments },
  ].filter((r) => r.show && r.count > 0);

  return (
    <div       className="card-root sc-dc is-dark" style={cardVars(cfg, { accent, bg })}>
      <div className="sc-dc-serverbar">
        <span className="sc-dc-serverpill" style={{ background: accent }}>
          {server.trim().slice(0, 2).toUpperCase()}
        </span>
        <span className="sc-dc-server">{server}</span>
        <span className="sc-dc-channels"># general</span>
        <span className="sc-dc-shead"><Dots size={17} /></span>
      </div>

      <div className="sc-dc-msg">
        <Avatar cfg={cfg} size={40} />
        <div className="sc-dc-content">
          <div className="sc-dc-nameline">
            <span className="sc-dc-name" style={{ color: accent }}>{cfg.author}</span>
            <span className="sc-dc-bot">APP</span>
            <span className="sc-dc-time">{cfg.timestamp}</span>
          </div>
          <div className="sc-dc-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>{cfg.body}</div>
          <div className="sc-dc-attach">
            <Photo cfg={cfg} api={api} ratio="16 / 9" radius={8} />
          </div>
          {reactions.length > 0 && (
            <div className="sc-dc-reactions">
              {reactions.map((r) => (
                <span key={r.emoji} className="sc-dc-react" style={{ borderColor: `${accent}66` }}>
                  <i>{r.emoji}</i>
                  {formatCount(r.count)}
                </span>
              ))}
              <span className="sc-dc-react sc-dc-react-add"><Plus size={13} color="currentColor" /></span>
            </div>
          )}
          <div className="sc-dc-thread"><Reply size={14} /> {formatCount(cfg.stats.views)} members online</div>
        </div>
      </div>
    </div>
  );
}
