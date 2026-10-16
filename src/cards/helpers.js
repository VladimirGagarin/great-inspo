export function accentOf(cfg, def) {
  return cfg.style.accent || def;
}

export function cardBackground(cfg, light, dark) {
  const { bgType, bg1, bg2 } = cfg.style;
  if (bgType === 'solid') return bg1;
  if (bgType === 'gradient') return `linear-gradient(135deg, ${bg1}, ${bg2})`;
  return cfg.dark ? dark : light;
}

export function cardVars(cfg, { accent = '', bg = '', textPad = null } = {}) {
  return {
    '--accent': accent || cfg.style.accent || '#1d9bf0',
    '--pad': `${textPad ?? cfg.style.padding}px`,
    '--radius': `${cfg.style.radius}px`,
    '--card-bg': bg || '',
    background: bg || undefined,
    borderRadius: `${cfg.style.radius}px`,
  };
}
