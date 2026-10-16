import { Photo, Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { ThumbUp, ThumbDown, ShareArrow, DownloadIcon, Dots, CommentIcon, Heart } from './icons';
import { formatCount, formatFull } from '../lib/format';

export default function YouTubeCard({ cfg, api }) {
  const accent = accentOf(cfg, '#ff0000');
  const bg = cardBackground(cfg, '#ffffff', '#0f0f0f');

  return (
    <div
      className={`card-root sc-yt ${cfg.dark ? 'is-dark' : ''}`}
      style={cardVars(cfg, { accent, bg })}
    >
      <div className="sc-yt-body" style={{ fontSize: `${cfg.style.fontSize}px` }}>
        {cfg.body}
      </div>

      <div className="sc-yt-thumbwrap">
        <Photo cfg={cfg} api={api} ratio="16 / 9" radius={Math.min(cfg.style.radius, 10)}>
          <span className="sc-yt-duration">{cfg.photo.duration || '10:24'}</span>
          <span className="sc-yt-progress"><i style={{ width: '38%' }} /></span>
        </Photo>
      </div>

      <div className="sc-yt-meta">
        <Avatar cfg={cfg} size={36} />
        <div className="sc-yt-chtext">
          <span className="sc-yt-chname">
            {cfg.author}
            {cfg.verified && <span className="sc-yt-chcheck" title="Verified">✓</span>}
          </span>
          <span className="sc-yt-chsubs">{formatCount(cfg.stats.likes)} subscribers</span>
        </div>
        <button type="button" className="sc-yt-sub" style={{ background: accent }}>
          Subscribe
        </button>
      </div>

      <div className="sc-yt-statline">
        {cfg.show.views ? <span>{formatCount(cfg.stats.views)} views</span> : null}
        <span>{cfg.timestamp}</span>
        {cfg.show.likes ? <span>👍 {formatCount(cfg.stats.likes)}</span> : null}
      </div>

      <div className="sc-yt-actions">
        <span className="sc-yt-pill sc-yt-pill-like">
          <ThumbUp size={17} />
          <em>{cfg.show.likes ? formatCount(cfg.stats.likes) : ''}</em>
          <i className="sc-yt-sep" />
          <ThumbDown size={17} />
        </span>
        <span className="sc-yt-pill"><ShareArrow size={17} /><em>Share</em></span>
        <span className="sc-yt-pill"><DownloadIcon size={17} /><em>Download</em></span>
        <span className="sc-yt-pill sc-yt-pill-short"><Heart size={17} filled color={accent} /><em>{cfg.show.shares ? formatCount(cfg.stats.shares) : ''}</em></span>
        <span className="sc-yt-pill sc-yt-pill-dots"><Dots size={17} /></span>
      </div>

      <div className="sc-yt-comments">
        <span className="sc-yt-commentcount">
          <CommentIcon size={16} />
          {cfg.show.comments ? formatFull(cfg.stats.comments) : '0'} Comments
        </span>
        <span className="sc-yt-sort">Top</span>
      </div>
    </div>
  );
}
