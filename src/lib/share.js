export const SHARE_TEXT =
  'Make realistic social media post cards and export them as PNG — free, no sign-up.';

export function pageUrl() {
  if (typeof window === 'undefined') return 'https://vladimirgagarin.github.io/great-inspo/';
  return window.location.href;
}

export function buildShareLinks() {
  const url = encodeURIComponent(pageUrl());
  const text = encodeURIComponent(SHARE_TEXT);
  const title = encodeURIComponent('GreatInspo — Social Card Maker');
  return [
    { id: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/?text=${text}%0A${url}` },
    { id: 'x', label: 'X', href: `https://twitter.com/intent/tweet?text=${text}&url=${url}` },
    { id: 'facebook', label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { id: 'telegram', label: 'Telegram', href: `https://t.me/share/url?url=${url}&text=${text}` },
    { id: 'linkedin', label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { id: 'reddit', label: 'Reddit', href: `https://www.reddit.com/submit?url=${url}&title=${title}` },
    { id: 'email', label: 'Email', href: `mailto:?subject=${title}&body=${text}%0A%0A${url}` },
  ];
}
