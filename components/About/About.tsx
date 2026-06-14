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
        py: { xs: 3, md: 12 },
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
        <Box sx={{ flex: 1, height: { xs: '100%', md: '100%' } }}>
          <Box
            component="img"
            src="/assets/owner/colored.png"
            alt="Michal Studio Approach"
            sx={{
              width: '100%',
              maxWidth: { xs: '65%', md: 380 },
              height: 'auto',
              display: 'block',
              mx: { xs: 'auto', md:'none' },
              ml: { md: 22 },
              // ml: 'auto',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box sx={{ flex: 1.2, pt: { xs: 0, md: 5 } }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '4rem', md: '5.5rem' },
              fontStyle: 'italic',
              fontFamily: '-apple-system',
              color: PALETTE.inkBrown,
              mb: 6,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Behind <br />
            <Box
              component="span"
              sx={{
                fontStyle: 'italic',
                fontFamily: '-apple-system',
                fontWeight: 300,
                color: PALETTE.oliveBrown
              }}
            >
              the lens
            </Box>
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
            My name is Michal, and I am a photographer who believes that every image should tell a story. Through my photography, I strive to capture not only what is visible, but also the history, emotions, and unique atmosphere of each place and moment. My goal is to create authentic images that preserve the natural character of a scene and allow viewers to connect with its story on a deeper level.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
