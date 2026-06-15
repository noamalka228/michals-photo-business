'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PALETTE } from '@/theme/theme';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        backgroundColor: PALETTE.parchment,
        borderTop: `1px solid ${PALETTE.linen}`,
        py: { xs: 8, md: 10 },
        px: { xs: 4, md: 8 },
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' }, gap: 6 }}>

        {/* Left side: Bio */}
        <Box sx={{ maxWidth: 360, textAlign: { xs: 'center', md: 'left' } }}>
          <Image
            src="/assets/logo/app-logo-no-bg.png"
            alt="Kanta Photography logo"
            width={140}
            height={48}
            style={{ objectFit: 'contain', height: '48px', width: 'auto', marginBottom: '12px' }}
          />
          <Typography variant="body2" sx={{ color: PALETTE.oliveBrown, lineHeight: 1.8 }}>
            An independent photographer creating artful, film-inspired images for portraits, events, and intimate moments.
          </Typography>
        </Box>

        {/* Right side: Links and Back to top */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' }, gap: 4 }}>
          <Box
            component="button"
            onClick={scrollToTop}
            sx={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: PALETTE.mutedTaupe,
              transition: 'color 0.2s',
              '&:hover': { color: PALETTE.inkBrown },
            }}
          >
            back to top ↑
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
