import Image from 'next/image';
import { FiArrowRight, FiPhone, FiShield } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { CamFrame } from '@/components/ui/CamFrame';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { PHONE_HREF, PHONE_DISPLAY, SITE } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Operations-center backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-soc.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid-faint bg-[size:54px_54px] opacity-20 [mask-image:radial-gradient(80%_60%_at_50%_0%,#000,transparent)]" />
      </div>

      <div className="container-rail">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* New Copy integrated from Website 2 Style */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
            
            {/* Premium Trust Badge Container */}
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-glow">
                <FiShield className="h-3.5 w-3.5" />
                <span>Proactive Loss Prevention Network</span>
                <FiArrowRight className="h-3 w-3 text-primary/70 ml-0.5" />
              </div>
            </Reveal>

            {/* Massive Conversional Headline Shell */}
            <Reveal delay={0.05}>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white leading-[1.1] sm:text-5xl md:text-6xl">
                We Stop Crimes <br className="hidden sm:inline" />
                <span className="text-glow text-primary">
                  Before They Happen
                </span>
              </h1>
            </Reveal>

            {/* Professional Descriptive Typography Frame */}
            <Reveal delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-muted font-medium">
                Traditional alarms only record loss. OptiGuard deploys 24/7 remote live CCTV monitoring 
                and AI-driven threat verification to intercept intruders, stop shrink, and secure retail assets in real-time.
              </p>
            </Reveal>

            {/* Re-stacked Interactive Action Buttons */}
            <Reveal delay={0.15}>
              <div className="flex flex-col w-full sm:w-auto gap-3.5 sm:flex-row sm:items-center justify-center lg:justify-start">
                <Button href="#contact" size="lg" className="shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                  Start your free 3-day trial
                  <FiArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg">
                  See how it works
                </Button>
              </div>
            </Reveal>

            {/* Metadata Badges & Phone Access Lines */}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-2 text-sm text-muted">
                <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <FiPhone className="h-4 w-4 text-primary" aria-hidden />
                  <span className="font-mono">{PHONE_DISPLAY}</span>
                </a>
                <span className="flex items-center gap-2">
                  <FiShield className="h-4 w-4 text-primary" aria-hidden />
                  No new hardware · works with your CCTV
                </span>
              </div>
            </Reveal>
          </div>

          {/* Live-feed composition — Remained Unaltered */}
          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              <CamFrame
                src="/images/feed-gas-station.jpg"
                alt="Live monitored gas station forecourt at night"
                label="CAM 07 · FORECOURT"
                scan
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="aspect-[16/10] w-full shadow-glow-lg"
              />

              <div className="absolute -bottom-8 -left-4 hidden w-52 sm:block">
                <CamFrame
                  src="/images/feed-convenience.jpg"
                  alt="Live monitored convenience store interior"
                  label="CAM 03 · STORE"
                  sizes="220px"
                  className="aspect-[4/3] w-full shadow-card"
                />
              </div>

              {/* Verified-alert chip */}
              <div className="glass absolute -right-3 -top-5 flex items-center gap-2.5 rounded-xl px-3 py-2.5 shadow-glow">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <FiShield className="h-4 w-4" aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary">
                    Threat verified
                  </span>
                  <span className="block text-xs text-ink/90">Operator responding…</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}