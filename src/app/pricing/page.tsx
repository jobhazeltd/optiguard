import type { Metadata } from 'next';
import { Pricing } from '@/components/sections/Pricing';
import { PricingCalculator } from '@/components/sections/PricingCalculator';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pricing — Per-Camera Plans & Cloud Monitoring',
  description:
    'Transparent per-camera pricing for OptiGuard Monitoring. Starter Guard at $100/camera, Pro Shield at $85/camera (volume bundle), and custom Enterprise Sentinel quotes — plus a live cost calculator.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: `Pricing — ${SITE.name}`,
    description:
      'Per-camera remote CCTV monitoring plans with AI alerts, cloud retention, and a free 3-day trial. Estimate your monthly investment with our calculator.',
    url: `${SITE.url}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <PricingCalculator />
    </>
  );
}
