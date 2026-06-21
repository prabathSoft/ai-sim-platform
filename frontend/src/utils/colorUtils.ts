export function lerpColor(colorA: string, colorB: string, t: number): string {
  const a = hexToRgb(colorA);
  const b = hexToRgb(colorB);

  if (!a || !b) return colorA;

  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const b2 = Math.round(a.b + (b.b - a.b) * t);

  return `rgb(${r}, ${g}, ${b2})`;
}

export function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  if (clean.length !== 6) return null;

  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);

  return { r, g, b };
}

export function classColor(label: number): string {
  const colors = ["#2563eb", "#dc2626", "#16a34a", "#9333ea"];
  return colors[label % colors.length];
}
