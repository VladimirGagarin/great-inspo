import { Photo, Avatar, Body} from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Repost, Reply, Star, Bookmark, ShareArrow, Globe, Dots } from './icons';
import { formatCount, formatFull } from '../lib/format';

export default function MastodonCard({ cfg, api }) {
  const accent = accentOf(cfg, '#6364ff');
  const bg = cardBackground(cfg, '#ffffff', '#191a22');
  const instance = 'mastodon.social';

  return (
    <div className={`card-root sc-mst ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-mst-boosted">
        <Repost size={14} color={accent} />
        <span>{cfg.verified ? 'You' : 'Alex'} boosted</span>
      </div>

      <div className="sc-mst-head">
        <Avatar cfg={cfg} size={44} />
        <div className="sc-mst-headtext">
          <div className="sc-mst-nameline">
            <span className="sc-mst-name">{cfg.author}</span>
            <span className="sc-mst-handle">
              {cfg.handle.replace(/^@/, '@')}@{instance}
            </span>
          </div>
          <div className="sc-mst-sub">
            <span className="sc-mst-instance" style={{ borderColor: accent, color: accent }}>
              <Globe size={11} />
              federated
            </span>
            <span>· {cfg.timestamp}</span>
          </div>
        </div>
        <span className="sc-mst-menu"><Dots size={17} /></span>
      </div>

      <div className="sc-mst-body" style={{ fontSize: `${cfg.style.fontSize}px` }}><Body text={cfg.body} /></div>

      <div className="sc-mst-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={Math.min(cfg.style.radius, 10)} border="1px solid var(--line)" />
      </div>

      <div className="sc-mst-actions">
        <span className="sc-mst-act"><Reply size={17} /><em>{cfg.show.comments ? formatCount(cfg.stats.comments) : ''}</em></span>
        <span className="sc-mst-act sc-mst-act-boost" style={{ color: accent }}>
          <Repost size={17} /><em>{cfg.show.shares ? formatCount(cfg.stats.shares) : ''}</em>
        </span>
        <span className="sc-mst-act sc-mst-act-fav">
          <Star size={17} /><em>{cfg.show.likes ? formatCount(cfg.stats.likes) : ''}</em>
        </span>
        <span className="sc-mst-act"><Bookmark size={17} /></span>
        <span className="sc-mst-act sc-mst-act-end"><ShareArrow size={17} /></span>
      </div>

      <div className="sc-mst-foot">
        {formatFull(cfg.stats.views)} impressions
      </div>
    </div>
  );
}
