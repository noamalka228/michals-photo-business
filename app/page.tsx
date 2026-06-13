import React from 'react';
import Box from '@mui/material/Box';
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
        background: `linear-gradient(90deg, transparent, ${PALETTE.mediumBrown}, transparent)`,
      }}
    />
  );
}

export default function HomePage() {
  return (
    <Box component="main" sx={{ backgroundColor: PALETTE.filmBlack }}>
      {/* Fixed navigation */}
      <Navbar />

      {/* 1. Hero — full-screen landing */}
      <Hero />

      {/* 2. About — our story & philosophy */}
      <About />

      {/* 3. Gallery sections — one per category in GALLERY_SECTIONS */}
      {/*
        HOW TO ADD A NEW GALLERY SECTION:
        1. Add a new entry to /data/galleries.ts
        2. Create the folder /public/assets/photos/<your-section-id>/
        3. Drop your images in that folder and update the `images` array
        That's it — the new section will automatically appear here.
      */}
      <Box id="gallery" component="section">
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
