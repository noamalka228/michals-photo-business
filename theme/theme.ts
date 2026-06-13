'use client';

import { createTheme } from '@mui/material/styles';

// ─── Vintage Film Colour Palette ──────────────────────────────────────────────
export const PALETTE = {
  cream: '#F5EFE0',
  beige: '#E8D9C0',
  warmGray: '#C4B49A',
  darkBrown: '#2C1F14',
  mediumBrown: '#4A3728',
  softGold: '#C9A84C',
  fadedOrange: '#D4813A',
  dustyGray: '#7A7065',
  filmBlack: '#0F0A06',
} as const;

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: PALETTE.softGold,
      light: '#E2C270',
      dark: '#A8882E',
      contrastText: PALETTE.filmBlack,
    },
    secondary: {
      main: PALETTE.fadedOrange,
      light: '#E89B5C',
      dark: '#B0611C',
      contrastText: PALETTE.cream,
    },
    background: {
      default: PALETTE.filmBlack,
      paper: PALETTE.darkBrown,
    },
    text: {
      primary: PALETTE.cream,
      secondary: PALETTE.warmGray,
      disabled: PALETTE.dustyGray,
    },
    divider: PALETTE.mediumBrown,
  },
  typography: {
    // Playfair Display for headings, Lato for body (loaded in layout.tsx via Google Fonts link)
    fontFamily: '"Lato", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Lato", "Helvetica Neue", Arial, sans-serif',
      lineHeight: 1.8,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: '"Lato", "Helvetica Neue", Arial, sans-serif',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: '"Lato", "Helvetica Neue", Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
    overline: {
      fontFamily: '"Lato", "Helvetica Neue", Arial, sans-serif',
      letterSpacing: '0.2em',
      fontWeight: 700,
    },
    caption: {
      fontFamily: '"Lato", "Helvetica Neue", Arial, sans-serif',
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '12px 32px',
          transition: 'all 0.3s ease',
        },
        contained: {
          background: `linear-gradient(135deg, ${PALETTE.softGold} 0%, ${PALETTE.fadedOrange} 100%)`,
          color: PALETTE.filmBlack,
          boxShadow: `0 4px 20px rgba(201, 168, 76, 0.35)`,
          '&:hover': {
            background: `linear-gradient(135deg, #E2C270 0%, #E89B5C 100%)`,
            boxShadow: `0 6px 28px rgba(201, 168, 76, 0.5)`,
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderColor: PALETTE.softGold,
          color: PALETTE.softGold,
          borderWidth: 1.5,
          '&:hover': {
            borderColor: PALETTE.cream,
            color: PALETTE.cream,
            backgroundColor: 'rgba(201, 168, 76, 0.08)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: 'rgba(74, 55, 40, 0.4)',
            '& fieldset': { borderColor: PALETTE.mediumBrown },
            '&:hover fieldset': { borderColor: PALETTE.warmGray },
            '&.Mui-focused fieldset': { borderColor: PALETTE.softGold },
          },
          '& .MuiInputLabel-root': { color: PALETTE.warmGray },
          '& .MuiInputLabel-root.Mui-focused': { color: PALETTE.softGold },
          '& .MuiOutlinedInput-input': { color: PALETTE.cream },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: PALETTE.mediumBrown,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
