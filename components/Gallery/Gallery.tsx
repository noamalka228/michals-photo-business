'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { PALETTE } from '@/theme/theme';
import Lightbox, { LightboxImage } from './Lightbox';
import type { GallerySection } from '@/data/galleries';

interface GalleryProps {
  section: GallerySection;
  /** Global flat image list for cross-section lightbox (optional) */
  allImages?: LightboxImage[];
  allImagesOffset?: number;
}

export default function Gallery({ section, allImages, allImagesOffset = 0 }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Build this section's image list for the lightbox
  const sectionImages: LightboxImage[] = section.images.map((img) => ({
    src: `${section.folder}/${img.filename}`,
    alt: img.alt,
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
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: section.id === 'portraits' || section.id === 'events' || section.id === 'travel'
            ? PALETTE.filmBlack
            : PALETTE.darkBrown,
        }}
      >
        <Container maxWidth="xl">
          {/* Section header */}
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="overline"
              sx={{
                color: PALETTE.softGold,
                letterSpacing: '0.3em',
                fontSize: '0.68rem',
                display: 'block',
                mb: 1.5,
              }}
            >
              {section.id.replace('-', ' ')} · Gallery
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: PALETTE.cream,
                fontSize: { xs: '1.8rem', md: '2.6rem' },
                mb: 2,
              }}
            >
              {section.title}
            </Typography>
            <Divider
              sx={{ borderColor: PALETTE.mediumBrown, maxWidth: 60, mb: 2.5, borderBottomWidth: 2 }}
            />
            <Typography
              variant="body1"
              sx={{
                color: PALETTE.warmGray,
                maxWidth: 560,
                lineHeight: 1.85,
                fontSize: { xs: '0.95rem', md: '1rem' },
              }}
            >
              {section.description}
            </Typography>
          </Box>

          {/* ── Masonry / CSS columns grid ──────────────────────────── */}
          {/*
            ADDING MORE PHOTOS:
            Drop new images into /public/assets/photos/<section-id>/
            and add their filenames to data/galleries.ts under this section.
          */}
          <Box
            sx={{
              columns: { xs: 1, sm: 2, md: 3, lg: 4 },
              columnGap: { xs: 2, md: 3 },
              '& > *': { breakInside: 'avoid', mb: { xs: 2, md: 3 } },
            }}
          >
            {sectionImages.map((img, idx) => (
              <Box
                key={img.src}
                role="button"
                tabIndex={0}
                aria-label={`Open ${img.alt} in fullscreen`}
                id={`${section.id}-photo-${idx + 1}`}
                onClick={() => openLightbox(idx)}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: 1,
                  display: 'block',
                  '&:hover .photo-overlay': { opacity: 1 },
                  '&:hover img': { transform: 'scale(1.05)' },
                  '&:focus-visible': {
                    outline: `2px solid ${PALETTE.softGold}`,
                    outlineOffset: 3,
                  },
                }}
              >
                <Box
                  component="img"
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'saturate(0.82) brightness(0.92)',
                    transition: 'transform 0.5s ease, filter 0.3s ease',
                    '&:hover': {
                      filter: 'saturate(1) brightness(1)',
                    },
                  }}
                />
                {/* Hover overlay */}
                <Box
                  className="photo-overlay"
                  aria-hidden="true"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(180deg, transparent 50%, rgba(15,10,6,0.7) 100%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 2,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: PALETTE.cream, letterSpacing: '0.08em', fontSize: '0.7rem' }}
                  >
                    {img.alt}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Lightbox
        images={sectionImages}
        startIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
