import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function isIos() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  if (/iP(hone|ad|od)/.test(ua)) return true;
  return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
}

function isStandalone() {
  if (typeof window === 'undefined') return false;
  try {
    return window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  } catch {
    return false;
  }
}

export default function InstallPrompt() {
  const [deferred, setDeferred] = useState(null);
  const [open, setOpen] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [standalone, setStandalone] = useState(isStandalone);

  useEffect(() => {
    const onBeforeInstall = (e) => {
      e.preventDefault();
      setDeferred(e);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferred(null);
      setStandalone(true);
      setOpen(false);
    };
    const onModeChange = (e) => {
      if (e.matches) {
        setStandalone(true);
        setOpen(false);
      }
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);
    const mq = window.matchMedia('(display-mode: standalone)');
    if (mq.addEventListener) mq.addEventListener('change', onModeChange);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
      if (mq.removeEventListener) mq.removeEventListener('change', onModeChange);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (installed || standalone) return null;

  const install = async () => {
    if (!deferred) return;
    deferred.prompt();
    try {
      await deferred.userChoice;
    } catch {
      /* dismissed */
    }
    setDeferred(null);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const ios = isIos();

  return (
    <>
      <button
        type="button"
        className="iconbtn"
        title="Install or bookmark"
        aria-label="Install or bookmark GreatInspo"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v12" />
          <path d="m7 11 5 5 5-5" />
          <path d="M21 15v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
        </svg>
      </button>

      {open && createPortal(
        <div className="inst-backdrop" role="dialog" aria-modal="true" aria-labelledby="inst-title" onClick={() => setOpen(false)}>
          <div className="inst-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="coffee-close" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <h2 id="inst-title">📲 Keep GreatInspo handy</h2>
            <p>
              Add it to your home screen so it opens like an app, or bookmark it for later. It
              works offline once installed — free, no sign-up.
            </p>

            {deferred && (
              <button type="button" className="btn btn-primary btn-full" onClick={install}>
                ⬇ Install app
              </button>
            )}

            {ios ? (
              <ol className="inst-steps">
                <li>Tap the <b>Share</b> icon in Safari.</li>
                <li>Choose <b>Add to Home Screen</b>.</li>
                <li>Tap <b>Add</b> — it appears on your home screen.</li>
              </ol>
            ) : (
              <p className="inst-kbd">
                Bookmark: press <kbd>Ctrl</kbd> + <kbd>D</kbd> or <kbd>⌘</kbd> + <kbd>D</kbd> on
                Mac.
              </p>
            )}

            <button type="button" className="btn btn-full" onClick={copyLink}>
              {copied ? 'Link copied ✓' : 'Copy link'}
            </button>

            <p className="inst-note">
              Chrome, Edge and Android may offer “Install app” automatically — use the button above
              if you see it.
            </p>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
