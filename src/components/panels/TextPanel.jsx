import { useRef, useState } from 'react';
import { Field, Slider, Switch, TextArea, TextInput } from '../ui';
import { EMOJIS } from '../../state';
import { SAMPLES } from '../../lib/samples';
import { FONTS } from '../../lib/fonts';
import { formatTimeStr, parseTimeStr } from '../../lib/format';

export default function TextPanel({ cfg, api }) {
  const [picker, setPicker] = useState(null);
  const [cat, setCat] = useState(SAMPLES[0].id);
  const [timeDraft, setTimeDraft] = useState(null);
  const [durDraft, setDurDraft] = useState(null);
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

  const isPlayer = cfg.template === 'spotify' || cfg.template === 'podcast' || cfg.template === 'vinyl';
  const durSec = parseTimeStr(cfg.player?.duration) ?? 238;
  const prog = cfg.player?.progress ?? 42;
  const elapsed = formatTimeStr((durSec * prog) / 100);

  const activeFont = FONTS.find((f) => f.id === cfg.style.font) || FONTS[0];
  const fontSample = (cfg.body || 'The quick brown fox').replace(/\s+/g, ' ').trim().slice(0, 12) || 'Aa';

  const onDurationChange = (v) => {
    setDurDraft(v);
    const sec = parseTimeStr(v);
    if (sec != null) {
      api.updateLive((c) => ({
        ...c,
        player: { ...c.player, duration: formatTimeStr(sec), time: formatTimeStr((sec * (c.player?.progress ?? prog)) / 100) },
      }));
    }
  };

  const onDurationBlur = () => {
    setDurDraft(null);
  };

  const onTimeChange = (v) => {
    setTimeDraft(v);
    const sec = parseTimeStr(v);
    if (sec != null && sec <= durSec) {
      const p = Math.round((sec / durSec) * 100);
      api.updateLive((c) => ({ ...c, player: { ...c.player, progress: p, time: formatTimeStr(sec) } }));
    }
  };

  const onProgressChange = (v) => {
    api.updateLive((c) => ({ ...c, player: { ...c.player, progress: v, time: formatTimeStr((durSec * v) / 100) } }));
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
            <button
              type="button"
              className={`linkbtn ${picker === 'fonts' ? 'is-active' : ''}`}
              onClick={() => toggle('fonts')}
            >
              Aa fonts
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

        {picker === 'fonts' && (
          <div className="sample-pop">
            <div className="sample-tools">
              <span>{activeFont.label} · {FONTS.length} fonts — click to apply</span>
              <button
                type="button"
                className="linkbtn"
                onClick={() => api.update((c) => ({ ...c, style: { ...c.style, font: 'default' } }))}
              >
                ↺ reset
              </button>
            </div>

            <div className="font-grid">
              {FONTS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`font-chip ${cfg.style.font === f.id ? 'is-active' : ''}`}
                  onClick={() => api.update((c) => ({ ...c, style: { ...c.style, font: f.id } }))}
                >
                  <b style={{ fontFamily: f.css }}>{fontSample}</b>
                  <span>{f.label}</span>
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

      {isPlayer && (
        <>
          <div className="grid2">
            <Field label="Play time" hint="synced with progress">
              <TextInput
                value={timeDraft ?? cfg.player?.time ?? elapsed}
                mono
                placeholder="1:42"
                onFocus={api.checkpoint}
                onChange={onTimeChange}
                onBlur={() => setTimeDraft(null)}
              />
            </Field>
            <Field label="Duration" hint="m:ss · seconds 0–59">
              <TextInput
                value={durDraft ?? cfg.player?.duration ?? '3:58'}
                mono
                placeholder="3:58"
                onFocus={api.checkpoint}
                onChange={onDurationChange}
                onBlur={onDurationBlur}
              />
            </Field>
          </div>
          <Slider
            label="Progress"
            min={0}
            max={100}
            value={prog}
            format={(v) => `${v}% · ${formatTimeStr((durSec * v) / 100)}`}
            onCheckpoint={api.checkpoint}
            onChange={onProgressChange}
          />
        </>
      )}

      <Switch
        label="Verified badge"
        hint="blue check"
        checked={cfg.verified}
        onChange={(v) => api.update((c) => ({ ...c, verified: v }))}
      />
    </div>
  );
}
