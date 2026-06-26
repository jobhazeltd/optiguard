import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactDock } from '@/components/common/ContactDock';
import { StructuredData } from '@/components/common/StructuredData';
import { SITE } from '@/lib/site';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — 24/7 Live Remote CCTV Monitoring`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    'remote CCTV monitoring',
    'live video monitoring',
    '24/7 security monitoring',
    'theft detection',
    'loss prevention',
    'shoplifting prevention',
    'video verification',
    'gas station security',
    'convenience store security',
    'smoke shop security',
    'warehouse monitoring',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — 24/7 Live Remote CCTV Monitoring`,
    description: SITE.description,
    images: [{ url: '/images/hero-soc.jpg', width: 1280, height: 720, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — 24/7 Live Remote CCTV Monitoring`,
    description: SITE.description,
    images: ['/images/hero-soc.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#030B17',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <StructuredData />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <ContactDock />
      </body>
    </html>
  );
}
