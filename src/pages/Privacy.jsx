import React from 'react'

const Privacy = () => {
  return (
    <>
    {/* Hero */}
<section className="relative bg-brown-400/5 py-40 max-lg:py-28">
  <div className="container text-center max-w-3xl">
    <h1 className="mb-6 text-6xl font-black tracking-tight text-brown-400 max-md:text-4xl">
      Privacy Policy
    </h1>
    <p className="text-xl text-grey-400 max-md:text-lg">
      We respect your privacy. Learn how we collect, use, and safeguard your information.
    </p>
  </div>
</section>

{/* Content */}
<section className="py-32 max-lg:py-24">
  <div className="container max-w-4xl space-y-16 text-grey-400">

    <p className="body-1 leading-relaxed">
      This Privacy Policy governs the manner in which Skinny Drip LLC ("we," "us," or "our")
      collects, uses, protects, and discloses information collected from users ("User") of{" "}
      <a
        href="https://www.skinny-drip.com"
        target="_blank"
        rel="noreferrer"
        className="font-medium text-brown-400 underline underline-offset-4"
      >
        www.skinny-drip.com
      </a>{" "}
      (the "Site"). It applies to all services offered by Skinny Drip LLC ("Services").
    </p>

    <p className="body-1 leading-relaxed">
      By using our Site, you agree to the collection and use of information in accordance with
      this policy. We may update this Privacy Policy at any time without notice. Continued use
      of the Site after changes are posted constitutes acceptance of those changes.
    </p>

    <hr className="border-brown-400/20" />

    {/* Section */}
    <div className="space-y-6">
      <h3 className="h4 text-brown-600">1. What Information Do We Collect?</h3>
      <ul className="list-disc pl-6 space-y-3 body-1">
        <li><strong>Personal Information:</strong> Name, email, phone number, address, payment details.</li>
        <li><strong>Non-Personal Information:</strong> Browser type, IP address, device data, usage patterns.</li>
        <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies.</li>
      </ul>
    </div>

    <div className="space-y-6">
      <h3 className="h4 text-brown-600">2. How Do We Use Your Information?</h3>
      <ul className="list-disc pl-6 space-y-3 body-1">
        <li>To process transactions and deliver products or services.</li>
        <li>To personalize user experience and improve customer support.</li>
        <li>To send updates, offers, and newsletters (with opt-out options).</li>
        <li>To comply with legal requirements and prevent fraud.</li>
        <li>To conduct analytics and enhance site functionality.</li>
      </ul>
    </div>

    <div className="space-y-6">
      <h3 className="h4 text-brown-600">3. How Do We Protect Your Information?</h3>
      <ul className="list-disc pl-6 space-y-3 body-1">
        <li>Secure payment processing with encryption.</li>
        <li>Password-protected accounts with limited employee access.</li>
        <li>Routine security updates and monitoring.</li>
      </ul>
      <p className="italic text-sm text-grey-300">
        Note: No internet transmission is 100% secure. Use the Site at your own risk.
      </p>
    </div>

    <div className="space-y-6">
      <h3 className="h4 text-brown-600">4. Do We Share Your Information?</h3>
      <ul className="list-disc pl-6 space-y-3 body-1">
        <li><strong>We do not sell or rent your data.</strong></li>
        <li>Information may be shared with trusted third-party service providers.</li>
        <li>Disclosure may occur if required by law.</li>
        <li>In the event of a merger or sale, information may be transferred.</li>
      </ul>
    </div>

    <div className="space-y-6">
      <h3 className="h4 text-brown-600">5. How Can You Control Your Information?</h3>
      <ul className="list-disc pl-6 space-y-3 body-1">
        <li>Update or delete your profile through your account.</li>
        <li>Unsubscribe from emails via the link in our messages.</li>
        <li>Disable cookies in your browser (may limit site functionality).</li>
        <li>
          Contact us at{" "}
          <a
            href="mailto:contact@skinny-drip.com"
            className="font-medium text-brown-400 underline underline-offset-4"
          >
            contact@skinny-drip.com
          </a>{" "}
          for data-related requests.
        </li>
      </ul>
    </div>

    <div className="space-y-6">
      <h3 className="h4 text-brown-600">6. Children’s Privacy</h3>
      <p className="body-1">
        We do not knowingly collect personal data from children under the age of 13.
      </p>
    </div>

    <div className="space-y-6">
      <h3 className="h4 text-brown-600">7. Third-Party Links</h3>
      <p className="body-1">
        Our Site may contain links to third-party websites. We are not responsible for their
        privacy practices or content.
      </p>
    </div>

    <div className="space-y-6">
      <h3 className="h4 text-brown-600">8. Changes to This Policy</h3>
      <p className="body-1">
        We may revise this Privacy Policy periodically. Please review this page for updates.
      </p>
    </div>

    <div className="space-y-6">
      <h3 className="h4 text-brown-600">9. Contact Us</h3>
      <p className="body-1">
        If you have questions about this Privacy Policy, email us at{" "}
        <a
          href="mailto:contact@skinny-drip.com"
          className="font-medium text-brown-600 underline underline-offset-4"
        >
          contact@skinny-drip.com
        </a>
      </p>
    </div>

    <p className="pt-12 text-sm text-grey-300">
      <strong>Last Updated:</strong> January 5, 2025
    </p>
  </div>
</section>
</>
  )
}

export default Privacy