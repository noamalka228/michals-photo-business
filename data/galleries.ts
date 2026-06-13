export interface GalleryImage {
  filename: string;
}

export interface GallerySection {
  id: string;
  title: string;
  description: string;
  folder: string;
  images: GalleryImage[];
}

export const GALLERY_SECTIONS: GallerySection[] = [
  {
    id: 'outdoor',
    title: 'Outdoor',
    description: 'Embracing natural light, open skies, and the wild beauty of the environment. Every frame breathes with the landscape.',
    folder: '/assets/photos/outdoor',
    images: [
      { filename: 'photo-1.jpg' },
      { filename: 'photo-2.jpg' },
      { filename: 'photo-3.jpg' },
      { filename: 'photo-4.jpg' },
      { filename: 'photo-5.jpg' },
    ],
  },
  {
    id: 'indoor',
    title: 'Indoor',
    description: 'Intimate, quiet, and intentional. Capturing the soft interplay of window light and shadow within enclosed spaces.',
    folder: '/assets/photos/indoor',
    images: [
      { filename: 'photo-1.jpg' },
      { filename: 'photo-2.jpg' },
      { filename: 'photo-3.jpg' },
      { filename: 'photo-4.jpg' },
      { filename: 'photo-5.jpg' },
    ],
  },
  {
    id: 'love-stories',
    title: 'Love Stories',
    description: 'Honest connections, gentle touches, and shared glances. Documenting romance with an unhurried, editorial eye.',
    folder: '/assets/photos/love-stories',
    images: [
      { filename: 'DSCF4345.jpg' },
      { filename: 'DSCF4322.jpg' },
      { filename: 'DSCF4304.jpg' },
      { filename: 'DSCF4305.jpg' },
      { filename: 'DSCF4319.jpg' },
      { filename: 'DSCF4328.jpg' },
      { filename: 'DSCF4349.jpg' },
    ],
  },
];
