'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PALETTE } from '@/theme/theme';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ── Background image ───────────────────────────────────────────── */}
      {/*
        REPLACE HERO BACKGROUND:
        Swap out /assets/background/hero-bg.jpg with your own image.
        For best results use a wide landscape image (1920×1080 or larger).
      */}
      <Box
        component="img"
        src="/assets/background/hero-bg.jpg"
        alt="Vintage film photography background"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'brightness(0.65) saturate(0.85)',
        }}
      />

      {/* ── Multi-layer dark gradient overlay ──────────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              180deg,
              rgba(15,10,6,0.55) 0%,
              rgba(44,31,20,0.30) 40%,
              rgba(15,10,6,0.75) 100%
            )
          `,
        }}
      />

      {/* ── Film grain overlay ─────────────────────────────────────────── */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
          opacity: 0.45,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      />

      {/* ── Hero content ───────────────────────────────────────────────── */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          px: { xs: 3, sm: 4, md: 8 },
          maxWidth: 900,
          mx: 'auto',
        }}
      >
        {/* Eyebrow */}
        <Typography
          component="span"
          variant="overline"
          sx={{
            color: PALETTE.softGold,
            fontSize: { xs: '0.65rem', md: '0.75rem' },
            letterSpacing: '0.35em',
            display: 'block',
            mb: 3,
          }}
        >
          Michal Studio · Photography
        </Typography>

        {/* Main headline */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2.4rem', sm: '3.4rem', md: '5rem', lg: '5.8rem' },
            color: PALETTE.cream,
            lineHeight: 1.1,
            mb: 3,
            textShadow: '0 2px 30px rgba(0,0,0,0.6)',
          }}
        >
          Timeless Moments,{' '}
          <Box
            component="em"
            sx={{
              fontStyle: 'italic',
              color: PALETTE.softGold,
              display: { xs: 'inline', md: 'block' },
            }}
          >
            Captured on Film
          </Box>
        </Typography>

        {/* Sub-headline */}
        <Typography
          variant="body1"
          sx={{
            color: PALETTE.beige,
            fontSize: { xs: '1rem', md: '1.2rem' },
            maxWidth: 620,
            mx: 'auto',
            mb: 5,
            lineHeight: 1.9,
            opacity: 0.9,
          }}
        >
          Vintage-inspired photography with the clarity, depth, and detail of a
          high-end camera. Every frame a memory. Every memory, forever.
        </Typography>

        {/* CTA buttons — Box flex replaces Stack (MUI v9 compatible) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            id="hero-view-gallery-btn"
            variant="contained"
            size="large"
            onClick={() => scrollTo('#gallery')}
            sx={{ minWidth: 180 }}
          >
            View Gallery
          </Button>
          <Button
            id="hero-contact-btn"
            variant="outlined"
            size="large"
            onClick={() => scrollTo('#contact')}
            sx={{ minWidth: 180 }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* ── Scroll indicator ───────────────────────────────────────────── */}
      <Box
        component="button"
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to About section"
        sx={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(8px)' },
          },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: PALETTE.warmGray,
            letterSpacing: '0.2em',
            fontSize: '0.6rem',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: PALETTE.softGold, fontSize: 22 }} />
      </Box>
    </Box>
  );
}
