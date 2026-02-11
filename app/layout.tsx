import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://digicompanions.com"),
  title:
    'DigiCompanions - 5 Years of Digital Excellence | Foundation Day Celebration',
  description:
    "Celebrating 5 years of digital marketing excellence. Performance-driven campaigns, trusted by 150+ brands. Join us in building what's next.",
  keywords:
    'digital marketing, performance marketing, social media marketing, branding, paid ads, SEO, analytics',
  openGraph: {
    title: 'DigiCompanions - 5 Years of Digital Excellence',
    description:
      'Celebrating 5 years of digital marketing excellence.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiCompanions - 5 Years of Digital Excellence',
    description:
      'Celebrating 5 years of digital marketing excellence.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
