import { useRef } from 'react';
import { Btn, Segmented } from '../ui';
import { DownloadIcon, Send } from '../../cards/icons';

export default function ExportPanel({ scale, onScale, busy, isDefault, onDownload, onCopy, onSave, onLoad, onReset }) {
  const fileRef = useRef(null);

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
