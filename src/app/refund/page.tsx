import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { SITE, EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description: `How free trials, billing, cancellations, and refunds work for ${SITE.name} services.`,
  alternates: { canonical: '/refund' },
};

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund &amp; Cancellation Policy" updated="June 26, 2026">
      <p>
        This Refund &amp; Cancellation Policy explains how free trials, billing, cancellations, and
        refunds work for services provided by {SITE.legalName} (&quot;{SITE.name}&quot;). It forms part
        of our <a href="/terms">Terms &amp; Conditions</a>.
      </p>

      <h2>1. Free 3-day trial</h2>
      <p>
        Your free 3-day trial is completely free and requires no payment during the trial period. If
        you choose not to continue, simply let us know before the trial ends and you will not be
        charged. There is nothing to refund for the trial because no payment is taken for it.
      </p>

      <h2>2. Billing for paid plans</h2>
      <p>
        If you continue after the trial, paid plans are billed in advance on a recurring basis (for
        example, monthly) as described at sign-up. Each payment covers the upcoming billing period.
      </p>

      <h2>3. How to cancel</h2>
      <p>
        You can cancel at any time by contacting us at <a href={EMAIL_HREF}>{EMAIL}</a>,{' '}
        <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>, or via{' '}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        . Cancellation stops future renewals; your monitoring continues until the end of the billing
        period you have already paid for.
      </p>

      <h2>4. Refunds</h2>
      <ul>
        <li>
          Fees for the current billing period are generally non-refundable once that period has begun,
          since monitoring resources are committed in advance.
        </li>
        <li>
          If you were charged in error, billed twice, or experienced a significant service failure on
          our side, contact us within 7 days and we will review your case and issue a refund where
          appropriate.
        </li>
        <li>Approved refunds are returned to your original payment method.</li>
      </ul>

      <h2>5. Duplicate or incorrect charges</h2>
      <p>
        If you notice a duplicate or incorrect charge, please reach out right away with the relevant
        details and we will investigate and correct any genuine billing error promptly.
      </p>

      <h2>6. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &quot;Last updated&quot; date above reflects
        the latest version, and continued use of the services constitutes acceptance of the updated
        policy.
      </p>

      <h2>7. Contact us</h2>
      <p>
        Need help with a cancellation or refund? Contact us at <a href={EMAIL_HREF}>{EMAIL}</a> or{' '}
        <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
      </p>
    </LegalPage>
  );
}
