const TOKEN_RE = /(https?:\/\/[^\s<>]+|www\.[^\s<>]+|(?:[a-z0-9][a-z0-9-]*\.)+[a-z]{2,}(?::\d{2,5})?(?:\/[^\s<>]*)?|@[A-Za-z0-9_.]+|#[\p{L}\p{N}_]+)/giu;

export function tokenize(text) {
  const src = String(text ?? '');
  if (!src) return [];
  const out = [];
  let last = 0;
  TOKEN_RE.lastIndex = 0;
  let m = TOKEN_RE.exec(src);
  while (m !== null) {
    if (m.index > last) out.push(src.slice(last, m.index));
    const tok = m[0];
    const kind = tok.startsWith('@') ? 'mention' : tok.startsWith('#') ? 'tag' : 'link';
    out.push({ t: tok, k: kind });
    last = m.index + tok.length;
    if (m[0].length === 0) TOKEN_RE.lastIndex += 1;
    m = TOKEN_RE.exec(src);
  }
  if (last < src.length) out.push(src.slice(last));
  return out;
}
