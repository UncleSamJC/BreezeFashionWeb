import { colors, typography } from '../lib/designTokens';

function PrivacyPolicy() {
  const sectionStyle = {
    marginBottom: '2rem',
  };

  const headingStyle = {
    fontFamily: typography.fontFamily.heading,
    color: colors.text.primary,
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontFamily: typography.fontFamily.body,
    color: colors.text.secondary,
    lineHeight: '1.8',
    marginBottom: '1rem',
  };

  const listStyle = {
    fontFamily: typography.fontFamily.body,
    color: colors.text.secondary,
    lineHeight: '1.8',
    marginLeft: '1.5rem',
    marginBottom: '1rem',
  };

  return (
    <div style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 mt-8">
        {/* Header */}
        <h1
          className="text-4xl md:text-5xl mb-4"
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.primary,
          }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-sm mb-12"
          style={{
            fontFamily: typography.fontFamily.body,
            color: colors.text.secondary,
          }}
        >
          Last updated: December 29, 2025
        </p>

        {/* Introduction */}
        <section style={sectionStyle}>
          <p style={paragraphStyle}>
            Breeze Fashion ("we," "our," or "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website. Please read this policy carefully to
            understand our practices regarding your personal data.
          </p>
        </section>

        {/* Information We Collect */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            Information We Collect
          </h2>
          <p style={paragraphStyle}>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul style={listStyle}>
            <li>Fill out a contact form</li>
            <li>Request a quote or consultation</li>
            <li>Subscribe to our newsletter or download resources</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          <p style={paragraphStyle}>
            The personal information we collect may include:
          </p>
          <ul style={listStyle}>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            How We Use Your Information
          </h2>
          <p style={paragraphStyle}>
            We use the information we collect for the following purposes:
          </p>
          <ul style={listStyle}>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send you requested files, quotes, or information</li>
            <li>To send marketing and promotional communications (with your consent)</li>
            <li>To improve our website and services</li>
            <li>To analyze website usage and trends</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        {/* Cookies and Tracking */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            Cookies and Tracking Technologies
          </h2>
          <p style={paragraphStyle}>
            Our website uses cookies and similar tracking technologies to enhance your
            browsing experience and analyze website traffic. Specifically, we use:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Google Analytics:</strong> We use Google Analytics to collect
              information about how visitors use our website. This helps us understand
              user behavior and improve our services. Google Analytics uses cookies to
              collect anonymous data such as pages visited, time spent on site, and
              referring sources.
            </li>
            <li>
              <strong>Authentication Cookies:</strong> We use cookies to manage user
              authentication for our admin portal, powered by Supabase.
            </li>
          </ul>
          <p style={paragraphStyle}>
            You can control cookies through your browser settings. However, disabling
            cookies may affect the functionality of certain features on our website.
          </p>
        </section>

        {/* Third-Party Services */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            Third-Party Services
          </h2>
          <p style={paragraphStyle}>
            We use the following third-party services to operate our website:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Supabase:</strong> We use Supabase to store and manage data securely.
              Supabase is compliant with industry security standards.
            </li>
            <li>
              <strong>Google Analytics:</strong> We use Google Analytics for website
              analytics and performance tracking.
            </li>
          </ul>
          <p style={paragraphStyle}>
            These third parties have their own privacy policies and may collect data
            as described in their respective policies.
          </p>
        </section>

        {/* Data Retention */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            Data Retention
          </h2>
          <p style={paragraphStyle}>
            We retain your personal information only for as long as necessary to fulfill
            the purposes for which it was collected, or as required by law. When your
            data is no longer needed, we will securely delete or anonymize it.
          </p>
        </section>

        {/* Your Rights */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            Your Rights
          </h2>
          <p style={paragraphStyle}>
            Under Canadian privacy law (PIPEDA) and other applicable regulations, you have
            the right to:
          </p>
          <ul style={listStyle}>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Withdraw consent for marketing communications at any time</li>
            <li>Opt out of cookies and tracking technologies</li>
          </ul>
          <p style={paragraphStyle}>
            To exercise any of these rights, please contact us using the information below.
          </p>
        </section>

        {/* Marketing Communications */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            Marketing Communications
          </h2>
          <p style={paragraphStyle}>
            If you have subscribed to our newsletter or provided consent to receive
            marketing emails, you can unsubscribe at any time by:
          </p>
          <ul style={listStyle}>
            <li>Clicking the "unsubscribe" link in any marketing email</li>
            <li>Contacting us directly at sales@breezeie.com</li>
          </ul>
          <p style={paragraphStyle}>
            Please note that even after unsubscribing from marketing emails, you may
            still receive transactional or service-related communications.
          </p>
        </section>

        {/* Data Security */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            Data Security
          </h2>
          <p style={paragraphStyle}>
            We implement appropriate technical and organizational measures to protect
            your personal information against unauthorized access, alteration, disclosure,
            or destruction. However, no method of transmission over the Internet or
            electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Children's Privacy */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            Children's Privacy
          </h2>
          <p style={paragraphStyle}>
            Our website is not intended for children under the age of 13. We do not
            knowingly collect personal information from children. If you believe we
            have collected information from a child, please contact us immediately.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            Changes to This Policy
          </h2>
          <p style={paragraphStyle}>
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page with an updated "Last updated" date. We encourage you
            to review this policy periodically for any updates.
          </p>
        </section>

        {/* Contact Us */}
        <section style={sectionStyle}>
          <h2 className="text-2xl md:text-3xl" style={headingStyle}>
            Contact Us
          </h2>
          <p style={paragraphStyle}>
            If you have any questions about this Privacy Policy or our privacy practices,
            please contact us at:
          </p>
          <div
            className="p-6 rounded-xl mt-4"
            style={{ backgroundColor: colors.background.isabelline }}
          >
            <p
              className="font-semibold mb-2"
              style={{
                fontFamily: typography.fontFamily.heading,
                color: colors.text.primary,
              }}
            >
              Breeze Fashion
            </p>
            <p style={paragraphStyle} className="mb-1">
              Build 29. No. 399 Xiarong Road, Wujiang, Suzhou, China
            </p>
            <p style={paragraphStyle} className="mb-1">
              Email:{' '}
              <a
                href="mailto:sales@breezeie.com"
                style={{ color: colors.primary }}
              >
                sales@breezeie.com
              </a>
            </p>
            <p style={paragraphStyle} className="mb-1">
              Phone: +86 (512) 65981751
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
