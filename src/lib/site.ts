/**
 * Company-wide constants. Sourced directly from COMPANY_INFO.md so contact
 * details, links and SEO live in exactly one place.
 */

export const PHONE_DISPLAY = '+1 (929) 314-0668';
export const PHONE_E164 = '+19293140668';
export const EMAIL = 'Optiguardmonitoring@gmail.com';
export const WHATSAPP_URL = 'https://wa.me/19293140668';
// 👉 Replace with your real Facebook page URL. Leave empty ('') to hide the button.
export const FACEBOOK_URL = 'https://www.facebook.com/optiguardmonitoring';
export const PHONE_HREF = `tel:${PHONE_E164}`;
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const SITE = {
  name: 'OptiGuard Monitoring',
  legalName: 'OptiGuard Monitoring',
  tagline: 'We Keep You Ahead.',
  // Replace at deploy time with the production domain.
  url: 'https://optiguardmonitoring.cloud',
  description:
    'OptiGuard Monitoring provides 24/7 live remote CCTV monitoring, real-time security alerts and active loss prevention for gas stations, convenience stores, smoke shops, retail and warehouses across the United States.',
  serviceArea: 'United States',
  trial: 'FREE 3-Day Trial',
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/#services' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Platform', href: '/#platform' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Why OptiGuard', href: '/#why-optiguard' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/#faq' },
];

export const FOOTER_LINKS: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Platform',
    links: [
      { label: 'Live CCTV monitoring', href: '/#services' },
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Monitoring dashboard', href: '/#platform' },
      { label: 'Why OptiGuard', href: '/#why-optiguard' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Gas stations', href: '/#industries' },
      { label: 'Convenience stores', href: '/#industries' },
      { label: 'Smoke shops', href: '/#industries' },
      { label: 'Warehouses', href: '/#industries' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Operations center', href: '/#operators' },
      { label: 'Testimonials', href: '/#testimonials' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Request a free trial', href: '/#contact' },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Refund Policy', href: '/refund' },
];
