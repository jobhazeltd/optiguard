import { SITE, PHONE_E164, EMAIL } from '@/lib/site';
import { SERVICES } from '@/lib/content';

/**
 * Server-rendered JSON-LD. Helps search engines understand OptiGuard as a
 * security service business and surface rich results.
 */
export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SecurityService',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: PHONE_E164,
    email: EMAIL,
    slogan: SITE.tagline,
    areaServed: { '@type': 'Country', name: 'United States' },
    serviceType: SERVICES.map((s) => s.title),
    offers: {
      '@type': 'Offer',
      name: SITE.trial,
      description: '3-day free trial of 24/7 live remote CCTV monitoring.',
      price: '0',
      priceCurrency: 'USD',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE_E164,
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
