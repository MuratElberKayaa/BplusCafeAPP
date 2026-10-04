/**
 * @bplus/ui — Design System Tokens
 * Phase 2 — High-Fidelity UI/UX & Interactive Prototype
 */

export const colors = {
  primary: {
    olive: '#68734B',
    deepOlive: '#34422D',
    sage: '#AEB997',
    hover: '#57623E',
    light: '#EAEFE2',
  },
  surface: {
    cream: '#F4F0E6',
    warmWhite: '#FFFDF8',
    card: '#FFFFFF',
    overlay: 'rgba(43, 35, 30, 0.45)',
  },
  accent: {
    latte: '#D8B98C',
    latteLight: '#F3E9DA',
    leaf: '#5D8A66',
  },
  neutral: {
    espresso: '#2B231E',
    mutedText: '#6B675F',
    border: '#E3DEC3',
    lightGray: '#F2EFEB',
  },
  status: {
    success: '#4B7354',
    successLight: '#E8F2EA',
    warning: '#B8863B',
    warningLight: '#FDF5E8',
    error: '#9E3E37',
    errorLight: '#FCECEB',
    info: '#4A6D7C',
    infoLight: '#EAF2F5',
  },
} as const;

export const spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  full: 9999,
} as const;

export const shadows = {
  soft: '0px 2px 8px rgba(43, 35, 30, 0.05)',
  card: '0px 4px 16px rgba(43, 35, 30, 0.08)',
  elevated: '0px 8px 24px rgba(43, 35, 30, 0.12)',
  modal: '0px 16px 40px rgba(43, 35, 30, 0.18)',
} as const;

export const typography = {
  fontFamily: 'System-UI, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  display: { fontSize: 36, lineHeight: 44, fontWeight: '800' as const },
  h1: { fontSize: 28, lineHeight: 34, fontWeight: '700' as const },
  h2: { fontSize: 22, lineHeight: 28, fontWeight: '600' as const },
  h3: { fontSize: 18, lineHeight: 24, fontWeight: '600' as const },
  body: { fontSize: 15, lineHeight: 22, fontWeight: '400' as const },
  bodyMedium: { fontSize: 15, lineHeight: 22, fontWeight: '500' as const },
  bodySmall: { fontSize: 13, lineHeight: 18, fontWeight: '400' as const },
  caption: { fontSize: 11, lineHeight: 15, fontWeight: '500' as const },
  label: { fontSize: 14, lineHeight: 20, fontWeight: '600' as const },
} as const;
