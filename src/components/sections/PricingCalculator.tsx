'use client';

import { useState } from 'react';
import { FiArrowRight, FiZap } from 'react-icons/fi';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PRICING } from '@/lib/content';
import { WHATSAPP_URL } from '@/lib/site';

const money = (n: number) => `$${n.toLocaleString('en-US')}`;

export function PricingCalculator() {
  const [cameras, setCameras] = useState(10);

  const bundled = cameras >= PRICING.bundleThreshold;
  const rate = bundled ? PRICING.bundleRate : PRICING.baseRate;
  const total = cameras * rate;
  const remaining = PRICING.bundleThreshold - cameras;

  const enquiry = `Hi OptiGuard, I used your calculator: ${cameras} cameras (estimated ${money(
    total,
  )}/month). I'd like to start a free 3-day trial.`;

  return (
    <Section id="calculator">
      <SectionHeading
        eyebrow="Cost Calculator"
        title={
          <>
            Estimate your monthly <span className="text-glow">monitoring cost</span>
          </>
        }
        description="Drag the slider to set how many cameras you want monitored. Reach 10 or more cameras and the discounted Pro rate is applied automatically."
      />

      <div className="mx-auto mt-12 max-w-3xl">
        <GlowCard interactive={false}>
          <div className="flex flex-col gap-8 p-6 md:p-9">
            {/* Slider */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label htmlFor="camera-count" className="text-sm font-medium text-ink">
                  Cameras to monitor
                </label>
                <span className="font-mono text-sm text-primary">{cameras} cameras</span>
              </div>
              <input
                id="camera-count"
                type="range"
                min={1}
                max={100}
                value={cameras}
                onChange={(e) => setCameras(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
              />
              <div className="flex justify-between font-mono text-[0.7rem] text-muted">
                <span>1 camera</span>
                <span>100 cameras</span>
              </div>
            </div>

            {bundled ? (
              <Badge tone="live" className="self-start">
                <FiZap className="h-3 w-3" aria-hidden /> Pro rate applied — ${PRICING.bundleRate}/camera
              </Badge>
            ) : (
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
                Add {remaining} more camera{remaining === 1 ? '' : 's'} to unlock the $
                {PRICING.bundleRate}/camera rate
              </p>
            )}

            {/* Output */}
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-bg/50 p-6">
              <div className="flex items-center justify-between border-b border-border pb-3 text-sm">
                <span className="text-muted">Your OptiGuard security scale</span>
                <span className="font-mono text-ink">{cameras} active cameras</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-3 text-sm">
                <span className="text-muted">Applicable package rate</span>
                <span className="font-mono text-ink">{money(rate)}/camera</span>
              </div>
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  Total estimated monthly investment
                </p>
                <p className="mt-1 text-4xl font-semibold text-glow">{money(total)}</p>
                <p className="mt-1 text-xs text-muted">per month, billed monthly</p>
              </div>
              <Button
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(enquiry)}`}
                size="lg"
                className="mt-1 w-full"
              >
                Get this quote on WhatsApp <FiArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </GlowCard>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted">
          Estimates are indicative and exclude applicable taxes. Running 50 or more cameras?
          You qualify for custom Enterprise Sentinel pricing — contact us for a tailored quote.
        </p>
      </div>
    </Section>
  );
}
