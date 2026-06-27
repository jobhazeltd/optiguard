"use client"; // Top par ensure karein ke use client ho takey window object access ho sake

import { useEffect } from 'react';
import { Hero } from '@/components/sections/Hero';
import { TrustStats } from '@/components/sections/TrustStats';
import { Services } from '@/components/sections/Services';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Platform } from '@/components/sections/Platform';
import { VerificationPipeline } from '@/components/sections/VerificationPipeline';
import { ActivityLogs } from '@/components/sections/ActivityLogs';
import { Industries } from '@/components/sections/Industries';
import { IndustryTargeting } from '@/components/sections/IndustryTargeting';
import { Operators } from '@/components/sections/Operators';
import { WhyOptiGuard } from '@/components/sections/WhyOptiGuard';
import { FreeTrialCTA } from '@/components/sections/FreeTrialCTA';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  
  // Refresh hone par page ko top par shift karne ka logic
  useEffect(() => {
    // 1. Browser ke auto scroll restoration ko manual pe set karein
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Agar URL me hash hai (jaise /#industries kisi doosre page se aaya),
    //    to us section par scroll karein — warna top par bhej dein.
    const hash = window.location.hash;
    if (hash.length > 1) {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView());
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <TrustStats />
      <Services />
      <HowItWorks />
      <Platform />
      <VerificationPipeline />
      <ActivityLogs />
      <Industries />
      <IndustryTargeting />
      <Operators />
      <WhyOptiGuard />
      <FreeTrialCTA />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}