export function formatCount(n) {
  const num = Number(n) || 0;
  if (num >= 1_000_000) return trim(num / 1_000_000) + 'M';
  if (num >= 10_000) return trim(num / 1_000) + 'K';
  if (num >= 1_000) return trim(num / 1_000) + 'K';
  return String(num);
}

function trim(v) {
  const s = (Math.round(v * 10) / 10).toFixed(1);
  return s.endsWith('.0') ? s.slice(0, -2) : s;
}

export function formatFull(n) {
  return (Number(n) || 0).toLocaleString('en-US');
}

export function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

export function initials(name) {
  const parts = String(name || '?').replace(/^@/, '').trim().split(/\s+/);
  const a = parts[0]?.[0] || '?';
  const b = parts.length > 1 ? parts[parts.length - 1][0] : parts[0]?.[1] || '';
  return (a + b).toUpperCase();
}

export function hashHue(str) {
  let h = 0;
  const s = String(str || 'x');
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360;
  return h;
}

export function downloadUrl(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
