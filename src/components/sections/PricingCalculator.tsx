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

function SliderRow({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink">{label}</label>
        <span className="font-mono text-sm text-primary">
          {value} {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
      />
      <div className="flex justify-between font-mono text-[0.7rem] text-muted">
        <span>
          {min} {suffix}
        </span>
        <span>
          {max} {suffix}
        </span>
      </div>
    </div>
  );
}

export function PricingCalculator() {
  const [cameras, setCameras] = useState(10);
  const [nodes, setNodes] = useState(0);

  const bundled = cameras >= PRICING.bundleThreshold;
  const rate = bundled ? PRICING.bundleRate : PRICING.baseRate;
  const cameraCost = cameras * rate;
  const nodeCost = nodes * PRICING.cloudNodeRate;
  const total = cameraCost + nodeCost;

  const enquiry = `Hi OptiGuard, I used your calculator: ${cameras} cameras + ${nodes} cloud nodes (estimated ${money(
    total,
  )}/month). I'd like to discuss a plan and start a free trial.`;

  return (
    <Section id="calculator">
      <SectionHeading
        eyebrow="ROI Calculator"
        title={
          <>
            Estimate your monthly <span className="text-glow">monitoring investment</span>
          </>
        }
        description="Drag the sliders to size your deployment. Reach 10 or more cameras and the Pro bundle rate is applied automatically."
      />

      <div className="mx-auto mt-12 max-w-5xl">
        <GlowCard interactive={false}>
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-9">
            {/* Inputs */}
            <div className="flex flex-col justify-center gap-8">
              <SliderRow
                label="Cameras to monitor"
                value={cameras}
                min={1}
                max={100}
                suffix="cams"
                onChange={setCameras}
              />
              <SliderRow
                label="Enterprise cloud nodes"
                value={nodes}
                min={0}
                max={50}
                suffix="nodes"
                onChange={setNodes}
              />
              {bundled ? (
                <Badge tone="live" className="self-start">
                  <FiZap className="h-3 w-3" aria-hidden /> Pro bundle rate unlocked
                </Badge>
              ) : (
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
                  Add {PRICING.bundleThreshold - cameras} more camera
                  {PRICING.bundleThreshold - cameras === 1 ? '' : 's'} to unlock the $
                  {PRICING.bundleRate}/camera bundle
                </p>
              )}
            </div>

            {/* Output */}
            <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-bg/50 p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3 text-sm">
                  <span className="text-muted">Your OptiGuard security scale</span>
                  <span className="font-mono text-ink">{cameras} active cameras</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-3 text-sm">
                  <span className="text-muted">Applicable package rate</span>
                  <span className="font-mono text-ink">{money(rate)}/camera</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-3 text-sm">
                  <span className="text-muted">Camera monitoring</span>
                  <span className="font-mono text-ink">{money(cameraCost)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">
                    Cloud nodes ({nodes} × {money(PRICING.cloudNodeRate)})
                  </span>
                  <span className="font-mono text-ink">{money(nodeCost)}</span>
                </div>
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
                className="w-full"
              >
                Get this quote on WhatsApp <FiArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </GlowCard>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted">
          Estimates are indicative and exclude applicable taxes. Deployments of 50+ cameras or
          nodes qualify for custom Enterprise Sentinel pricing from $
          {PRICING.enterpriseFromRate}/node — contact us for a tailored quotation.
        </p>
      </div>
    </Section>
  );
}
