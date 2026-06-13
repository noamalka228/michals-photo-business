'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PALETTE } from '@/theme/theme';

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  startIndex: number;
  open: boolean;
  onClose: () => void;
}

export default function Lightbox({ images, startIndex, open, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Sync startIndex when lightbox opens
  useEffect(() => {
    if (open) setCurrent(startIndex);
  }, [open, startIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, prev, next, onClose]);

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = (touchStartX.current ?? 0) - (touchEndX.current ?? 0);
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev();
    }
  };

  if (!images.length) return null;

  const img = images[current];

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-label="Image lightbox"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(10, 6, 3, 0.95)',
            backdropFilter: 'blur(6px)',
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          outline: 'none',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close button */}
        <IconButton
          id="lightbox-close-btn"
          aria-label="Close lightbox"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: { xs: 12, md: 24 },
            right: { xs: 12, md: 24 },
            color: PALETTE.cream,
            backgroundColor: 'rgba(44,31,20,0.7)',
            zIndex: 10,
            '&:hover': { backgroundColor: 'rgba(201,168,76,0.3)' },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Image counter */}
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            top: { xs: 16, md: 28 },
            left: '50%',
            transform: 'translateX(-50%)',
            color: PALETTE.warmGray,
            letterSpacing: '0.15em',
            fontSize: '0.75rem',
            zIndex: 10,
          }}
        >
          {current + 1} / {images.length}
        </Typography>

        {/* Prev arrow */}
        <IconButton
          id="lightbox-prev-btn"
          aria-label="Previous image"
          onClick={prev}
          sx={{
            position: 'absolute',
            left: { xs: 8, md: 32 },
            top: '50%',
            transform: 'translateY(-50%)',
            color: PALETTE.cream,
            backgroundColor: 'rgba(44,31,20,0.7)',
            zIndex: 10,
            '&:hover': { backgroundColor: 'rgba(201,168,76,0.3)', transform: 'translateY(-50%) scale(1.1)' },
            transition: 'all 0.2s ease',
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Main image */}
        <Box
          sx={{
            maxWidth: '90vw',
            maxHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            key={img.src}
            src={img.src}
            alt={img.alt}
            sx={{
              maxWidth: '90vw',
              maxHeight: '82vh',
              objectFit: 'contain',
              borderRadius: 1,
              boxShadow: '0 20px 80px rgba(0,0,0,0.8)',
              animation: 'fadeIn 0.25s ease',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'scale(0.97)' },
                to: { opacity: 1, transform: 'scale(1)' },
              },
            }}
          />
        </Box>

        {/* Alt text caption */}
        <Typography
          variant="caption"
          sx={{
            mt: 2,
            color: PALETTE.dustyGray,
            letterSpacing: '0.08em',
            fontSize: '0.7rem',
            textAlign: 'center',
            px: 2,
          }}
        >
          {img.alt}
        </Typography>

        {/* Next arrow */}
        <IconButton
          id="lightbox-next-btn"
          aria-label="Next image"
          onClick={next}
          sx={{
            position: 'absolute',
            right: { xs: 8, md: 32 },
            top: '50%',
            transform: 'translateY(-50%)',
            color: PALETTE.cream,
            backgroundColor: 'rgba(44,31,20,0.7)',
            zIndex: 10,
            '&:hover': { backgroundColor: 'rgba(201,168,76,0.3)', transform: 'translateY(-50%) scale(1.1)' },
            transition: 'all 0.2s ease',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Modal>
  );
}
