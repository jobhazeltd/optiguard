'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { FAQS } from '@/lib/content';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <Section id="faq" grid>
      <SectionHeading
        eyebrow="Questions"
        title={
          <>
            Everything you need{' '}
            <span className="text-glow">before the trial</span>
          </>
        }
      />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card/40">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={faq.question} delay={i * 0.04}>
              <div>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:text-primary md:px-7"
                  >
                    <span className="text-base font-medium md:text-lg">{faq.question}</span>
                    <FiChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-primary transition-transform duration-300',
                        isOpen && 'rotate-180',
                      )}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-sm leading-relaxed text-muted md:px-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
