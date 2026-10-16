export const FONTS = [
  { id: 'default', label: 'System', css: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" },
  { id: 'poppins', label: 'Poppins', css: "'Poppins', sans-serif" },
  { id: 'montserrat', label: 'Montserrat', css: "'Montserrat', sans-serif" },
  { id: 'inter', label: 'Inter', css: "'Inter', sans-serif" },
  { id: 'nunito', label: 'Nunito', css: "'Nunito', sans-serif" },
  { id: 'space', label: 'Space Grotesk', css: "'Space Grotesk', sans-serif" },
  { id: 'oswald', label: 'Oswald', css: "'Oswald', sans-serif" },
  { id: 'bebas', label: 'Bebas Neue', css: "'Bebas Neue', Impact, sans-serif" },
  { id: 'archivo', label: 'Archivo Black', css: "'Archivo Black', sans-serif" },
  { id: 'playfair', label: 'Playfair Display', css: "'Playfair Display', Georgia, serif" },
  { id: 'lora', label: 'Lora', css: "'Lora', Georgia, serif" },
  { id: 'dmserif', label: 'DM Serif Display', css: "'DM Serif Display', Georgia, serif" },
  { id: 'caveat', label: 'Caveat', css: "'Caveat', 'Segoe Script', cursive" },
  { id: 'marker', label: 'Permanent Marker', css: "'Permanent Marker', 'Segoe Script', cursive" },
  { id: 'jetbrains', label: 'JetBrains Mono', css: "'JetBrains Mono', 'Courier New', monospace" },
];

export function fontById(id) {
  return FONTS.find((f) => f.id === id) || FONTS[0];
}

export const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Caveat:wght@600&family=DM+Serif+Display&family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@500&family=Lora:wght@500;600&family=Montserrat:wght@500;700&family=Nunito:wght@600;800&family=Oswald:wght@500;600&family=Permanent+Marker&family=Playfair+Display:wght@600;700&family=Poppins:wght@400;600;700&family=Space+Grotesk:wght@500;700&display=swap';
