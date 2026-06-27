import { FiMail, FiLock } from 'react-icons/fi';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ARCHIVING_FEATURES, SAMPLE_DAILY_LOG } from '@/lib/content';

const statusTone: Record<string, string> = {
  VERIFIED: 'text-primary',
  SENT: 'text-primary',
  OK: 'text-muted',
  HEALTHY: 'text-muted',
};

export function ActivityLogs() {
  return (
    <Section id="reporting">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Copy + features */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Automated Reporting"
            title={
              <>
                Daily automated activity logs &amp;{' '}
                <span className="text-glow">smart video archiving</span>
              </>
            }
            description="OptiGuard keeps a 24/7 tamper-proof record of what happens at your site — and delivers it to your inbox every morning without anyone lifting a finger."
          />

          <div className="mt-8 flex flex-col gap-5">
            {ARCHIVING_FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.06} as="div">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Auto-report preview */}
        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-5 shadow-card sm:p-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <FiLock className="h-4 w-4 text-primary" aria-hidden />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  Daily Activity Report
                </span>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" /> Auto
              </span>
            </div>

            <ul className="mt-4 flex flex-col divide-y divide-border">
              {SAMPLE_DAILY_LOG.map((row) => (
                <li key={row.time + row.event} className="flex items-center gap-3 py-3 text-sm">
                  <span className="font-mono text-xs text-muted">{row.time}</span>
                  <span className="flex-1 text-ink/90">{row.event}</span>
                  <span
                    className={`font-mono text-[0.7rem] uppercase tracking-[0.12em] ${
                      statusTone[row.status] ?? 'text-muted'
                    }`}
                  >
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-bg/50 px-4 py-3 text-xs text-muted">
              <FiMail className="h-4 w-4 flex-none text-primary" aria-hidden />
              Emailed automatically every 24 hours to your team — entries, arming times, health
              status and flagged events in one summary.
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
