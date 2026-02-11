import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://digicompanions.com"),

  title: 'DigiCompanions - 5 Years of Digital Excellence | Foundation Day Celebration',

  description:
    "Celebrating 5 years of digital marketing excellence. Performance-driven campaigns, trusted by 150+ brands. Join us in building what's next.",

  keywords:
    'digital marketing, performance marketing, social media marketing, branding, paid ads, SEO, analytics',

  openGraph: {
    title: 'DigiCompanions - 5 Years of Digital Excellence',
    description:
      'Celebrating 5 years of digital marketing excellence. Performance-driven campaigns, trusted by 150+ brands.',
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
      'Celebrating 5 years of digital marketing excellence. Performance-driven campaigns, trusted by 150+ brands.',
    images: ['/og-image.jpg'],
  },
};

/*export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}*/
// Previous code Replaced (above section) to add logo

import './globals.css';
import Logo from '@/components/sections/Logo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Logo container */}
        <div className="absolute top-0 left-4 z-20">
          <Logo />
        </div>

        {/* Push content down ONLY on mobile */}
        <main className="pt-24 sm:pt-12">
          {children}
        </main>
      </body>
    </html>
  );
}