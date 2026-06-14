'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';

import { PALETTE } from '@/theme/theme';

export type CarouselImage = {
  src: string;
  alt?: string;
};

export type InfiniteCarouselProps = {
  images: CarouselImage[];
  onImageClick: (idx: number) => void;
};

export default function InfiniteCarousel({
  images,
  onImageClick,
}: InfiniteCarouselProps) {
  const totalImages = images.length;
  // Start at the first item of the middle copy
  const [currentIndex, setCurrentIndex] = useState(totalImages);
  const trackRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false);

  if (totalImages === 0) return null;

  // Triple the images: [copy1, original, copy2]
  const tripled = [...images, ...images, ...images];

  // Animate to a specific index (no transition)
  const jumpTo = useCallback((index: number) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = 'none';
    trackRef.current.style.transform = `translateX(calc(-${index} * (70vw + 12px) + 50vw - 35vw))`;
  }, []);

  // Animate to a specific index (with transition)
  const slideTo = useCallback((index: number) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)';
    trackRef.current.style.transform = `translateX(calc(-${index} * (70vw + 12px) + 50vw - 35vw))`;
  }, []);

  // Init position on mount (no animation)
  useEffect(() => {
    jumpTo(currentIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // After every slide, check boundaries and silently jump to the middle copy
  const handleTransitionEnd = useCallback(() => {
    if (isJumping.current) return;
    let next = currentIndex;
    if (currentIndex < totalImages) {
      // Went past the start — jump to matching item in middle copy
      next = currentIndex + totalImages;
    } else if (currentIndex >= totalImages * 2) {
      // Went past the end — jump to matching item in middle copy
      next = currentIndex - totalImages;
    }
    if (next !== currentIndex) {
      isJumping.current = true;
      setCurrentIndex(next);
      // Use rAF to ensure state update has flushed before we snap
      requestAnimationFrame(() => {
        jumpTo(next);
        requestAnimationFrame(() => {
          isJumping.current = false;
        });
      });
    }
  }, [currentIndex, totalImages, jumpTo]);

  // Slide whenever currentIndex changes (skip the boundary-jump ones)
  useEffect(() => {
    if (isJumping.current) return;
    slideTo(currentIndex);
  }, [currentIndex, slideTo]);

  const goTo = (delta: number) => {
    setCurrentIndex((prev) => prev + delta);
  };


  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? 1 : -1);
    }
    touchStartX.current = null;
  };

  return (
    <Box
      sx={{ width: '100%', position: 'relative', overflow: 'hidden', py: 3 }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Sliding track */}
      <Box
        ref={trackRef}
        onTransitionEnd={handleTransitionEnd}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          willChange: 'transform',
        }}
      >
        {tripled.map((img, idx) => {
          const originalIdx = idx % totalImages;
          const isActive = idx === currentIndex;

          return (
            <Box
              key={`${idx}-${img.src}`}
              onClick={() => {
                if (isActive) {
                  // onImageClick(originalIdx); // disabled: mobile tap does not open lightbox
                } else {
                  goTo(idx < currentIndex ? -1 : 1);
                }
              }}
              sx={{
                flex: '0 0 70vw',
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '4px',
                backgroundColor: PALETTE.parchmentDark,
                aspectRatio: '2/3',
                // Scale the active card up; neighbours stay full opacity, no blur
                transform: isActive ? 'scale(1)' : 'scale(0.82)',
                transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.45s ease',
                boxShadow: isActive
                  ? '0 20px 56px rgba(0,0,0,0.22)'
                  : '0 4px 12px rgba(0,0,0,0.06)',
                '& img': {
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              }}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.alt ?? `Slide ${originalIdx + 1}`}
                loading="lazy"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
