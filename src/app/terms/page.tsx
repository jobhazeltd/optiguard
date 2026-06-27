import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { SITE, EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `The terms that govern your use of ${SITE.name}'s website and remote CCTV monitoring services.`,
  alternates: { canonical: '/terms' },
};

export default function TermsConditions() {
  return (
    <LegalPage title="Terms & Conditions" updated="June 26, 2026">
      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the website
        and remote CCTV monitoring services provided by {SITE.legalName} (&quot;{SITE.name},&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By using our website, requesting a free
        trial, or subscribing to our services, you agree to these Terms.
      </p>

      <h2>1. Services</h2>
      <p>
        We provide 24/7 live remote CCTV monitoring, real-time security alerts, video verification,
        theft and loss prevention, and incident reporting for businesses across the{' '}
        {SITE.serviceArea}. Our services work with your existing compatible cameras; we do not sell or
        install camera hardware.
      </p>

      <h2>2. Free 3-day trial</h2>
      <p>
        We offer a free 3-day trial so you can experience monitoring on your own cameras before
        committing. The trial is provided at no charge for the stated period. We may limit one trial
        per business and may decline or end a trial at our discretion. Continuing with a paid plan
        after the trial is subject to these Terms.
      </p>

      <h2>3. Eligibility and accounts</h2>
      <p>
        Our services are intended for business use by individuals who are at least 18 years old and
        authorized to act for the business. You agree to provide accurate information and to keep your
        account and contact details up to date.
      </p>

      <h2>4. Your responsibilities</h2>
      <ul>
        <li>
          Operate your cameras lawfully, including posting any required surveillance notices and
          obtaining any consents that apply at your locations.
        </li>
        <li>Maintain working cameras, internet connectivity, and power needed for monitoring.</li>
        <li>Provide accurate site information and emergency or escalation contacts.</li>
        <li>Use the services only for lawful purposes and not to harass, surveil, or harm others unlawfully.</li>
      </ul>

      <h2>5. Fees, billing, and paid plans</h2>
      <p>
        Paid plans are billed in advance on a recurring basis as described at sign-up. By subscribing,
        you authorize us (or our payment processor) to charge the applicable fees for each billing
        period until you cancel. Fees may change with prior notice, effective from your next billing
        period.
      </p>

      <h2>6. Cancellation and refunds</h2>
      <p>
        You may cancel at any time as described in our{' '}
        <a href="/refund">Refund &amp; Cancellation Policy</a>, which forms part of these Terms.
      </p>

      <h2>7. Service availability and security disclaimer</h2>
      <p>
        We work hard to provide reliable, attentive monitoring, but no security service can prevent
        every incident. Our services depend on factors outside our control, including your equipment,
        camera placement, lighting, and internet connectivity. We do not guarantee that monitoring
        will detect or prevent all theft, loss, or other events, and we are not a substitute for law
        enforcement or emergency services.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {SITE.name} and its team will not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or for any loss of profits,
        revenue, data, or goodwill. Our total liability for any claim relating to the services will
        not exceed the amount you paid to us for the services in the three months before the claim.
      </p>

      <h2>9. Disclaimer of warranties</h2>
      <p>
        The services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of
        any kind, whether express or implied, including any implied warranties of merchantability,
        fitness for a particular purpose, or non-infringement.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold {SITE.name} harmless from claims, damages, and expenses arising
        from your use of the services, your cameras, or your breach of these Terms or applicable law.
      </p>

      <h2>11. Termination</h2>
      <p>
        We may suspend or terminate access to the services if you breach these Terms or use the
        services unlawfully. You may stop using the services at any time, subject to the cancellation
        terms.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These Terms are governed by the applicable laws of the {SITE.serviceArea}, without regard to
        conflict-of-law principles. Any disputes will be handled in the courts with proper
        jurisdiction over {SITE.name}.
      </p>

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. The &quot;Last updated&quot; date above reflects
        the latest version, and continued use of the services constitutes acceptance of the updated
        Terms.
      </p>

      <h2>14. Contact us</h2>
      <p>
        Questions about these Terms? Contact us at <a href={EMAIL_HREF}>{EMAIL}</a> or{' '}
        <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
      </p>
    </LegalPage>
  );
}
