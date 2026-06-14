'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PALETTE } from '@/theme/theme';

// Placeholder paths — swap these out once you add the real images
const HERO_PHOTOS = [
  {
    src: '/assets/photos/atmosphere/DSCF0135.jpg',
    // Large portrait – LEFT
    desktop: {
      width: '20vw',
      height: '25vw',
      top: '2%',
      left: '1%',
      zIndex: 2,
    },
    mobile: { show: true },
  },
  {
    src: '/assets/photos/atmosphere/IMG_8301.JPG',
    // Large portrait – CENTRE
    desktop: {
      width: '20vw',
      height: '25vw',
      left: '37%',
      zIndex: 2,
    },
    mobile: { show: false },
  },
  {
    src: '/assets/photos/outdoor/DSCF2219.jpg',
    // Large portrait – RIGHT
    desktop: {
      width: '20vw',
      height: '25vw',
      top: '2%',
      left: '75%',
      zIndex: 2,
    },
    mobile: { show: true },
  },

  // ── 2 smaller overlapping accents ────────────────────────────
  {
    src: '/assets/photos/atmosphere/DSCF1237.jpg',
    // Smaller – overlaps left & centre gap, bottom area
    desktop: {
      width: '20vw',
      height: '12vw',
      top: '5%',
      left: '22%',
      zIndex: 5,
    },
    mobile: { show: false },
  },
  {
    src: '/assets/photos/outdoor/IMG_8275.JPG',
    // Smaller – overlaps centre & right gap, top area
    desktop: {
      width: '18vw',
      height: '10vw',
      top: '44%',
      left: '56%',
      zIndex: 5,
    },
    mobile: { show: false },
  },
];

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
        pt: { xs: '100px', md: '60px' },
      }}
    >
      {/* ── Collage area ── */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          // desktop: tall enough to hold the collage, mobile: two-column grid
          height: { xs: 'auto', md: '70vh' },
          maxWidth: 1600,
          mx: 'auto',
          px: { xs: 3, md: 0 },
          mb: { xs: 6 },

          // Mobile: 2-column grid
          display: { xs: 'grid', md: 'block' },
          gridTemplateColumns: { xs: '1fr 1fr', md: 'none' },
          gap: { xs: 2, md: 0 },
        }}
      >
        {HERO_PHOTOS.map((photo, i) => (
          <Box
            key={i}
            component="img"
            src={photo.src}
            sx={{
              objectFit: 'cover',
              display: {
                xs: photo.mobile.show ? 'block' : 'none',
                md: 'block',
              },

              // ── Mobile styles (grid child) ──
              width: { xs: '100%', md: photo.desktop.width },
              height: { xs: '52vw', md: photo.desktop.height },

              // ── Desktop: absolute collage ──
              position: { xs: 'relative', md: 'absolute' },
              top: { xs: 'auto', md: photo.desktop.top },
              left: { xs: 'auto', md: photo.desktop.left },
            }}
          />
        ))}
      </Box>

      {/* ── Text below the collage ── */}
      <Box
        sx={{
          maxWidth: 1600,
          mx: 'auto',
          width: '100%',
          px: { xs: 3, md: 8, lg: 12 },
          mb: { xs: 5, md: 10 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem', lg: '6rem' },
            color: PALETTE.inkBrown,
            lineHeight: 1.1,
            mb: 5,
            mt: { xs: 0, md: '-8rem' },
            letterSpacing: '-0.02em',
            fontFamily: 'Segoe UI',
            fontStyle: 'italic',
            fontWeight: 400,
            textTransform: 'none',
          }}
        >
          Your love. Your legacy.
          <br />
          <Box
            component="span"
            sx={{
              fontStyle: 'italic',
              fontWeight: 300,
              color: PALETTE.oliveBrown,
            }}
          >
            Told through the lens.
          </Box>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, sm: 10 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              maxWidth: 420,
              fontSize: '1.05rem',
              color: PALETTE.oliveBrown,
              lineHeight: 1.8,
            }}
          >
            An editorial approach to photography. We capture the quiet moments,
            the natural light, and the timeless feeling of film. Unhurried,
            intentional, and deeply organic.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexShrink: 0 }}>
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
      </Box>
    </Box>
  );
}
