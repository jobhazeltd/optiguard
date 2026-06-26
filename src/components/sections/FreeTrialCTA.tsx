import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { PHONE_HREF, PHONE_DISPLAY, SITE } from '@/lib/site';

export function FreeTrialCTA() {
  return (
    <section className="relative py-8">
      <div className="container-rail">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-6 py-12 text-center shadow-glow-lg md:px-12 md:py-16">
            <div aria-hidden className="absolute inset-0 bg-radial-glow opacity-80" />
            <div
              aria-hidden
              className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)]"
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
              <Eyebrow>{SITE.trial}</Eyebrow>
              <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-[2.75rem]">
                Stop watching losses after the fact.{' '}
                <span className="text-glow">Start preventing them.</span>
              </h2>
              <p className="max-w-xl text-base text-muted md:text-lg">
                Put trained operators on your cameras for three days, free. No new hardware,
                no long contract — just live protection from day one.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Button href="#contact" size="lg">
                  Claim your free trial
                  <FiArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button href={PHONE_HREF} variant="secondary" size="lg">
                  <FiPhone className="h-4 w-4" aria-hidden />
                  {PHONE_DISPLAY}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
