import { Avatar } from './shared';
import { accentOf, cardBackground, cardVars } from './helpers';
import { RedditArrow, ShareArrow, Dots } from './icons';
import { formatCount, formatFull } from '../lib/format';

export default function QuoraCard({ cfg }) {
  const accent = accentOf(cfg, '#b92b27');
  const bg = cardBackground(cfg, '#ffffff', '#262627');
  const lines = String(cfg.body).split('\n');
  const question = lines[0];
  const answer = lines.slice(1).join('\n').trim();

  return (
    <div className={`card-root sc-qr ${cfg.dark ? 'is-dark' : ''}`} style={cardVars(cfg, { accent, bg })}>
      <div className="sc-qr-qbox">
        <span className="sc-qr-qtag" style={{ background: accent }}>Q</span>
        <div className="sc-qr-q" style={{ fontSize: `${cfg.style.fontSize + 3}px` }}>{question}</div>
      </div>

      <div className="sc-qr-topic" style={{ color: accent }}>
        · Answer · {formatFull(cfg.stats.comments)} answers · Updated {cfg.timestamp}
      </div>

      <div className="sc-qr-a">
        {answer ? (
          <p style={{ fontSize: `${cfg.style.fontSize}px` }}>{answer}</p>
        ) : (
          <p className="sc-qr-empty">No answer yet — be the first to answer.</p>
        )}
      </div>

      <div className="sc-qr-author">
        <Avatar cfg={cfg} size={30} />
        <div className="sc-qr-authortext">
          <span className="sc-qr-name">{cfg.author}</span>
          <span className="sc-qr-cred">{cfg.handle}</span>
        </div>
        <button type="button" className="sc-qr-answer" style={{ color: accent, borderColor: accent }}>
          Answer
        </button>
      </div>

      <div className="sc-qr-foot">
        <span className="sc-qr-up">
          <span className="sc-qr-upbox" style={{ background: accent }}>
            <RedditArrow size={14} color="#fff" up />
          </span>
          {cfg.show.likes ? formatCount(cfg.stats.likes) : 'Upvote'}
        </span>
        {cfg.show.shares && <span className="sc-qr-chip">{formatCount(cfg.stats.shares)} shares</span>}
        <span className="sc-qr-footicons">
          <ShareArrow size={16} />
          <Dots size={16} />
        </span>
      </div>
    </div>
  );
}
