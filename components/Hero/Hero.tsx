'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
        backgroundColor: PALETTE.parchment,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        pt: { xs: '120px', md: '160px' },
        pb: { xs: 10, md: 20 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          maxWidth: 1600,
          mx: 'auto',
          width: '100%',
          px: { xs: 3, md: 8, lg: 12 },
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* Left side text */}
        <Box sx={{ flex: 1, position: 'relative', zIndex: 2, order: { xs: 2, md: 1 } }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem', lg: '8.5rem' },
              color: PALETTE.inkBrown,
              lineHeight: 0.9,
              mb: 6,
              letterSpacing: '-0.02em',
            }}
          >
            michal studio<br />
            <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 300, color: PALETTE.oliveBrown }}>
              photography
            </Box>
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              maxWidth: 420,
              fontSize: '1.05rem',
              color: PALETTE.oliveBrown,
              mb: 6,
              lineHeight: 1.8,
            }}
          >
            An editorial approach to photography. We capture the quiet moments, the natural light, and the timeless feeling of film. Unhurried, intentional, and deeply organic.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Box
              component="button"
              onClick={() => scrollTo('#portfolio')}
              sx={{
                background: 'none',
                border: 'none',
                borderBottom: `1px solid ${PALETTE.inkBrown}`,
                padding: '0 0 4px 0',
                cursor: 'pointer',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'lowercase',
                color: PALETTE.inkBrown,
                transition: 'opacity 0.2s',
                '&:hover': { opacity: 0.6 },
              }}
            >
              explore portfolio
            </Box>
            <Box
              component="button"
              onClick={() => scrollTo('#contact')}
              sx={{
                background: 'none',
                border: 'none',
                borderBottom: `1px solid ${PALETTE.inkBrown}`,
                padding: '0 0 4px 0',
                cursor: 'pointer',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'lowercase',
                color: PALETTE.inkBrown,
                transition: 'opacity 0.2s',
                '&:hover': { opacity: 0.6 },
              }}
            >
              inquire
            </Box>
          </Box>
        </Box>

        {/* Right side image */}
        <Box sx={{ flex: 1.1, width: '100%', order: { xs: 1, md: 2 } }}>
          <Box
            component="img"
            src="/assets/background/hero-bg.jpg"
            alt="Michal Studio Editorial"
            sx={{
              width: '100%',
              height: { xs: '65vh', md: '85vh' },
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
