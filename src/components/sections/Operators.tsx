import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

export function Operators() {
  return (
    <Section id="operators">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Visual composition */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="cam-frame relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-glow-lg">
              <Image
                src="/images/operations-center.jpg"
                alt="OptiGuard operators monitoring a wall of live camera feeds in the operations center"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
            </div>

            {/* Operator cutout */}
            <div className="absolute -bottom-6 -right-2 hidden w-44 sm:block md:w-52">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 shadow-card backdrop-blur">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/operator.png"
                    alt="OptiGuard monitoring operator at a workstation"
                    fill
                    sizes="208px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge tone="live">On shift</Badge>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Real people, watching"
              title={
                <>
                  Software flags it. <span className="text-glow">People stop it.</span>
                </>
              }
              description="Motion detection alone floods you with noise. OptiGuard pairs smart detection with trained operators who read the situation, make the call and act — the judgment that actually prevents loss."
            />
            <dl className="grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="font-display text-2xl font-bold text-glow">Always on</dt>
                <dd className="mt-1 text-sm text-muted">
                  Nights, weekends and holidays — the hours intruders count on.
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-bold text-glow">Live voice-down</dt>
                <dd className="mt-1 text-sm text-muted">
                  Operators speak on site to deter intruders in the moment.
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-bold text-glow">Verify first</dt>
                <dd className="mt-1 text-sm text-muted">
                  Every event confirmed on video before anyone is dispatched.
                </dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-bold text-glow">Documented</dt>
                <dd className="mt-1 text-sm text-muted">
                  Clear incident reports follow every response, every time.
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
