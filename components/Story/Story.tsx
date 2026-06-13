'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GrainIcon from '@mui/icons-material/Grain';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import PhotoCameraBackOutlinedIcon from '@mui/icons-material/PhotoCameraBackOutlined';
import NaturePeopleOutlinedIcon from '@mui/icons-material/NaturePeopleOutlined';
import { PALETTE } from '@/theme/theme';

const FEATURES = [
  {
    icon: <GrainIcon sx={{ fontSize: 36, color: PALETTE.softGold }} />,
    title: 'Film Grain & Texture',
    body: 'We preserve the natural imperfections of analog photography — grain, dust, and soft vignettes that give images their irreplaceable soul.',
  },
  {
    icon: <WbSunnyOutlinedIcon sx={{ fontSize: 36, color: PALETTE.softGold }} />,
    title: 'Golden Hour Light',
    body: 'Chasing the light at dusk and dawn. Soft, directional, and warm — the kind of light that turns ordinary scenes into timeless images.',
  },
  {
    icon: <PhotoCameraBackOutlinedIcon sx={{ fontSize: 36, color: PALETTE.softGold }} />,
    title: 'Analog Soul, Modern Quality',
    body: 'Shot on high-end digital cameras and edited to honour the film look. The resolution of the future, the heart of the past.',
  },
  {
    icon: <NaturePeopleOutlinedIcon sx={{ fontSize: 36, color: PALETTE.softGold }} />,
    title: 'Real Human Connection',
    body: 'People at their most unguarded. We create space for authenticity, then wait for the moment to reveal itself — never forced, always true.',
  },
];

export default function Story() {
  return (
    <Box
      id="story"
      component="section"
      sx={{
        position: 'relative',
        backgroundColor: PALETTE.filmBlack,
        py: { xs: 10, md: 16 },
        overflow: 'hidden',
      }}
    >
      {/* Subtle warm gradient accent */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            color: PALETTE.softGold,
            letterSpacing: '0.3em',
            fontSize: '0.7rem',
            display: 'block',
            textAlign: 'center',
            mb: 3,
          }}
        >
          The Philosophy
        </Typography>

        {/* Cinematic quote */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h2"
            component="blockquote"
            sx={{
              fontStyle: 'italic',
              color: PALETTE.cream,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.8rem' },
              lineHeight: 1.5,
              maxWidth: 820,
              mx: 'auto',
              mb: 4,
            }}
          >
            &ldquo;Inspired by analog film, quiet city corners,{' '}
            <Box component="span" sx={{ color: PALETTE.softGold }}>
              golden-hour light
            </Box>
            , and real human connection.&rdquo;
          </Typography>

          <Box
            sx={{
              width: 1,
              height: 60,
              borderLeft: `1px solid ${PALETTE.mediumBrown}`,
              mx: 'auto',
            }}
          />
        </Box>

        {/* Feature grid */}
        <Grid container spacing={{ xs: 5, md: 6 }}>
          {FEATURES.map((f) => (
            <Grid size={{ xs: 12, sm: 6 }} key={f.title}>
              <Stack
                direction="row"
                spacing={3}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  border: `1px solid ${PALETTE.mediumBrown}`,
                  backgroundColor: 'rgba(44,31,20,0.35)',
                  transition: 'border-color 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    borderColor: PALETTE.softGold,
                    backgroundColor: 'rgba(44,31,20,0.6)',
                  },
                }}
              >
                <Box sx={{ flexShrink: 0, mt: 0.5 }}>{f.icon}</Box>
                <Box>
                  <Typography variant="h6" sx={{ color: PALETTE.cream, fontSize: '1rem', mb: 1, letterSpacing: '0.02em' }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: PALETTE.warmGray, lineHeight: 1.85 }}>
                    {f.body}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Additional text block */}
        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            background: `linear-gradient(135deg, rgba(44,31,20,0.5) 0%, rgba(15,10,6,0.4) 100%)`,
            border: `1px solid ${PALETTE.mediumBrown}`,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: PALETTE.beige,
              maxWidth: 680,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 2,
            }}
          >
            Every image in this portfolio was shot by Michal with a high-resolution
            digital camera and edited with a film-inspired workflow. Grain is
            preserved. Shadows are respected. Warmth is never manufactured — only
            found and captured in the world as it exists.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
