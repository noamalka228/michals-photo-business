import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Michal Studio — Vintage Film Photography',
  description:
    'Original photography by Michal. Vintage-inspired photography with the clarity, depth, and detail of a high-end camera. Portraits, street, events, editorial, and travel.',
  keywords: [
    'photography',
    'vintage photography',
    'film photography',
    'portrait photographer',
    'street photography',
    'event photographer',
    'Michal Studio',
  ],
  openGraph: {
    title: 'Michal Studio — Vintage Film Photography',
    description:
      'Timeless moments, captured on film. Warm, imperfect, emotional, and timeless photography.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        {/* Google Fonts — EB Garamond (headings) + Inter (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
