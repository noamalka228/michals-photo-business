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

  useEffect(() => {
    if (open) setCurrent(startIndex);
  }, [open, startIndex]);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

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

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = (touchStartX.current ?? 0) - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
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
        backdrop: { sx: { backgroundColor: 'rgba(26,23,16,0.92)', backdropFilter: 'blur(4px)' } },
      }}
    >
      <Box
        sx={{ position: 'relative', outline: 'none', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close */}
        <IconButton
          id="lightbox-close-btn"
          aria-label="Close"
          onClick={onClose}
          sx={{ position: 'absolute', top: { xs: 12, md: 24 }, right: { xs: 12, md: 24 }, color: '#EAE4D9', zIndex: 10, '&:hover': { backgroundColor: 'rgba(234,228,217,0.15)' } }}
        >
          <CloseIcon />
        </IconButton>

        {/* Counter */}
        <Typography variant="overline" sx={{ position: 'absolute', top: { xs: 18, md: 30 }, left: '50%', transform: 'translateX(-50%)', color: '#B0A898', letterSpacing: '0.2em', fontSize: '0.65rem', zIndex: 10 }}>
          {current + 1} / {images.length}
        </Typography>

        {/* Prev */}
        <IconButton id="lightbox-prev-btn" aria-label="Previous" onClick={prev}
          sx={{ position: 'absolute', left: { xs: 8, md: 32 }, top: '50%', transform: 'translateY(-50%)', color: '#EAE4D9', zIndex: 10, '&:hover': { backgroundColor: 'rgba(234,228,217,0.12)', transform: 'translateY(-50%) scale(1.1)' }, transition: 'all 0.2s' }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Image */}
        <Box sx={{ maxWidth: '90vw', maxHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            component="img"
            key={`${img.src}-${current}`}
            src={img.src}
            sx={{
              maxWidth: '90vw',
              maxHeight: '82vh',
              objectFit: 'contain',
              display: 'block',
              boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
              animation: 'fadeIn 0.2s ease',
              '@keyframes fadeIn': { from: { opacity: 0, transform: 'scale(0.98)' }, to: { opacity: 1, transform: 'scale(1)' } },
            }}
          />
        </Box>

        {/* Next */}
        <IconButton id="lightbox-next-btn" aria-label="Next" onClick={next}
          sx={{ position: 'absolute', right: { xs: 8, md: 32 }, top: '50%', transform: 'translateY(-50%)', color: '#EAE4D9', zIndex: 10, '&:hover': { backgroundColor: 'rgba(234,228,217,0.12)', transform: 'translateY(-50%) scale(1.1)' }, transition: 'all 0.2s' }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Modal>
  );
}
