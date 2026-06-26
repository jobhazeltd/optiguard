import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const HIGHLIGHTS = [
  'Live multi-camera wall watched by real operators',
  'Real-time alerts the instant a threat is detected',
  'Human-verified events — far fewer false alarms',
  'Time-stamped incident logs you can hand to police or insurers',
];

export function Platform() {
  return (
    <Section id="platform" grid>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="The monitoring center"
              title={
                <>
                  Every feed, every alert — <span className="text-glow">under one watch</span>
                </>
              }
              description="Behind the scenes, your cameras flow into a live operations view where our team tracks motion, flags threats and responds in seconds, not hours."
            />
            <ul className="flex flex-col gap-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <FiCheck className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Button href="#contact">Request a live walkthrough</Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="cam-frame relative overflow-hidden rounded-2xl border border-border bg-card shadow-glow-lg">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/platform-dashboard.png"
                alt="OptiGuard live monitoring dashboard showing camera feeds, AI motion detection and real-time alerts"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
