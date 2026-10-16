import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { defaultConfig } from './state';
import Preview from './components/Preview';
import Controls from './components/Controls';
import { downloadUrl } from './lib/format';

function GiLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="gi" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#gi)" />
      <path d="M30 18c-7.7 0-14 6.3-14 14s6.3 14 14 14c5.4 0 10-3 12.4-7.5V46h6V32c0-7.7-6.3-14-14-14zm0 6c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z" fill="#fff" />
      <path d="M38 30h16v6H44v4h9v6h-9v8h-6V30z" fill="#fff" />
    </svg>
  );
}

export default function App() {
  const [hist, setHist] = useState({ past: [], present: defaultConfig, future: [] });
  const [scale, setScale] = useState(2);
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState(null);
  const cardRef = useRef(null);
  const cfg = hist.present;

  const checkpoint = useCallback(() => {
    setHist((h) => {
      if (h.past[h.past.length - 1] === h.present) return h;
      return { past: [...h.past, h.present].slice(-80), present: h.present, future: [] };
    });
  }, []);

  const update = useCallback((patch) => {
    setHist((h) => ({
      past: [...h.past, h.present].slice(-80),
      present: typeof patch === 'function' ? patch(h.present) : { ...h.present, ...patch },
      future: [],
    }));
  }, []);

  const updateLive = useCallback((patch) => {
    setHist((h) => ({
      ...h,
      present: typeof patch === 'function' ? patch(h.present) : { ...h.present, ...patch },
    }));
  }, []);

  const undo = useCallback(() => {
    setHist((h) => (h.past.length
      ? { past: h.past.slice(0, -1), present: h.past[h.past.length - 1], future: [h.present, ...h.future] }
      : h));
  }, []);

  const redo = useCallback(() => {
    setHist((h) => (h.future.length
      ? { past: [...h.past, h.present], present: h.future[0], future: h.future.slice(1) }
      : h));
  }, []);

  const flash = useCallback((text) => {
    setToast(text);
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const t = window.setTimeout(() => setToast(null), 2400);
    return () => window.clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    const onKey = (e) => {
      const mod = e.ctrlKey || e.metaKey;
      if (!mod) return;
      const key = e.key.toLowerCase();
      if (key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      else if ((key === 'z' && e.shiftKey) || key === 'y') { e.preventDefault(); redo(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [undo, redo]);

  const api = useMemo(() => ({ update, updateLive, checkpoint }), [update, updateLive, checkpoint]);

  const renderPng = useCallback(async () => {
    const node = cardRef.current;
    if (!node) throw new Error('Card not found');
    setBusy(true);
    try {
      return await toPng(node, { pixelRatio: scale, cacheBust: true });
    } finally {
      setBusy(false);
    }
  }, [scale]);

  const onDownload = useCallback(async () => {
    try {
      const url = await renderPng();
      downloadUrl(url, `social-card-${Date.now()}.png`);
      flash('PNG downloaded');
    } catch (err) {
      console.error(err);
      flash('Export failed — try again');
    }
  }, [renderPng, flash]);

  const onCopy = useCallback(async () => {
    try {
      if (!navigator.clipboard || typeof ClipboardItem === 'undefined') {
        flash('Clipboard not supported in this browser');
        return;
      }
      const url = await renderPng();
      const blob = await (await fetch(url)).blob();
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      flash('Copied to clipboard');
    } catch (err) {
      console.error(err);
      flash('Copy failed — download instead');
    }
  }, [renderPng, flash]);

  const onSave = useCallback(() => {
    const blob = new Blob([JSON.stringify(hist.present, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    downloadUrl(url, `social-card-config-${Date.now()}.json`);
    window.setTimeout(() => URL.revokeObjectURL(url), 4000);
    flash('Config saved');
  }, [hist.present, flash]);

  const onLoad = useCallback(async (file) => {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const merged = {
        ...defaultConfig,
        ...parsed,
        photo: { ...defaultConfig.photo, ...(parsed.photo || {}) },
        avatar: { ...defaultConfig.avatar, ...(parsed.avatar || {}) },
        player: { ...defaultConfig.player, ...(parsed.player || {}) },
        stats: { ...defaultConfig.stats, ...(parsed.stats || {}) },
        show: { ...defaultConfig.show, ...(parsed.show || {}) },
        comments: {
          ...defaultConfig.comments,
          ...(parsed.comments || {}),
          items: parsed.comments?.items ?? defaultConfig.comments.items,
        },
        style: { ...defaultConfig.style, ...(parsed.style || {}) },
      };
      setHist((h) => ({ past: [...h.past, h.present].slice(-80), present: merged, future: [] }));
      flash('Config loaded');
    } catch (err) {
      console.error(err);
      flash('Invalid config file');
    }
  }, [flash]);

  const onReset = useCallback(() => {
    update({ ...defaultConfig, photo: { ...defaultConfig.photo }, avatar: { ...defaultConfig.avatar }, player: { ...defaultConfig.player } });
    flash('Reset to defaults');
  }, [update, flash]);

  const exportProps = {
    scale,
    onScale: setScale,
    busy,
    onDownload,
    onCopy,
    onSave,
    onLoad,
    onReset,
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <GiLogo size={30} />
          <div className="brand-text">
            <strong>GreatInspo</strong>
            <span>Social Card Maker</span>
          </div>
        </div>
        <div className="topbar-actions">
          <button type="button" className="iconbtn" title="Undo (Ctrl+Z)" onClick={undo} disabled={!hist.past.length}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 14 4 9l5-5" />
              <path d="M4 9h11a5 5 0 0 1 0 10h-4" />
            </svg>
          </button>
          <button type="button" className="iconbtn" title="Redo (Ctrl+Shift+Z)" onClick={redo} disabled={!hist.future.length}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 14 5-5-5-5" />
              <path d="M20 9H9a5 5 0 0 0 0 10h4" />
            </svg>
          </button>
          <button type="button" className="btn btn-primary topbar-cta" onClick={onDownload} disabled={busy}>
            {busy ? 'Rendering…' : 'Download PNG'}
          </button>
        </div>
      </header>

      <main className="layout">
        <div className="pane pane-preview">
          <div className="pane-label">Live preview</div>
          <Preview cfg={cfg} api={api} cardRef={cardRef} />
        </div>
        <div className="pane pane-controls">
          <Controls cfg={cfg} api={api} exportProps={exportProps} />
        </div>
      </main>

      {busy && (
        <div className="overlay" aria-hidden="true">
          <span className="spinner spinner-lg" />
          <span>Rendering PNG…</span>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
