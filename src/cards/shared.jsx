import { useContext, useMemo, useRef } from 'react';
import { initials, hashHue } from '../lib/format';
import { tokenize } from '../lib/tokenize';
import { PlatformLogo } from './logos';
import { ALIGN_POS } from '../state';
import { AvatarCtx } from './ctx';

export function Avatar({ cfg, size = 40, ring = null }) {
  const hue = hashHue(cfg.author);
  const api = useContext(AvatarCtx);
  const drag = useRef(null);
  const av = cfg.avatar || {};
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    flexShrink: 0,
    display: 'block',
  };
  if (ring) {
    style.boxShadow = `0 0 0 ${Math.max(1.5, size / 26)}px ${ring}`;
  }
  if (av.src) {
    const onPointerDown = (e) => {
      if (!api) return;
      const card = e.currentTarget.closest('.card-root');
      const scale = card ? card.getBoundingClientRect().width / card.offsetWidth : 1;
      drag.current = { sx: e.clientX, sy: e.clientY, ox: av.x || 0, oy: av.y || 0, scale };
      e.currentTarget.setPointerCapture(e.pointerId);
      api.checkpoint();
    };
    const onPointerMove = (e) => {
      const d = drag.current;
      if (!d || !api) return;
      const dx = (e.clientX - d.sx) / d.scale;
      const dy = (e.clientY - d.sy) / d.scale;
      api.updateLive((c) => ({ ...c, avatar: { ...c.avatar, x: d.ox + dx, y: d.oy + dy } }));
    };
    const onPointerUp = () => {
      drag.current = null;
    };
    return (
      <span
        className={`sc-avatar-frame ${api ? 'is-draggable' : ''}`}
        style={{
          ...style,
          display: 'block',
          position: 'relative',
          overflow: 'hidden',
          cursor: api ? 'grab' : 'default',
          touchAction: 'none',
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img
          src={av.src}
          alt=""
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: ALIGN_POS[av.align] || 'center center',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none',
            transform: `translate(${av.x || 0}px, ${av.y || 0}px) scale(${av.zoom || 1})`,
            transformOrigin: 'center',
          }}
          className="sc-avatar"
        />
      </span>
    );
  }
  return (
    <div
      className="sc-avatar"
      style={{
        ...style,
        background: `linear-gradient(135deg, hsl(${hue} 70% 55%), hsl(${(hue + 60) % 360} 70% 45%))`,
        color: '#fff',
        fontWeight: 700,
        fontSize: size * 0.38,
        display: 'grid',
        placeItems: 'center',
        letterSpacing: '.02em',
      }}
    >
      {initials(cfg.author)}
    </div>
  );
}

export function Photo({
  cfg,
  api,
  ratio = '16 / 9',
  height = null,
  radius = 8,
  border = null,
  className = '',
  children = null,
}) {
  const drag = useRef(null);
  const { photo } = cfg;

  const onPointerDown = (e) => {
    if (!photo.src) return;
    const card = e.currentTarget.closest('.card-root');
    const scale = card ? card.getBoundingClientRect().width / card.offsetWidth : 1;
    drag.current = { sx: e.clientX, sy: e.clientY, ox: photo.x, oy: photo.y, scale };
    e.currentTarget.setPointerCapture(e.pointerId);
    api.checkpoint();
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = (e.clientX - d.sx) / d.scale;
    const dy = (e.clientY - d.sy) / d.scale;
    api.updateLive((c) => ({ ...c, photo: { ...c.photo, x: d.ox + dx, y: d.oy + dy } }));
  };

  const onPointerUp = () => {
    drag.current = null;
  };

  const shape = photo.shape || 'auto';
  const style = {
    borderRadius: radius,
    overflow: 'hidden',
    position: 'relative',
    background: 'rgba(127,127,127,.12)',
    cursor: photo.src ? 'grab' : 'default',
    touchAction: 'none',
  };
  if (shape === 'square') style.borderRadius = 0;
  if (shape === 'circle') style.borderRadius = '50%';
  if (height != null) style.height = height;
  else style.aspectRatio = shape === 'circle' ? '1 / 1' : ratio;
  if (border) style.border = border;

  return (
    <div
      className={`sc-photo ${className}`}
      style={style}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {photo.src ? (
        <img
          src={photo.src}
          alt=""
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: photo.fit || 'cover',
            objectPosition: ALIGN_POS[photo.align] || 'center center',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none',
            transform: `translate(${photo.x}px, ${photo.y}px) scale(${photo.zoom})`,
            transformOrigin: 'center',
          }}
        />
      ) : (
        <div className="sc-photo-empty">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="4" width="18" height="16" rx="3" />
            <circle cx="8.5" cy="9.5" r="1.6" />
            <path d="m4 17 5-5 4.5 4.5L16.5 13 20 16.5" />
          </svg>
          <span>Drop a photo</span>
        </div>
      )}
      {children}
    </div>
  );
}

export function Metric({ show, icon, value, title, gap = 22 }) {
  if (!show) return null;
  return (
    <span className="sc-metric" style={{ gap }} title={title}>
      {icon}
      <span className="sc-metric-count">{value}</span>
    </span>
  );
}

export function Watermark({ cfg }) {
  if (!cfg.watermark) return null;
  return (
    <div className="sc-watermark" aria-hidden="true">
      <PlatformLogo id={cfg.template} size={16} />
    </div>
  );
}

export function Body({ text, className = '', style = null }) {
  const parts = useMemo(() => tokenize(text), [text]);
  return (
    <span className={className} style={style}>
      {parts.map((p, i) =>
        typeof p === 'string' ? (
          p
        ) : (
          <span key={i} className={`sc-tok sc-tok-${p.k}`}>
            {p.t}
          </span>
        ),
      )}
    </span>
  );
}
