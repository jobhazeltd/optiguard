import { Hero } from '@/components/sections/Hero';
import { TrustStats } from '@/components/sections/TrustStats';
import { Services } from '@/components/sections/Services';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Platform } from '@/components/sections/Platform';
import { Industries } from '@/components/sections/Industries';
import { Operators } from '@/components/sections/Operators';
import { WhyOptiGuard } from '@/components/sections/WhyOptiGuard';
import { FreeTrialCTA } from '@/components/sections/FreeTrialCTA';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Services />
      <HowItWorks />
      <Platform />
      <Industries />
      <Operators />
      <WhyOptiGuard />
      <FreeTrialCTA />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
