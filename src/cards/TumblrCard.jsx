import { Photo, Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Heart, Repost, Reply, Dots } from './icons';
import { formatFull, initials, hashHue } from '../lib/format';

export default function TumblrCard({ cfg, api }) {
  const accent = accentOf(cfg, '#36465d');
  const bg = cardBackground(cfg, '#ffffff', '#16181d');
  const chain = cfg.comments?.items || [];

  return (
    <div className={`card-root sc-tmb ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-tmb-main">
        <Avatar cfg={cfg} size={26} />
        <div className="sc-tmb-maintext">
          <span className="sc-tmb-name">{cfg.handle.replace(/^@/, '')}</span>
          <div className="sc-tmb-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>{cfg.body}</div>
          <div className="sc-tmb-photowrap">
            <Photo cfg={cfg} api={api} ratio="16 / 10" radius={Math.min(cfg.style.radius, 6)} />
          </div>
        </div>
      </div>

      <div className="sc-tmb-chain">
        {chain.map((c, i) => {
          const hue = hashHue(c.name);
          return (
            <div className="sc-tmb-reblog" key={`${c.name}-${i}`}>
              <span
                className="sc-tmb-dot"
                style={{ background: `hsl(${hue} 65% 55%)` }}
              >
                {initials(c.name)}
              </span>
              <div className="sc-tmb-reblogtext">
                <span className="sc-tmb-reblogname">
                  {c.name}
                  {c.verified && <i className="sc-tmb-tick">✓</i>}
                </span>
                <span className="sc-tmb-reblogmsg">{c.text}</span>
              </div>
              <Reply size={14} color="var(--muted)" />
            </div>
          );
        })}
      </div>

      <div className="sc-tmb-notes">
        <span className="sc-tmb-notescount" style={{ color: accent }}>
          {cfg.show.notes ? `${formatFull(cfg.stats.notes)} notes` : ''}
        </span>
        <span className="sc-tmb-notestools">
          <span><Repost size={16} />{formatFull(cfg.stats.shares)}</span>
          <span><Heart size={16} />{formatFull(cfg.stats.likes)}</span>
          <span><Dots size={16} /></span>
        </span>
      </div>
    </div>
  );
}
