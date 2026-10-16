import { useState } from 'react';
import { TEMPLATES } from '../../state';

const MARKS = {
  x: '𝕏',
  facebook: 'f',
  instagram: '◉',
  tiktok: '♪',
  quote: '”',
  threads: '@',
  linkedin: 'in',
  whatsapp: '✆',
  youtube: '▶',
  reddit: 'r/',
  telegram: '➤',
  snapchat: '👻',
  wechat: '💬',
  pinterest: 'P',
  tumblr: 't',
  mastodon: 'm',
  bluesky: '☁',
  discord: '◎',
  slack: '#',
  quora: 'Q',
  medium: 'M',
  spotify: '♫',
  podcast: '🎙',
  glass: '◈',
  neu: '◍',
  elegant: '❝',
  polaroid: '▣',
  magazine: 'N',
  mesh: '✦',
  noir: '●',
  vaporwave: '△',
  minimal: '—',
  news: '▤',
  storm: '≡',
  chat: '✉',
  ripped: '✂',
  visualizer: '▁',
  vinyl: '◎',
};

const HUES = {
  x: 210, facebook: 214, instagram: 330, tiktok: 350, quote: 32,
  threads: 205, linkedin: 200, whatsapp: 160, youtube: 0, reddit: 18,
  telegram: 198, snapchat: 50, wechat: 145, pinterest: 355, tumblr: 210,
  mastodon: 250, bluesky: 207, discord: 245, slack: 300, quora: 4, medium: 145,
  spotify: 141, podcast: 280,
  glass: 255, neu: 215, elegant: 38, polaroid: 32, magazine: 0,
  mesh: 290, noir: 0, vaporwave: 310, minimal: 220, news: 0,
  storm: 210, chat: 150, ripped: 35, visualizer: 195, vinyl: 348,
};

export default function TemplatePanel({ cfg, api }) {
  const [cat, setCat] = useState('social');
  const list = TEMPLATES.filter((t) => (t.cat === 'aesthetic' ? 'aesthetic' : 'social') === cat);

  return (
    <div>
      <div className="tpl-cats">
        <button
          type="button"
          className={`tpl-cat ${cat === 'social' ? 'is-active' : ''}`}
          onClick={() => setCat('social')}
        >
          Social
        </button>
        <button
          type="button"
          className={`tpl-cat ${cat === 'aesthetic' ? 'is-active' : ''}`}
          onClick={() => setCat('aesthetic')}
        >
          Aesthetic
          <span className="tpl-premium">PREMIUM</span>
        </button>
      </div>
      <div className="tpl-grid">
        {list.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`tpl ${cfg.template === t.id ? 'is-active' : ''}`}
            onClick={() => api.update((c) => ({ ...c, template: t.id }))}
          >
            <span
              className="tpl-mark"
              style={{ background: `linear-gradient(135deg, hsl(${HUES[t.id]} 80% 55%), hsl(${(HUES[t.id] + 40) % 360} 75% 45%))` }}
            >
              {MARKS[t.id]}
            </span>
            <span className="tpl-text">
              <b>{t.name}</b>
              <i>{t.hint}</i>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
