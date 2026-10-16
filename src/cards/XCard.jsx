import { Photo, Avatar, Metric, Body} from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { Reply, Repost, Heart, Views, Bookmark, ShareArrow, Dots } from './icons';
import { formatCount, formatFull } from '../lib/format';

export default function XCard({ cfg, api }) {
  const accent = accentOf(cfg, '#1d9bf0');
  const bg = cardBackground(cfg, '#ffffff', '#000000');

  return (
    <div
      className={`card-root sc-x ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-x-head">
        <Avatar cfg={cfg} size={40} />
        <div className="sc-x-headtext">
          <div className="sc-x-nameline">
            <span className="sc-x-name">{cfg.author}</span>
            {cfg.verified && <span className="sc-x-verified"><VerifiedBadge color={accent} /></span>}
            <span className="sc-muted">{cfg.handle}</span>
            <span className="sc-muted">·</span>
            <span className="sc-muted">{cfg.timestamp}</span>
          </div>
        </div>
        <span className="sc-x-headright">
          <span className="sc-x-menu"><Dots size={17} /></span>
        </span>
      </div>

      <div className="sc-x-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>
        <Body text={cfg.body} />
      </div>

      <div className="sc-x-photowrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={cfg.style.radius} border="1px solid var(--line)" />
      </div>

      <div className="sc-x-actions">
        <div className="sc-x-metrics">
          <Metric
            show={cfg.show.comments}
            icon={<Reply size={17} />}
            value={formatCount(cfg.stats.comments)}
            title={`${formatFull(cfg.stats.comments)} replies`}
          />
          <Metric
            show={cfg.show.shares}
            icon={<Repost size={17} />}
            value={formatCount(cfg.stats.shares)}
            title={`${formatFull(cfg.stats.shares)} reposts`}
          />
            <Metric
              show={cfg.show.likes}
              icon={<Heart size={17} />}
              value={formatCount(cfg.stats.likes)}
              title={`${formatFull(cfg.stats.likes)} likes`}
              filled={cfg.show.likesLiked}
            />
          <Metric
            show={cfg.show.views}
            icon={<Views size={17} />}
            value={formatCount(cfg.stats.views)}
            title={`${formatFull(cfg.stats.views)} views`}
          />
        </div>
        <div className="sc-x-sideicons">
          <Bookmark size={17} />
          <ShareArrow size={17} />
        </div>
      </div>
    </div>
  );
}

function VerifiedBadge({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M22.3 12l-2.2-2.5.3-3.3-3.2-.8-1.7-2.9L12 3.8 8.5 2.5 6.8 5.4l-3.2.8.3 3.3L1.7 12l2.2 2.5-.3 3.3 3.2.8 1.7 2.9L12 20.2l3.5 1.3 1.7-2.9 3.2-.8-.3-3.3zM10.6 15.9l-3.3-3.3 1.3-1.3 2 2 4.6-4.6 1.3 1.3z"
      />
    </svg>
  );
}
