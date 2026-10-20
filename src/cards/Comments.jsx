import { Body } from './shared';
import { initials, hashHue } from '../lib/format';

export default function CommentList({ cfg, variant = 'x' }) {
  if (!cfg.show.comments) return null;
  const items = cfg.comments?.items || [];
  if (!items.length) return null;

  return (
    <div className={`sc-cmts sc-cmts-${variant}`}>
      {items.map((c, i) => {
        const hue = hashHue(c.name);
        return (
          <div className="sc-cmt" key={i}>
            <span
              className="sc-cmt-av"
              style={{
                background: `linear-gradient(135deg, hsl(${hue} 70% 55%), hsl(${(hue + 60) % 360} 70% 45%))`,
              }}
            >
              {initials(c.name)}
            </span>
            <div className="sc-cmt-main">
              <div className="sc-cmt-head">
                <b>{c.name}</b>
                {c.verified && <i className="sc-cmt-tick">✓</i>}
                <span className="sc-cmt-time">2h</span>
              </div>
              <div className="sc-cmt-text">
                <Body text={c.text} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
