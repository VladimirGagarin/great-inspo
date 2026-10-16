import { EXTRA_METRICS, VIRAL_PRESETS } from '../../state';
import { Btn, NumberInput, Switch } from '../ui';
import { formatCount, formatFull } from '../../lib/format';

const METRICS = [
  { key: 'likes', label: 'Likes', sub: 'hearts / reactions' },
  { key: 'comments', label: 'Comments', sub: 'replies' },
  { key: 'shares', label: 'Shares', sub: 'reposts / retweets' },
  { key: 'views', label: 'Views', sub: 'impressions' },
];

export default function EngagementPanel({ cfg, api }) {
  const setStat = (key, v) => api.updateLive((c) => ({ ...c, stats: { ...c.stats, [key]: Math.max(0, Math.round(v)) } }));
  const metrics = [...METRICS, ...(EXTRA_METRICS[cfg.template] || [])];

  return (
    <div className="stack">
      <div className="fld">
        <span className="fld-label">Quick presets</span>
        <div className="row row-wrap">
          {VIRAL_PRESETS.map((p) => (
            <Btn
              key={p.label}
              onClick={() => api.update((c) => ({ ...c, stats: { ...c.stats, likes: p.likes, comments: p.comments, shares: p.shares, views: p.views } }))}
            >
              {p.label} · {formatCount(p.likes)}
            </Btn>
          ))}
        </div>
      </div>

      {metrics.map((m) => (
        <div className="metric-row" key={m.key}>
          <div className="metric-top">
            <span className="metric-name">
              {m.label}
              <i>{m.sub}</i>
            </span>
            <span className="metric-fmt">{formatCount(cfg.stats[m.key])}</span>
          </div>
          <div className="metric-controls">
            <NumberInput
              value={cfg.stats[m.key]}
              onFocus={api.checkpoint}
              onChange={(v) => setStat(m.key, v)}
              min={0}
            />
            <span className="muted">= {formatFull(cfg.stats[m.key])}</span>
              <span className="metric-toggle">
                <Switch
                  label="Show"
                  checked={cfg.show[m.key]}
                  onChange={(v) => api.update((c) => ({ ...c, show: { ...c.show, [m.key]: v } }))}
                />
                {m.key === 'likes' && (
                  <Switch
                    label="Liked"
                    checked={cfg.show[`${m.key}Liked`] ?? false}
                    onChange={(v) => api.update((c) => ({ ...c, show: { ...c.show, [`${m.key}Liked`]: v } }))}
                  />
                )}
              </span>
          </div>
        </div>
      ))}
    </div>
  );
}
