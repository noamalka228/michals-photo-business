'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PALETTE } from '@/theme/theme';

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        backgroundColor: PALETTE.parchment,
        py: { xs: 12, md: 24 },
        px: { xs: 3, md: 8, lg: 12 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          maxWidth: 1400,
          mx: 'auto',
          gap: { xs: 8, md: 15 },
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ flex: 1, pt: { md: 15 }, w: '100%' }}>
          <Box
            component="img"
            src="/assets/photos/portraits/photo-1.jpg"
            alt="Michal Studio Approach"
            sx={{
              width: '100%',
              maxWidth: { xs: '100%', md: 540 },
              height: 'auto',
              display: 'block',
              ml: 'auto',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box sx={{ flex: 1.2, pt: { xs: 0, md: 5 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem' },
              color: PALETTE.inkBrown,
              mb: 6,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            a gentle <br/>
            <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 300, color: PALETTE.oliveBrown }}>approach</Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: PALETTE.inkBrown,
              maxWidth: 480,
              mb: 5,
              fontSize: '1.15rem',
              lineHeight: 1.8,
            }}
          >
            We believe that the most beautiful moments are the honest ones. There is no manufacturing of emotion here—only the quiet observation of light, connection, and the poetry of the everyday.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: PALETTE.oliveBrown,
              maxWidth: 480,
              fontSize: '1.15rem',
              lineHeight: 1.8,
            }}
          >
            Every frame is captured with a deep appreciation for the unhurried analog process. We celebrate grain, softness, and the imperfect warmth that only true film aesthetics can provide.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
