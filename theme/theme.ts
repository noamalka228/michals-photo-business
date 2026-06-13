'use client';

import { createTheme } from '@mui/material/styles';

// ─── Drifter Floral–inspired Colour Palette ───────────────────────────────────
// Light linen/parchment background, deep olive-brown text, minimal gold accents
export const PALETTE = {
  // Backgrounds
  parchment: 'rgba(234,228,217,0.97)',        // main page background — warm linen
  parchmentDark: 'rgba(224,218,207,0.97)',    // slightly deeper for section alternation
  // Text
  inkBrown: '#2E2E2E',         // primary dark text
  oliveBrown: '#4A4A4A',       // secondary text
  mutedTaupe: '#8A8A8A',       // captions, labels
  // Accents
  warmBlack: '#1A1A1A',        // footer, strong contrast areas
  ivoryWhite: '#FFFFFF',       // card backgrounds
  gold: '#9C8553',             // subtle accent only
  // Borders
  linen: '#EBE6DF',            // dividers
} as const;

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PALETTE.inkBrown,
      contrastText: PALETTE.parchment,
    },
    secondary: {
      main: PALETTE.gold,
      contrastText: PALETTE.parchment,
    },
    background: {
      default: PALETTE.parchment,
      paper: PALETTE.ivoryWhite,
    },
    text: {
      primary: PALETTE.inkBrown,
      secondary: PALETTE.oliveBrown,
      disabled: PALETTE.mutedTaupe,
    },
    divider: PALETTE.linen,
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"EB Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"EB Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '0.02em',
      textTransform: 'uppercase' as const,
    },
    h3: {
      fontFamily: '"EB Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '0.02em',
      textTransform: 'uppercase' as const,
    },
    h4: {
      fontFamily: '"EB Garamond", Georgia, serif',
      fontWeight: 400,
    },
    h5: {
      fontFamily: '"EB Garamond", Georgia, serif',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      letterSpacing: '0.18em',
      textTransform: 'uppercase' as const,
      fontSize: '0.7rem',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.85,
      letterSpacing: '0.02em',
      fontWeight: 300,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.75,
      fontWeight: 300,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      letterSpacing: '0.14em',
      textTransform: 'uppercase' as const,
      fontSize: '0.75rem',
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      letterSpacing: '0.2em',
      fontWeight: 400,
      fontSize: '0.65rem',
      textTransform: 'uppercase' as const,
    },
    caption: {
      fontFamily: '"EB Garamond", Georgia, serif',
      fontStyle: 'italic',
      letterSpacing: '0.02em',
      fontSize: '0.9rem',
    },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '14px 36px',
          transition: 'all 0.3s ease',
          letterSpacing: '0.14em',
        },
        contained: {
          backgroundColor: PALETTE.inkBrown,
          color: PALETTE.parchment,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: PALETTE.warmBlack,
            boxShadow: 'none',
          },
        },
        outlined: {
          borderColor: PALETTE.inkBrown,
          color: PALETTE.inkBrown,
          borderWidth: 1,
          '&:hover': {
            backgroundColor: PALETTE.inkBrown,
            color: PALETTE.parchment,
            borderColor: PALETTE.inkBrown,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            '& fieldset': { borderColor: PALETTE.linen },
            '&:hover fieldset': { borderColor: PALETTE.oliveBrown },
            '&.Mui-focused fieldset': { borderColor: PALETTE.inkBrown },
          },
          '& .MuiInputLabel-root': { color: PALETTE.mutedTaupe },
          '& .MuiInputLabel-root.Mui-focused': { color: PALETTE.inkBrown },
          '& .MuiOutlinedInput-input': { color: PALETTE.inkBrown },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: PALETTE.linen },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none', boxShadow: 'none' },
      },
    },
  },
});

export default theme;
