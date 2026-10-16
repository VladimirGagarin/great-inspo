import { Photo, Avatar, Body} from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Reply, Dots, Bookmark, ShareArrow } from './icons';
import { formatCount, initials, hashHue } from '../lib/format';

export default function SlackCard({ cfg, api }) {
  const accent = accentOf(cfg, '#611f69');
  const bg = cardBackground(cfg, '#ffffff', '#1a1d21');
  const workspace = 'GreatInspo HQ';
  const replyAvatar = cfg.comments?.items?.[0]?.name || 'Priya';

  return (
    <div className={`card-root sc-sl ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-sl-workspace">
        <span className="sc-sl-wsmark" style={{ background: accent }}>GI</span>
        <span className="sc-sl-wsname">{workspace}</span>
        <span className="sc-sl-channel"># social-cards</span>
        <span className="sc-sl-dots"><Dots size={17} /></span>
      </div>

      <div className="sc-sl-msg">
        <Avatar cfg={cfg} size={38} />
        <div className="sc-sl-content">
          <div className="sc-sl-nameline">
            <span className="sc-sl-name">{cfg.author}</span>
            <span className="sc-sl-time">{cfg.timestamp}</span>
          </div>
          <div className="sc-sl-body" style={{ fontSize: `${cfg.style.fontSize}px` }}><Body text={cfg.body} /></div>
          <div className="sc-sl-attach">
            <Photo cfg={cfg} api={api} ratio="16 / 9" radius={8} border="1px solid var(--line)" />
          </div>

          {cfg.show.comments && cfg.stats.comments > 0 && (
            <div className="sc-sl-thread">
              <span
                className="sc-sl-tavatar"
                style={{ background: `hsl(${hashHue(replyAvatar)} 60% 52%)` }}
              >
                {initials(replyAvatar)}
              </span>
              <span className="sc-sl-tcount" style={{ color: accent }}>
                {formatCount(cfg.stats.comments)} replies
              </span>
              <span className="sc-sl-tlast">Last reply · just now</span>
            </div>
          )}

          <div className="sc-sl-reactions">
            <span className="sc-sl-react" style={{ background: `${accent}22`, borderColor: accent }}>
              🎉 <b>{formatCount(cfg.stats.likes)}</b>
            </span>
            <span className="sc-sl-react">🔥 <b>{formatCount(cfg.stats.shares)}</b></span>
            <span className="sc-sl-react sc-sl-react-add">＋</span>
            <span className="sc-sl-replytools"><Reply size={16} /><ShareArrow size={16} /><Bookmark size={16} /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
