import { useRef, useState } from 'react';
import { Field, Switch, TextArea, TextInput } from '../ui';
import { EMOJIS } from '../../state';
import { SAMPLES } from '../../lib/samples';

export default function TextPanel({ cfg, api }) {
  const [picker, setPicker] = useState(null);
  const [cat, setCat] = useState(SAMPLES[0].id);
  const areaRef = useRef(null);
  const category = SAMPLES.find((s) => s.id === cat) || SAMPLES[0];

  const toggle = (name) => setPicker((p) => (p === name ? null : name));

  const addEmoji = (e) => {
    api.update((c) => ({ ...c, body: c.body + e }));
    areaRef.current?.focus();
  };

  const insertSample = (text) => {
    api.update((c) => ({ ...c, body: text }));
    areaRef.current?.focus();
  };

  const randomSample = () => {
    const items = category.items;
    let next = items[Math.floor(Math.random() * items.length)];
    if (items.length > 1 && next === cfg.body) {
      next = items[(items.indexOf(next) + 1) % items.length];
    }
    insertSample(next);
  };

  return (
    <div className="stack">
      <div className="fld">
        <span className="fld-label">
          Post text
          <span className="labelbtns">
            <button
              type="button"
              className={`linkbtn ${picker === 'emoji' ? 'is-active' : ''}`}
              onClick={() => toggle('emoji')}
            >
              ☺ emoji
            </button>
            <button
              type="button"
              className={`linkbtn ${picker === 'samples' ? 'is-active' : ''}`}
              onClick={() => toggle('samples')}
            >
              ✎ samples
            </button>
          </span>
        </span>

        <div ref={areaRef}>
          <TextArea
            value={cfg.body}
            rows={5}
            placeholder="Write your post…"
            onFocus={api.checkpoint}
            onChange={(v) => api.updateLive((c) => ({ ...c, body: v }))}
          />
        </div>

        {picker === 'emoji' && (
          <div className="emoji-pop">
            {EMOJIS.map((e) => (
              <button key={e} type="button" onClick={() => addEmoji(e)}>{e}</button>
            ))}
          </div>
        )}

        {picker === 'samples' && (
          <div className="sample-pop">
            <div className="sample-cats">
              {SAMPLES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`sample-cat ${cat === s.id ? 'is-active' : ''}`}
                  onClick={() => setCat(s.id)}
                >
                  <i>{s.emoji}</i>
                  {s.label}
                  <em>{s.items.length}</em>
                </button>
              ))}
            </div>

            <div className="sample-tools">
              <span>{category.emoji} {category.label} · {category.items.length} captions — click to insert</span>
              <button type="button" className="linkbtn" onClick={randomSample}>🎲 random</button>
            </div>

            <div className="sample-list">
              {category.items.map((t, i) => (
                <button
                  key={`${category.id}-${i}`}
                  type="button"
                  className={`sample-item ${cfg.body === t ? 'is-used' : ''}`}
                  onClick={() => insertSample(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid2">
        <Field label="Author name">
          <TextInput
            value={cfg.author}
            placeholder="Alex Morgan"
            onFocus={api.checkpoint}
            onChange={(v) => api.updateLive((c) => ({ ...c, author: v }))}
          />
        </Field>
        <Field label="Handle">
          <TextInput
            value={cfg.handle}
            mono
            placeholder="@alexmorgan"
            onFocus={api.checkpoint}
            onChange={(v) => api.updateLive((c) => ({ ...c, handle: v }))}
          />
        </Field>
      </div>

      <Field label="Timestamp">
        <TextInput
          value={cfg.timestamp}
          placeholder="2:34 PM · Jun 12, 2024"
          onFocus={api.checkpoint}
          onChange={(v) => api.updateLive((c) => ({ ...c, timestamp: v }))}
        />
      </Field>

      <Switch
        label="Verified badge"
        hint="blue check"
        checked={cfg.verified}
        onChange={(v) => api.update((c) => ({ ...c, verified: v }))}
      />
    </div>
  );
}
