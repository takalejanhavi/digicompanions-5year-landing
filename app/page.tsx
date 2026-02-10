import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import MetricsSection from '@/components/sections/MetricsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import FounderSection from '@/components/sections/FounderSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import CelebrationSection from '@/components/sections/CelebrationSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/ui/FloatingCTA';

export const metadata: Metadata = {
  metadataBase: new URL("https://digicompanions.com"),

  title: 'DigiCompanions - 5 Years of Digital Excellence | Foundation Day Celebration',
  description: 'Celebrating 5 years of digital marketing excellence. Performance-driven campaigns, trusted by 150+ brands. Join us in building what\'s next.',
  keywords: 'digital marketing, performance marketing, social media marketing, branding, paid ads, SEO, analytics',

  openGraph: {
    title: 'DigiCompanions - 5 Years of Digital Excellence',
    description: 'Celebrating 5 years of digital marketing excellence. Performance-driven campaigns, trusted by 150+ brands.',
    images: [
      {
        url: '/og-image.jpg', // or your full image path
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DigiCompanions - 5 Years of Digital Excellence',
    description: 'Celebrating 5 years of digital marketing excellence. Performance-driven campaigns, trusted by 150+ brands.',
    images: ['/og-image.jpg'],
  },
};
  title: 'DigiCompanions - 5 Years of Digital Excellence | Foundation Day Celebration',
  description: 'Celebrating 5 years of digital marketing excellence. Performance-driven campaigns, trusted by 150+ brands. Join us in building what\'s next.',
  keywords: 'digital marketing, performance marketing, social media marketing, branding, paid ads, SEO, analytics',
  openGraph: {
    title: 'DigiCompanions - 5 Years of Digital Excellence',
    description: 'Celebrating 5 years of digital marketing excellence. Performance-driven campaigns, trusted by 150+ brands.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigiCompanions - 5 Years of Digital Excellence',
    description: 'Celebrating 5 years of digital marketing excellence. Performance-driven campaigns, trusted by 150+ brands.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <MetricsSection />
      <TimelineSection />
      <ExpertiseSection />
      <FounderSection />
      <ContactFormSection />
      <CelebrationSection />
      <FinalCTASection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}