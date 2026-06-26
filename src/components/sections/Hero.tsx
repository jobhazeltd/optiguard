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
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <Eyebrow>24/7 Remote CCTV Monitoring</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
                Live eyes on your business,{' '}
                <span className="text-glow">the moment it matters.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                OptiGuard&apos;s trained operators watch your existing cameras around the
                clock — stopping theft in real time with live audio warnings, instant
                alerts and human-verified incident reports. {SITE.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#contact" size="lg">
                  Start your free 3-day trial
                  <FiArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg">
                  See how it works
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted">
                <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-primary">
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

          {/* Live-feed composition — the signature moment */}
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
