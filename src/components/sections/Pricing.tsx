import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { PRICING_TIERS } from '@/lib/content';
import { WHATSAPP_URL } from '@/lib/site';

export function Pricing() {
  return (
    <Section id="pricing" grid>
      <SectionHeading
        eyebrow="Pricing"
        title={
          <>
            Simple per-camera pricing that{' '}
            <span className="text-glow">scales with your sites</span>
          </>
        }
        description="Transparent monthly rates with no hardware to buy — OptiGuard works with the cameras you already have. Add more cameras and your per-camera rate goes down."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-start">
        {PRICING_TIERS.map((tier, i) => (
          <Reveal key={tier.id} delay={i * 0.08}>
            <GlowCard
              className={
                tier.highlight
                  ? 'border-primary/60 shadow-glow lg:-translate-y-3'
                  : undefined
              }
            >
              <div className="flex h-full flex-col p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-ink">{tier.name}</h3>
                  {tier.highlight && <Badge tone="live">Most popular</Badge>}
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  {tier.audience}
                </p>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className="text-4xl font-semibold text-ink">{tier.price}</span>
                  <span className="pb-1 text-sm text-muted">{tier.priceUnit}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-primary/90">{tier.priceNote}</p>

                <p className="mt-5 text-sm leading-relaxed text-muted">{tier.description}</p>

                <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
                        <FiCheck className="h-3 w-3" aria-hidden />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <Button
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(tier.ctaText)}`}
                    variant={tier.highlight ? 'primary' : 'secondary'}
                    size="lg"
                    className="w-full"
                  >
                    {tier.ctaLabel} <FiArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted">
        All plans include live human-verified monitoring and a FREE 3-day trial. Reach 10 or more
        cameras and the discounted Pro rate applies automatically. Prices are in USD and exclude
        applicable taxes.
      </p>
    </Section>
  );
}
