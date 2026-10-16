import { useId } from 'react';

export function Section({ title, badge, children, open, onToggle }) {
  return (
    <section className={`pnl ${open ? 'is-open' : ''}`}>
      <button type="button" className="pnl-head" onClick={onToggle} aria-expanded={open}>
        <span className="pnl-title">{title}</span>
        {badge && <span className="pnl-badge">{badge}</span>}
        <span className="pnl-chevron" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>
      {open && <div className="pnl-body">{children}</div>}
    </section>
  );
}

export function Field({ label, hint, children }) {
  return (
    <label className="fld">
      <span className="fld-label">{label}</span>
      {children}
      {hint && <span className="fld-hint">{hint}</span>}
    </label>
  );
}

export function TextInput({ value, onChange, onFocus, onBlur, placeholder, mono }) {
  return (
    <input
      type="text"
      className={`inp ${mono ? 'inp-mono' : ''}`}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function TextArea({ value, onChange, onFocus, placeholder, rows = 4 }) {
  return (
    <textarea
      className="inp inp-area"
      rows={rows}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function Slider({ label, value, min, max, step = 1, onChange, onCheckpoint, format }) {
  return (
    <div className="fld">
      <span className="fld-label">
        {label}
        <b className="fld-value">{format ? format(value) : value}</b>
      </span>
      <input
        type="range"
        className="rng"
        min={min}
        max={max}
        step={step}
        value={value}
        onPointerDown={onCheckpoint}
        onKeyUp={onCheckpoint}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export function NumberInput({ value, onChange, onFocus, min, max, step = 1, suffix }) {
  return (
    <span className="numwrap">
      <input
        type="number"
        className="inp inp-num"
        value={Number.isFinite(value) ? value : 0}
        min={min}
        max={max}
        step={step}
        onFocus={onFocus}
        onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
      />
      {suffix && <span className="num-suffix">{suffix}</span>}
    </span>
  );
}

export function Switch({ label, checked, onChange, hint }) {
  return (
    <button
      type="button"
      className={`sw ${checked ? 'is-on' : ''}`}
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
    >
      <span className="sw-track"><span className="sw-knob" /></span>
      <span className="sw-label">
        {label}
        {hint && <em>{hint}</em>}
      </span>
    </button>
  );
}

export function ColorInput({ label, value, onChange, onCheckpoint }) {
  const id = useId();
  return (
    <div className="fld">
      <span className="fld-label">{label}</span>
      <span className="colorwrap">
        <input
          id={id}
          type="color"
          className="color"
          value={value}
          onPointerDown={onCheckpoint}
          onChange={(e) => onChange(e.target.value)}
        />
        <code className="color-code">{value}</code>
      </span>
    </div>
  );
}

export function Segmented({ options, value, onChange }) {
  return (
    <div className="seg" role="tablist">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="tab"
          aria-selected={value === o.value}
          className={`seg-item ${value === o.value ? 'is-active' : ''}`}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Btn({ children, onClick, variant = 'ghost', disabled, title, full }) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`btn btn-${variant} ${full ? 'btn-full' : ''}`}
    >
      {children}
    </button>
  );
}
