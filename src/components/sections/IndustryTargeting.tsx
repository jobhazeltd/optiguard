import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { TARGET_SECTORS } from '@/lib/content';
import { WHATSAPP_URL } from '@/lib/site';

export function IndustryTargeting() {
  return (
    <Section id="targeting" grid>
      <SectionHeading
        eyebrow="High-Risk Sectors"
        title={
          <>
            Custom trigger actions built for{' '}
            <span className="text-glow">your industry</span>
          </>
        }
        description="OptiGuard isn’t a one-size-fits-all alarm. We configure detection zones and trigger actions around the exact risks your sector faces after hours."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {TARGET_SECTORS.map((sector, i) => (
          <Reveal key={sector.name} delay={i * 0.08}>
            <GlowCard className="flex h-full flex-col p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <sector.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{sector.name}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{sector.description}</p>

              <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary/90">
                Custom trigger actions
              </p>
              <ul className="mt-3 flex flex-col gap-3 border-t border-border pt-4">
                {sector.triggers.map((trigger) => (
                  <li key={trigger} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
                      <FiCheck className="h-3 w-3" aria-hidden />
                    </span>
                    <span>{trigger}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted">
            Don’t see your sector? We tailor monitoring rules to almost any commercial site.
          </p>
          <Button
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(
              'Hi OptiGuard, I’d like to discuss custom monitoring trigger actions for my site.',
            )}`}
            size="lg"
          >
            Discuss your site setup <FiArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
