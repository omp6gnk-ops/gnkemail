import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-8 text-slate-700">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-900">Terms of Service</h1>
        <p className="text-xs text-slate-400">Last updated: June 23, 2026</p>
      </div>

      <div className="space-y-6 text-xs md:text-sm leading-relaxed border-t border-slate-200/80 pt-8">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by GNK Education & Digital Services ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Scope of Services</h2>
          <p>
            GNK Education & Digital Services provides academic advisory, university application mentorship, software project assistance, and programming skill mentoring. Our services are strictly educational and advisory in nature:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>University Admission Guidance:</strong> We provide matching algorithms and counseling profiles. We do not guarantee admission or seats in any college, which is at the sole discretion of the university boards.</li>
            <li><strong>Academic Project Assistance:</strong> We assist with research methodologies, code debugging, and software principles. Students are responsible for ensuring that all submissions comply with their university's academic integrity policies.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. User Conduct & Responsibilities</h2>
          <p>
            Users are expected to provide accurate, complete, and current information when filling out contact forms. Users agree not to use our services for any unauthorized or illegal purpose, including the direct violation of university plagiarism rules. All projects and code provided by us are intended as learning references and templates.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Intellectual Property</h2>
          <p>
            Unless otherwise indicated, all website designs, text, graphics, logos, and materials provided during mentoring sessions are the proprietary property of GNK Education & Digital Services and are protected by copyright laws. Code examples and software projects completed during skill-mentoring sessions are licensed to the student for personal educational use.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Limitation of Liability</h2>
          <p>
            In no event shall GNK Education & Digital Services, its directors, employees, or agents, be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of our services or website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">6. Governing Law</h2>
          <p>
            These terms and your use of our website and services are governed by and construed in accordance with the laws governing corporate entities in our registered jurisdiction, without regard to its conflict of law principles.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">7. Changes to Terms</h2>
          <p>
            We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time. We will alert you about any changes by updating the "Last updated" date of these Terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">8. Contact Information</h2>
          <p>
            For any clarifications or questions regarding these terms, please reach out to us at <a href="mailto:sales@gnkedu.online" className="text-blue-600 font-semibold hover:underline">sales@gnkedu.online</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
