'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Lightbox, { LightboxImage } from './Lightbox';
import type { GallerySection } from '@/data/galleries';
import { PALETTE } from '@/theme/theme';

interface GalleryProps {
  section: GallerySection;
}

export default function Gallery({ section }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images: LightboxImage[] = section.images.map((img) => ({
    src: `${section.folder}/${img.filename}`,
  }));

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      <Box
        id={section.id}
        component="section"
        sx={{ backgroundColor: PALETTE.parchment, py: { xs: 8, md: 16 }, px: { xs: 0, md: 8, lg: 12 } }}
      >
        <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
          {/* Section header */}
          <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center', px: { xs: 3, md: 0 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                color: PALETTE.inkBrown,
                fontStyle: 'italic',
                mb: 3,
                textTransform: 'lowercase',
                fontWeight: 400,
              }}
            >
              {section.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: PALETTE.oliveBrown,
                maxWidth: 500,
                mx: 'auto',
                fontSize: '1.05rem',
              }}
            >
              {section.description}
            </Typography>
          </Box>

          {/* Clean Grid / Mobile Carousel */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'grid' },
              gridTemplateColumns: { md: 'repeat(3, 1fr)' },
              gap: { xs: 2, md: 8 },
              alignItems: 'center',
              overflowX: { xs: 'auto', md: 'visible' },
              scrollSnapType: { xs: 'x mandatory', md: 'none' },
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
              px: { xs: '15vw', md: 0 },
            }}
          >
            {images.slice(0, 6).map((img, idx) => (
              <Box
                key={idx}
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(idx)}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
                sx={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  aspectRatio: idx % 2 === 0 ? '3/4' : '4/5',
                  backgroundColor: PALETTE.parchmentDark,
                  flex: { xs: '0 0 70vw', md: 'unset' },
                  scrollSnapAlign: { xs: 'center', md: 'none' },
                  '& img': {
                    transition: 'transform 0.6s ease',
                  },
                  '&:hover img': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={img.src}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Lightbox
        images={images}
        startIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
