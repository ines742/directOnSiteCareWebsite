import React from "react";

const Privacy = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#002D74] py-40 max-lg:py-28">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Privacy Policy
          </h1>

          <p className="text-lg leading-8 text-white/80 md:text-xl">
            Direct On Site Care is committed to protecting your privacy and
            safeguarding your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-5 space-y-14 text-slate-700">

          <p className="text-lg leading-8">
            This Privacy Policy describes how Direct On Site Care collects,
            uses, and protects information submitted through this website. By
            using our website, you agree to the practices outlined in this
            policy.
          </p>

          {/* Information We Collect */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#002D74]">
              Information We Collect
            </h2>

            <ul className="list-disc space-y-3 pl-6 leading-8">
              <li>Name and contact information provided through forms.</li>
              <li>Email address and phone number.</li>
              <li>Information submitted when requesting services or appointments.</li>
              <li>Website usage data collected through analytics tools.</li>
              <li>Device, browser, and IP address information.</li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#002D74]">
              How We Use Your Information
            </h2>

            <ul className="list-disc space-y-3 pl-6 leading-8">
              <li>To respond to inquiries and requests.</li>
              <li>To provide healthcare-related services and support.</li>
              <li>To schedule appointments and communicate with patients.</li>
              <li>To improve website performance and user experience.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
          </div>

          {/* Scheduling */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#002D74]">
              Appointment Scheduling
            </h2>

            <p className="leading-8">
              Our website may direct visitors to a third-party scheduling
              platform to request or manage appointments. Information submitted
              through those platforms is governed by the privacy policies and
              security practices of those providers.
            </p>
          </div>

          {/* HIPAA */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#002D74]">
              Healthcare Information & HIPAA
            </h2>

            <p className="leading-8">
              Direct On Site Care takes patient privacy seriously. Any protected
              health information (PHI) collected during the delivery of
              healthcare services is handled in accordance with applicable
              healthcare privacy laws and regulations, including HIPAA where
              applicable.
            </p>

            <p className="mt-4 leading-8">
              Please do not submit sensitive medical information through general
              website contact forms unless specifically requested.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#002D74]">
              Cookies & Analytics
            </h2>

            <p className="leading-8">
              We may use cookies and analytics tools to better understand how
              visitors use our website. This information helps us improve
              website functionality and user experience.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#002D74]">
              Data Security
            </h2>

            <p className="leading-8">
              We implement reasonable administrative, technical, and physical
              safeguards designed to protect personal information from
              unauthorized access, disclosure, alteration, or destruction.
            </p>
          </div>

          {/* Third Party */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#002D74]">
              Third-Party Links
            </h2>

            <p className="leading-8">
              This website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those external
              websites.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#002D74]">
              Changes to This Privacy Policy
            </h2>

            <p className="leading-8">
              Direct On Site Care reserves the right to update this Privacy
              Policy at any time. Any changes will be posted on this page with
              an updated effective date.
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-3xl bg-slate-50 p-8">
            <h2 className="mb-5 text-3xl font-bold text-[#002D74]">
              Contact Us
            </h2>

            <p className="leading-8">
              If you have questions regarding this Privacy Policy or how your
              information is handled, please contact Direct On Site Care.
            </p>

            <div className="mt-6 space-y-2">
              <p>
                <strong>Email:</strong> bcosens@directonsitecare.com
              </p>

              <p>
                <strong>Phone:</strong> (620) 249-9131
              </p>
            </div>
          </div>

          <p className="border-t pt-8 text-sm text-slate-500">
            Last Updated: May 2026
          </p>
        </div>
      </section>
    </>
  );
};

export default Privacy;