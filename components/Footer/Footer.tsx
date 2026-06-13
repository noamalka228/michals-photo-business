'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import InstagramIcon from '@mui/icons-material/Instagram';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { PALETTE } from '@/theme/theme';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        backgroundColor: PALETTE.filmBlack,
        borderTop: `1px solid ${PALETTE.mediumBrown}`,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Top row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Brand */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1.5,
                justifyContent: { xs: 'center', md: 'flex-start' },
                mb: 1.5,
              }}
            >
              <CameraAltOutlinedIcon sx={{ color: PALETTE.softGold, fontSize: 22 }} />
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  color: PALETTE.cream,
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  letterSpacing: '0.02em',
                }}
              >
                Michal Studio
              </Typography>
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: PALETTE.dustyGray,
                letterSpacing: '0.15em',
                fontSize: '0.65rem',
                display: 'block',
                fontStyle: 'italic',
              }}
            >
              Original photography. Vintage soul. Modern quality.
            </Typography>
          </Box>

          {/* Nav links */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {['#about', '#gallery', '#story', '#contact'].map((href) => (
              <Typography
                key={href}
                component="a"
                href={href}
                variant="caption"
                sx={{
                  color: PALETTE.warmGray,
                  textDecoration: 'none',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontSize: '0.65rem',
                  '&:hover': { color: PALETTE.softGold },
                  transition: 'color 0.2s',
                }}
              >
                {href.replace('#', '')}
              </Typography>
            ))}
          </Box>

          {/* Social */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <IconButton
              component="a"
              href="https://instagram.com/michal.studio" // ← Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Michal Studio on Instagram"
              sx={{
                color: PALETTE.warmGray,
                '&:hover': { color: PALETTE.softGold, backgroundColor: 'rgba(201,168,76,0.1)' },
                transition: 'color 0.2s',
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ borderColor: PALETTE.mediumBrown, mb: 4 }} />

        {/* Bottom row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: PALETTE.dustyGray, fontSize: '0.65rem', letterSpacing: '0.05em' }}
          >
            © {CURRENT_YEAR} Michal Studio. All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: PALETTE.dustyGray, fontSize: '0.6rem', letterSpacing: '0.05em' }}
          >
            All photographs are original works by Michal.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
