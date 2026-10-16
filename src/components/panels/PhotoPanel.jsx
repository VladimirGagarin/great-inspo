import { useRef, useState } from 'react';
import { Btn, Field, Segmented, Slider } from '../ui';
import { readFileAsDataURL } from '../../lib/format';
import { ALIGN_GRID, FIT_OPTIONS, SHAPE_OPTIONS } from '../../state';

export default function PhotoPanel({ cfg, api }) {
  const photoInput = useRef(null);
  const avatarInput = useRef(null);
  const [over, setOver] = useState(false);
  const [overAvatar, setOverAvatar] = useState(false);

  const setPhoto = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    const url = await readFileAsDataURL(file);
    api.update((c) => ({ ...c, photo: { ...c.photo, src: url, x: 0, y: 0, zoom: 1 } }));
  };

  const setAvatar = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    const url = await readFileAsDataURL(file);
    api.update((c) => ({ ...c, avatar: { src: url } }));
  };

  const setPhotoProp = (key, value) => api.updateLive((c) => ({ ...c, photo: { ...c.photo, [key]: value } }));
  const setPhotoPropNow = (key, value) => api.update((c) => ({ ...c, photo: { ...c.photo, [key]: value } }));

  return (
    <div className="stack">
      <div
        className={`drop ${over ? 'is-over' : ''} ${cfg.photo.src ? 'has-img' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); setPhoto(e.dataTransfer.files?.[0]); }}
      >
        {cfg.photo.src ? (
          <img src={cfg.photo.src} alt="preview" className="drop-thumb" />
        ) : (
          <div className="drop-empty">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" strokeLinecap="round" />
            </svg>
            <span>Drag &amp; drop a photo</span>
            <small>jpg · png · webp</small>
          </div>
        )}
        <input
          ref={photoInput}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          hidden
          onChange={(e) => setPhoto(e.target.files?.[0])}
        />
      </div>

      <div className="row">
        <Btn onClick={() => photoInput.current?.click()} variant="solid">Choose photo</Btn>
        {cfg.photo.src && (
          <Btn onClick={() => api.update((c) => ({ ...c, photo: { ...c.photo, src: null, x: 0, y: 0, zoom: 1 } }))}>
            Remove
          </Btn>
        )}
      </div>

      <Slider
        label="Zoom"
        min={1}
        max={3}
        step={0.01}
        value={cfg.photo.zoom}
        format={(v) => `${Math.round(v * 100)}%`}
        onCheckpoint={api.checkpoint}
        onChange={(v) => api.updateLive((c) => ({ ...c, photo: { ...c.photo, zoom: v } }))}
      />

      <Field label="Crop style">
        <Segmented
          options={FIT_OPTIONS}
          value={cfg.photo.fit}
          onChange={(v) => setPhotoPropNow('fit', v)}
        />
      </Field>

      <Field label="Crop shape">
        <Segmented
          options={SHAPE_OPTIONS}
          value={cfg.photo.shape}
          onChange={(v) => setPhotoPropNow('shape', v)}
        />
      </Field>

      <div className="fld">
        <span className="fld-label">
          Image position
          <b className="fld-value">{cfg.photo.align}</b>
        </span>
        <div className="align-row">
          <span className="align-grid">
            {ALIGN_GRID.map((a) => (
              <button
                key={a}
                type="button"
                title={a}
                aria-label={a}
                aria-pressed={cfg.photo.align === a}
                className={`alignbtn ${cfg.photo.align === a ? 'is-active' : ''}`}
                onClick={() => {
                  api.checkpoint();
                  setPhotoProp('align', a);
                }}
              >
                <i />
              </button>
            ))}
          </span>
          <span className="muted small">Where the photo sits inside the crop frame</span>
        </div>
      </div>

      <div className="row">
        <Btn onClick={() => { api.checkpoint(); api.updateLive((c) => ({ ...c, photo: { ...c.photo, x: 0, y: 0, zoom: 1, align: 'center' } })); }}>
          Reset position
        </Btn>
        <span className="muted">Drag the photo inside the card to reposition</span>
      </div>

      <div className="divider" />

      <Field label="Avatar image">
        <div
          className={`drop drop-sm ${overAvatar ? 'is-over' : ''} ${cfg.avatar.src ? 'has-img' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setOverAvatar(true); }}
          onDragLeave={() => setOverAvatar(false)}
          onDrop={(e) => { e.preventDefault(); setOverAvatar(false); setAvatar(e.dataTransfer.files?.[0]); }}
        >
          {cfg.avatar.src ? (
            <img src={cfg.avatar.src} alt="avatar" className="drop-thumb drop-thumb-round" />
          ) : (
            <div className="drop-empty">
              <span>Drop avatar (optional)</span>
              <small>initials are generated otherwise</small>
            </div>
          )}
          <input
            ref={avatarInput}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            hidden
            onChange={(e) => setAvatar(e.target.files?.[0])}
          />
        </div>
      </Field>

      <div className="row">
        <Btn onClick={() => avatarInput.current?.click()}>Choose avatar</Btn>
        {cfg.avatar.src && <Btn onClick={() => api.update((c) => ({ ...c, avatar: { src: null } }))}>Clear</Btn>}
      </div>
    </div>
  );
}
