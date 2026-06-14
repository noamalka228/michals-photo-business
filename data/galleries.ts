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
    id: 'atmosphere',
    title: 'Atmosphere',
    description: 'Intimate, quiet, and intentional. Capturing the soft interplay of window light and shadow within enclosed spaces.',
    folder: '/assets/photos/atmosphere',
    images: [
      { filename: 'DSCF0135.jpg' },
      { filename: 'DSCF1237.jpg' },
      { filename: 'DSCF0719.jpg' },
      { filename: 'image6.jpeg' },
      { filename: 'DSCF0956.jpg' },
      { filename: 'IMG_8301.jpg' },
      { filename: 'DSCF3894.jpg' },
      { filename: 'DSCF1229.jpg' },
      { filename: 'image4.jpeg' },
      { filename: 'DSCF1219.jpg' },
      { filename: 'DSCF1227.jpg' },
      { filename: 'DSC03033.jpg' },
      { filename: 'DSCF1258.jpg' },
      { filename: 'DSCF1264.jpg' },
      { filename: 'DSCF1370.jpg' },
      { filename: 'DSCF3049.jpg' },
      { filename: 'DSCF3961.jpg' },
      { filename: 'DSCF4195.jpg' },
      { filename: 'DSCF0938.jpg' },
    ],
  },
  {
    id: 'outdoor',
    title: 'Outdoor',
    description: 'Embracing natural light, open skies, and the wild beauty of the environment. Every frame breathes with the landscape.',
    folder: '/assets/photos/outdoor',
    images: [
      { filename: 'DSCF2948.jpg' },
      { filename: 'DSCF2219.jpg' },
      { filename: 'IMG_8275.JPG' },
      { filename: 'IMG_9400.PNG' },
      { filename: 'DSCF1947.jpg' },
      { filename: 'IMG_9401.PNG' },
      { filename: 'DSCF0997.jpg' },
      { filename: 'DSC02723.JPG' },
      { filename: 'DSCF0165.jpg' },
      { filename: 'DSCF2008.jpg' },
      { filename: 'DSCF2009.jpg' },
      { filename: 'DSCF2053.jpg' },
      { filename: 'DSCF2399.jpg' },
      { filename: 'DSCF2939.jpg' },
      { filename: 'DSCF4134.jpg' },
      { filename: 'DSCF4307.jpg' },
      { filename: 'IMG_8290.JPG' },
      { filename: 'IMG_9405.PNG' },
      { filename: 'IMG_9406.PNG' },
      { filename: 'IMG_8257.JPG' },
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
