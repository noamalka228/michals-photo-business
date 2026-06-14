import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Gallery from '@/components/Gallery/Gallery';
import Story from '@/components/Story/Story';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { GALLERY_SECTIONS } from '@/data/galleries';
import { PALETTE } from '@/theme/theme';

// ─── Gallery section divider ────────────────────────────────────────────────
// A thin film-strip style separator between gallery sections
function GallerySectionDivider() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        height: 1,
        background: `linear-gradient(90deg, transparent, ${PALETTE.linen}, transparent)`,
      }}
    />
  );
}

export default function HomePage() {
  return (
    <Box component="main" sx={{ backgroundColor: PALETTE.parchment }}>
      {/* Fixed navigation */}
      <Navbar />

      {/* 1. Hero — full-screen landing */}
      <Hero />

      {/* 2. About — our story & philosophy */}
      <About />

      {/* 3. Portfolio sections */}
      <Box component="section" sx={{ py: 20 }}>
        {/* New Portfolio Title */}
        <Box
          id="portfolio"
          sx={{
            position: 'relative',
            pt: { xs: 20, md: 32 },
            pb: { xs: 20, md: 32 },
            textAlign: 'center',
            backgroundImage: 'url("/assets/photos/atmosphere/DSCF0135.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(26,23,16,0.3)',
              zIndex: 0,
            }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              position: 'relative',
              zIndex: 1,
              fontFamily: '"EB Garamond", serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: '#EAE4D9',
              textTransform: 'none',
              letterSpacing: '0.02em',
            }}
          >
            A peek to the portfolio
          </Typography>
        </Box>

        {GALLERY_SECTIONS.map((section, idx) => (
          <React.Fragment key={section.id}>
            <Gallery section={section} />
            {idx < GALLERY_SECTIONS.length - 1 && <GallerySectionDivider />}
          </React.Fragment>
        ))}
      </Box>

      {/* 4. Story / Style — brand philosophy */}
      <Story />

      {/* 5. Contact — form + contact details */}
      <Contact />

      {/* 6. Footer */}
      <Footer />
    </Box>
  );
}
