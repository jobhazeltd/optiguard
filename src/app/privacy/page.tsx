import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { SITE, EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE.name} collects, uses, and protects personal information and monitoring data.`,
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="June 26, 2026">
      <p>
        This Privacy Policy explains how {SITE.legalName} (&quot;{SITE.name},&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects information when you
        visit our website, contact us, or use our remote CCTV monitoring services across the{' '}
        {SITE.serviceArea}. By using our website or services, you agree to the practices described
        here.
      </p>

      <h2>1. Information we collect</h2>
      <p>
        <strong>Information you provide.</strong> When you submit our contact or free-trial form,
        call, email, or message us on WhatsApp, we collect details such as your name, business name,
        phone number, email address, business type, and any information you include in your message.
      </p>
      <p>
        <strong>Information collected automatically.</strong> When you visit our website, we may
        collect standard technical data such as IP address, browser type, device information, pages
        viewed, and referring URLs, including through cookies and similar technologies.
      </p>
      <p>
        <strong>Monitoring data.</strong> When you become a client, our services involve viewing and
        processing live and recorded video footage and related event data from cameras you operate
        at your premises, for the purpose of providing monitoring, alerts, and incident reporting.
      </p>

      <h2>2. How we use information</h2>
      <ul>
        <li>To respond to enquiries and set up and deliver your free trial and services.</li>
        <li>To provide 24/7 monitoring, real-time alerts, video verification, and incident reports.</li>
        <li>To manage accounts, process payments for paid plans, and provide customer support.</li>
        <li>To maintain, secure, and improve our website and services.</li>
        <li>To comply with legal obligations and enforce our terms.</li>
      </ul>

      <h2>3. CCTV footage and client data</h2>
      <p>
        For monitoring clients, we act as a service provider processing footage on your behalf and
        under your instructions. You remain responsible for operating your cameras lawfully,
        including posting any legally required surveillance notices and obtaining any consents that
        apply at your locations. We do not sell monitoring footage, and we use it only to deliver the
        services you have requested.
      </p>

      <h2>4. How we share information</h2>
      <p>We do not sell your personal information. We may share information with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> who help us operate (for example, cloud hosting,
          form-and-spreadsheet tools, and communication platforms), bound by appropriate
          confidentiality obligations.
        </li>
        <li>
          <strong>Authorities or other parties</strong> when required by law, to respond to legal
          process, or to protect rights, safety, and property.
        </li>
        <li>
          <strong>Successors</strong> in connection with a merger, acquisition, or sale of assets.
        </li>
      </ul>

      <h2>5. Data retention</h2>
      <p>
        We keep personal information for as long as needed to provide our services, comply with legal
        obligations, resolve disputes, and enforce agreements. Retention of monitoring footage is
        governed by your service agreement and your own retention requirements.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect information against
        unauthorized access, loss, or misuse. No method of transmission or storage is completely
        secure, so we cannot guarantee absolute security.
      </p>

      <h2>7. Your choices and rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information, and you
        may opt out of marketing messages at any time. Depending on where you live, you may have
        additional rights under applicable law. To make a request, contact us using the details
        below.
      </p>

      <h2>8. Third-party services and links</h2>
      <p>
        Our website and services may use or link to third-party platforms (such as Google services
        and WhatsApp). Their use of your information is governed by their own privacy policies, which
        we encourage you to review.
      </p>

      <h2>9. Children&apos;s privacy</h2>
      <p>
        Our website and services are intended for businesses and are not directed to children under
        18. We do not knowingly collect personal information from children.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date above
        reflects the most recent revision, and continued use of our website or services constitutes
        acceptance of the updated policy.
      </p>

      <h2>11. Contact us</h2>
      <p>
        Questions about this policy or your information? Contact us at{' '}
        <a href={EMAIL_HREF}>{EMAIL}</a> or <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
      </p>
    </LegalPage>
  );
}
