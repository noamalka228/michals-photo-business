'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { PALETTE } from '@/theme/theme';

const PILLARS = [
  {
    icon: <CameraAltOutlinedIcon sx={{ color: PALETTE.softGold, fontSize: 30 }} />,
    title: 'Original Work',
    body: 'Every photograph is shot by Michal — never stock, never sourced. Each image is a firsthand encounter with light, life, and the world.',
  },
  {
    icon: <AutoAwesomeOutlinedIcon sx={{ color: PALETTE.softGold, fontSize: 30 }} />,
    title: 'Film-Inspired Vision',
    body: 'Inspired by the warmth of 35mm analog film — grain, texture, imperfection, and soul baked into every frame.',
  },
  {
    icon: <FavoriteBorderIcon sx={{ color: PALETTE.softGold, fontSize: 30 }} />,
    title: 'Emotional Storytelling',
    body: 'Photography that moves you. We chase atmosphere, natural light, and the quiet gestures that make a moment irreplaceable.',
  },
];

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        backgroundColor: PALETTE.darkBrown,
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background accent */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        {/* Section label */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{ color: PALETTE.softGold, letterSpacing: '0.3em', fontSize: '0.7rem', display: 'block', mb: 2 }}
          >
            Our Story
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: PALETTE.cream,
              fontSize: { xs: '2rem', md: '3rem' },
              maxWidth: 580,
              mx: 'auto',
              lineHeight: 1.25,
            }}
          >
            We Create Photographs That Feel Like{' '}
            <Box component="em" sx={{ color: PALETTE.softGold }}>
              Memories
            </Box>
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'center' }}>
          {/* Left: text content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              {/* Gold left border accent */}
              <Box
                sx={{
                  position: 'absolute',
                  left: -20,
                  top: 0,
                  bottom: 0,
                  width: 3,
                  background: `linear-gradient(180deg, ${PALETTE.softGold}, transparent)`,
                  borderRadius: 2,
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  color: PALETTE.beige,
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  mb: 3,
                  lineHeight: 2,
                }}
              >
                I am Michal — a photographer who believes that the best images
                are never planned. They emerge from stillness, from presence, from
                the willingness to wait for the right light and the right moment.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: PALETTE.warmGray, mb: 3, lineHeight: 1.9 }}
              >
                Every photograph I take is original — shot on high-quality camera
                equipment and edited with an eye trained on classic film
                aesthetics. I preserve grain, warmth, shadow, and natural tones,
                because life looks best when it isn&apos;t over-corrected.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: PALETTE.warmGray, lineHeight: 1.9 }}
              >
                My work spans portraits, street scenes, events, editorial, and
                travel. What ties it all together is a single obsession:
                capturing atmosphere. Not just what something looks like — but
                how it{' '}
                <Box component="em" sx={{ color: PALETTE.cream, fontStyle: 'italic' }}>
                  feels
                </Box>
                .
              </Typography>

              <Divider sx={{ my: 4, borderColor: PALETTE.mediumBrown, maxWidth: 200 }} />

              <Typography
                variant="h5"
                component="blockquote"
                sx={{
                  fontStyle: 'italic',
                  color: PALETTE.softGold,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6,
                }}
              >
                &ldquo;Warm, imperfect, emotional, and timeless — that&apos;s the goal
                of every frame.&rdquo;
              </Typography>
            </Box>
          </Grid>

          {/* Right: decorative image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: -8,
                  border: `1px solid ${PALETTE.mediumBrown}`,
                  borderRadius: 2,
                  zIndex: 0,
                },
              }}
            >
              {/*
                ABOUT IMAGE:
                Replace /assets/background/hero-bg.jpg with your own about/profile photo.
              */}
              <Box
                component="img"
                src="/assets/background/hero-bg.jpg"
                alt="Michal in the field — behind the lens"
                loading="lazy"
                sx={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                  borderRadius: 1,
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'saturate(0.8) brightness(0.9)',
                  transition: 'filter 0.4s ease',
                  '&:hover': { filter: 'saturate(1) brightness(1)' },
                }}
              />
              {/* Film-strip corner accent */}
              <Box
                aria-hidden="true"
                sx={{
                  position: 'absolute',
                  bottom: -16,
                  right: -16,
                  width: 80,
                  height: 80,
                  border: `2px solid ${PALETTE.softGold}`,
                  borderRadius: 1,
                  zIndex: 0,
                  opacity: 0.4,
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Pillars */}
        <Grid container spacing={4} sx={{ mt: { xs: 8, md: 12 } }}>
          {PILLARS.map((p) => (
            <Grid size={{ xs: 12, md: 4 }} key={p.title}>
              <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  {p.icon}
                </Box>
                <Typography variant="h6" sx={{ color: PALETTE.cream, fontSize: '1rem', letterSpacing: '0.03em' }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" sx={{ color: PALETTE.warmGray, lineHeight: 1.8 }}>
                  {p.body}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
