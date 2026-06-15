'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PALETTE } from '@/theme/theme';

export default function Story() {
  return (
    <Box id="story" component="section" sx={{ backgroundColor: PALETTE.parchment, py: { xs: 15, md: 12 }, px: { xs: 3, md: 8 } }}>
      <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: '"EB Garamond", serif',
            fontStyle: 'italic',
            fontWeight: 400,
            textTransform: 'none',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            color: PALETTE.inkBrown,
            lineHeight: 1.4,
            mb: 8,
            letterSpacing: '0.01em',
          }}
        >
          Telling your story.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 1, height: 80, backgroundColor: PALETTE.inkBrown, mb: 4 }} />
          <Image
            src="/assets/logo/app-logo-no-bg.png"
            alt="Kanta Photography logo"
            width={140}
            height={48}
            style={{ objectFit: 'contain', height: '48px', width: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  );
}
