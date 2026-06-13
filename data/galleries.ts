// ─────────────────────────────────────────────────────────────────────────────
//  Gallery Data Configuration
//  To add a new gallery section:
//    1. Add a new object to GALLERY_SECTIONS below.
//    2. Create the folder: /public/assets/photos/<your-folder-name>/
//    3. Drop your images in that folder and list their filenames in `images[]`.
// ─────────────────────────────────────────────────────────────────────────────

export interface GalleryImage {
  filename: string;
  alt: string;
}

export interface GallerySection {
  id: string;
  title: string;
  description: string;
  /** Relative to /public — e.g. '/assets/photos/portraits' */
  folder: string;
  images: GalleryImage[];
}

export const GALLERY_SECTIONS: GallerySection[] = [
  {
    id: 'portraits',
    title: 'Portraits',
    description:
      'Every face holds a universe. These portraits are quiet conversations — intimate, honest, and unhurried. Captured in natural light with a film-inspired eye for warmth and texture.',
    folder: '/assets/photos/portraits',
    images: [
      { filename: 'photo-1.jpg', alt: 'Portrait in warm natural light' },
      { filename: 'photo-2.jpg', alt: 'Candid portrait with golden tones' },
      { filename: 'photo-3.jpg', alt: 'Thoughtful close-up portrait' },
      // ↑ Add more images here: { filename: 'photo-4.jpg', alt: 'Description' }
    ],
  },
  {
    id: 'street',
    title: 'Street Photography',
    description:
      'The city speaks in fleeting instants. Street photography that finds beauty in the ordinary — rain-soaked pavements, long shadows, and the quiet poetry of urban life.',
    folder: '/assets/photos/street',
    images: [
      { filename: 'photo-1.jpg', alt: 'Golden hour on cobblestone street' },
      { filename: 'photo-2.jpg', alt: 'Rain reflections in the city' },
      { filename: 'photo-3.jpg', alt: 'Silhouette in narrow alleyway' },
    ],
  },
  {
    id: 'events',
    title: 'Events',
    description:
      'Celebrations caught in their truest form. From intimate gatherings to grand occasions, these images preserve the laughter, the tears, and everything in between.',
    folder: '/assets/photos/events',
    images: [
      { filename: 'photo-1.jpg', alt: 'Candlelit evening gathering' },
      { filename: 'photo-2.jpg', alt: 'Joyful celebration moment' },
      { filename: 'photo-3.jpg', alt: 'Warm bokeh evening event' },
    ],
  },
  {
    id: 'editorial',
    title: 'Editorial & Lifestyle',
    description:
      'Stillness made visible. Editorial work that blurs the line between art and everyday life — objects, light, and texture arranged to tell stories without words.',
    folder: '/assets/photos/editorial',
    images: [
      { filename: 'photo-1.jpg', alt: 'Morning coffee in warm light' },
      { filename: 'photo-2.jpg', alt: 'Hands holding a book in a cafe' },
      { filename: 'photo-3.jpg', alt: 'Sunlight through linen curtains' },
    ],
  },
  {
    id: 'travel',
    title: 'Travel & Moments',
    description:
      'Places remembered not just as they looked, but as they felt. Travel photography that captures the soul of a destination — its light, its silence, its character.',
    folder: '/assets/photos/travel',
    images: [
      { filename: 'photo-1.jpg', alt: 'Mountain landscape at golden hour' },
      { filename: 'photo-2.jpg', alt: 'Seaside town in afternoon light' },
      { filename: 'photo-3.jpg', alt: 'Ancient architecture in soft glow' },
    ],
  },
];
