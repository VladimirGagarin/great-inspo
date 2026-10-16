import { useRef } from 'react';
import { Btn, Segmented } from '../ui';
import { DownloadIcon, Send } from '../../cards/icons';
import { SHARE_ICONS, ShareIcon } from '../shareIcons';
import { buildShareLinks } from '../../lib/share';

export default function ExportPanel({ scale, onScale, busy, isDefault, onDownload, onCopy, onShare, onSave, onLoad, onReset }) {
  const fileRef = useRef(null);
  const canNativeShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';
  const shareLinks = buildShareLinks();

  return (
    <div className="stack">
      <div className="fld">
        <span className="fld-label">Resolution</span>
        <Segmented
          value={scale}
          onChange={onScale}
          options={[
            { value: 2, label: '2× retina' },
            { value: 3, label: '3× ultra' },
          ]}
        />
      </div>

      <Btn variant="primary" full onClick={onDownload} disabled={busy || isDefault} title={isDefault ? 'Edit a field to enable export' : undefined}>
        {busy ? <span className="spinner" /> : <DownloadIcon size={16} />}
        {busy ? 'Rendering…' : 'Download PNG'}
      </Btn>

      <Btn full onClick={onCopy} disabled={busy || isDefault} title={isDefault ? 'Edit a field to enable export' : undefined}>
        <Send size={15} /> Copy to clipboard
      </Btn>

      {canNativeShare && (
        <Btn full onClick={onShare} disabled={busy || isDefault} title={isDefault ? 'Edit a field to enable export' : 'Share the generated image'}>
          <ShareIcon size={15} /> Share image…
        </Btn>
      )}

      <div className="divider" />

      <div className="fld">
        <span className="fld-label">Share GreatInspo</span>
        <div className="share-row">
          {shareLinks.map((s) => {
            const Icon = SHARE_ICONS[s.id];
            return (
              <a
                key={s.id}
                className={`share-btn share-${s.id}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Share on ${s.label} (opens in a new tab)`}
                aria-label={`Share on ${s.label}`}
              >
                {Icon ? <Icon size={16} /> : null}
              </a>
            );
          })}
        </div>
        <p className="muted small">Opens that app with a link to GreatInspo.</p>
      </div>

      <div className="divider" />

      <div className="fld">
        <span className="fld-label">Config</span>
        <div className="row row-wrap">
          <Btn onClick={onSave}>Save JSON</Btn>
          <Btn onClick={() => fileRef.current?.click()}>Load JSON</Btn>
          <Btn onClick={onReset}>Reset all</Btn>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onLoad(f);
              e.target.value = '';
            }}
          />
        </div>
      </div>

      <p className="muted small">
        Tip: <kbd>Ctrl</kbd>+<kbd>Z</kbd> undo · <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> redo
      </p>
    </div>
  );
}
