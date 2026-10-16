import { useCallback, useEffect, useState } from 'react';

const M_PESA_DISPLAY = '+254 741 146 031';
const M_PESA_COPY = '+254741146031';
const ABROAD_APPS = [
  { name: 'Remitly', url: 'https://www.remitly.com/' },
  { name: 'WorldRemit', url: 'https://www.worldremit.com/' },
  { name: 'Sendwave', url: 'https://www.sendwave.com/' },
  { name: 'Western Union', url: 'https://www.westernunion.com/ke/en/send-money.html' },
  { name: 'Wise', url: 'https://wise.com/' },
];

function ExtLinkIcon({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

function detectKenya() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz === 'Africa/Nairobi') return true;
    const loc = navigator.language || '';
    return /(^|-)ke$/i.test(loc);
  } catch {
    return false;
  }
}

export default function CoffeeOverlay({ open, onClose }) {
  const [inKenya, setInKenya] = useState(detectKenya);
  const [copied, setCopied] = useState(false);

  const close = useCallback(() => {
    setCopied(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  if (!open) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(M_PESA_COPY);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="coffee-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coffee-title"
      onClick={close}
    >
      <div className="coffee-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="coffee-close" onClick={close} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="coffee-head">
          <span className="coffee-cup" aria-hidden="true">☕</span>
          <h2 id="coffee-title">Buy me a coffee</h2>
          <p className="coffee-lead">
            GreatInspo is free and always will be. If it saved you time, you can support me with a
            tip — completely optional. Thank you! 💜
          </p>
        </div>

        <div className="coffee-tabs" role="tablist" aria-label="Your location">
          <button
            type="button"
            role="tab"
            aria-selected={inKenya}
            className={`coffee-tab${inKenya ? ' is-on' : ''}`}
            onClick={() => setInKenya(true)}
          >
            🇰🇪 In Kenya
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={!inKenya}
            className={`coffee-tab${!inKenya ? ' is-on' : ''}`}
            onClick={() => setInKenya(false)}
          >
            🌍 Outside Kenya
          </button>
        </div>

        <div className="coffee-body">
          <div className="coffee-pay">
            <span className="coffee-label">{inKenya ? 'M-Pesa · Send Money' : 'Send via mobile money'}</span>
            <div className="coffee-num">{M_PESA_DISPLAY}</div>
            <button type="button" className="btn coffee-copy" onClick={copy}>
              {copied ? 'Copied ✓' : 'Copy number'}
            </button>
          </div>

          <div className="coffee-info">
            {inKenya ? (
              <>
                <strong>Tip from Kenya (M-Pesa)</strong>
                <ol className="coffee-steps">
                  <li>Open M-Pesa and choose <b>Send Money</b>.</li>
                  <li>Enter the number on the left.</li>
                  <li>Send any amount you like.</li>
                </ol>
              </>
            ) : (
              <>
                <strong>Tip from abroad</strong>
                <p className="coffee-note">
                  Tap any app to go straight to it, then send a tip to my M-Pesa number on the left.
                  These all deliver to M-Pesa in Kenya:
                </p>
                <ul className="coffee-apps">
                  {ABROAD_APPS.map((app) => (
                    <li key={app.name}>
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Open ${app.name} (opens in a new tab)`}
                      >
                        {app.name}
                        <ExtLinkIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="coffee-thanks">
          <span aria-hidden="true">🙏</span> Thanks a latte for supporting GreatInspo — even a coffee
          keeps the lights on.
        </div>

        <div className="coffee-actions">
          <button type="button" className="btn" onClick={close}>Maybe later</button>
        </div>
      </div>
    </div>
  );
}
