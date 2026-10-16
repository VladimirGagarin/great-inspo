const KEY = 'greatinspo.images.v1';

export function loadImages() {
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return {
      photo: typeof parsed.photo === 'string' ? parsed.photo : null,
      avatar: typeof parsed.avatar === 'string' ? parsed.avatar : null,
    };
  } catch {
    return null;
  }
}

function writeImages(payload) {
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}

async function shrinkDataUrl(dataUrl, maxDim = 1600, quality = 0.82) {
  try {
    const img = new Image();
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = dataUrl;
    });
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h) return dataUrl;
    const scale = Math.min(1, maxDim / Math.max(w, h));
    if (scale >= 1) return dataUrl;
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', quality);
  } catch {
    return dataUrl;
  }
}

export async function saveImages({ photoSrc = null, avatarSrc = null }) {
  const payload = { photo: photoSrc || null, avatar: avatarSrc || null, at: Date.now() };
  if (writeImages(payload)) return true;
  const small = {
    photo: photoSrc ? await shrinkDataUrl(photoSrc) : null,
    avatar: avatarSrc ? await shrinkDataUrl(avatarSrc) : null,
    at: Date.now(),
  };
  return writeImages(small);
}

export function clearImages() {
  try {
    window.sessionStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
