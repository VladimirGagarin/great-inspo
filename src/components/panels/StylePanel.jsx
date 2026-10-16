import { TEMPLATES } from '../../state';
import { Btn, ColorInput, Segmented, Slider, Switch } from '../ui';

export default function StylePanel({ cfg, api }) {
  const style = cfg.style;
  const setStyle = (patch) => api.update((c) => ({ ...c, style: { ...c.style, ...patch } }));
  const setStyleLive = (patch) => api.updateLive((c) => ({ ...c, style: { ...c.style, ...patch } }));
  const defAccent = {
    x: '#1d9bf0', facebook: '#0866ff', instagram: '#0095f6', tiktok: '#fe2c55',
    quote: '#8b7355', threads: '#0a7cff', linkedin: '#0a66c2', whatsapp: '#008069',
    youtube: '#ff0000', reddit: '#ff4500', telegram: '#2aabee', snapchat: '#f5c400',
    wechat: '#07c160', pinterest: '#e60023', tumblr: '#36465d', mastodon: '#6364ff',
    bluesky: '#0085ff', discord: '#5865f2', slack: '#611f69', quora: '#b92b27',
    medium: '#1a8917',
  }[cfg.template] || '#1d9bf0';

  return (
    <div className="stack">
      <Switch
        label="Dark mode"
        hint={TEMPLATES.find((t) => t.id === cfg.template)?.name}
        checked={cfg.dark}
        onChange={(v) => api.update((c) => ({ ...c, dark: v }))}
      />

      <Slider
        label="Post text size"
        min={12}
        max={26}
        value={style.fontSize}
        format={(v) => `${v}px`}
        onCheckpoint={api.checkpoint}
        onChange={(v) => setStyleLive({ fontSize: v })}
      />

      <Slider
        label="Card padding"
        min={0}
        max={64}
        value={style.padding}
        format={(v) => `${v}px`}
        onCheckpoint={api.checkpoint}
        onChange={(v) => setStyleLive({ padding: v })}
      />

      <Slider
        label="Corner radius"
        min={0}
        max={32}
        value={style.radius}
        format={(v) => `${v}px`}
        onCheckpoint={api.checkpoint}
        onChange={(v) => setStyleLive({ radius: v })}
      />

      <div className="divider" />

      <div className="fld">
        <span className="fld-label">Accent color</span>
        <ColorInput
          label={`Links & buttons${style.accent ? '' : ' (auto)'}`}
          value={style.accent || defAccent}
          onCheckpoint={api.checkpoint}
          onChange={(v) => setStyleLive({ accent: v })}
        />
        <div className="row">
          <Btn onClick={() => setStyle({ accent: '' })} disabled={!style.accent}>Reset to auto</Btn>
        </div>
      </div>

      <div className="divider" />

      <div className="fld">
        <span className="fld-label">Card background</span>
        <Segmented
          value={style.bgType}
          onChange={(v) => setStyle({ bgType: v })}
          options={[
            { value: 'default', label: 'Template' },
            { value: 'solid', label: 'Solid' },
            { value: 'gradient', label: 'Gradient' },
          ]}
        />
      </div>

      {style.bgType !== 'default' && (
        <div className="grid2">
          <ColorInput
            label={style.bgType === 'gradient' ? 'From' : 'Color'}
            value={style.bg1}
            onCheckpoint={api.checkpoint}
            onChange={(v) => setStyleLive({ bg1: v })}
          />
          {style.bgType === 'gradient' && (
            <ColorInput
              label="To"
              value={style.bg2}
              onCheckpoint={api.checkpoint}
              onChange={(v) => setStyleLive({ bg2: v })}
            />
          )}
        </div>
      )}

      <div className="divider" />

      <Switch
        label="Logo watermark"
        hint="platform mark on every card, bottom corner"
        checked={cfg.watermark}
        onChange={(v) => api.update((c) => ({ ...c, watermark: v }))}
      />
    </div>
  );
}
