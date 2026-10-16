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
  'bounty-posty': '✦',
  twitch: '◉',
  github: '⌘',
  wikipedia: 'W',
  resume: '▤',
  hackernews: 'Y',
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
  'bounty-posty': 36, twitch: 270, github: 215, wikipedia: 205, resume: 215, hackernews: 25,
};

export default function TemplatePanel({ cfg, api }) {
  const [cat, setCat] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get('category');
    if (requestedCategory === 'social' || requestedCategory === 'aesthetic') return requestedCategory;
    return TEMPLATES.find((item) => item.id === params.get('template'))?.cat === 'aesthetic' ? 'aesthetic' : 'social';
  });
  const list = TEMPLATES.filter((t) => (t.cat === 'aesthetic' ? 'aesthetic' : 'social') === cat);

  const setCategory = (category) => {
    setCat(category);
    const url = new URL(window.location.href);
    url.searchParams.set('category', category);
    window.history.replaceState({}, '', url);
  };

  const selectTemplate = (template) => {
    api.update((c) => ({ ...c, template }));
    const templateCategory = TEMPLATES.find((item) => item.id === template)?.cat === 'aesthetic' ? 'aesthetic' : 'social';
    setCat(templateCategory);
    const url = new URL(window.location.href);
    url.searchParams.set('template', template);
    url.searchParams.set('category', templateCategory);
    window.history.replaceState({}, '', url);
  };

  return (
    <div>
      <div className="tpl-cats">
        <button
          type="button"
          className={`tpl-cat ${cat === 'social' ? 'is-active' : ''}`}
          onClick={() => setCategory('social')}
        >
          Social
        </button>
        <button
          type="button"
          className={`tpl-cat ${cat === 'aesthetic' ? 'is-active' : ''}`}
          onClick={() => setCategory('aesthetic')}
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
            onClick={() => selectTemplate(t.id)}
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
