import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-8 text-slate-700">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: June 23, 2026</p>
      </div>

      <div className="space-y-6 text-xs md:text-sm leading-relaxed border-t border-slate-200/80 pt-8">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Introduction</h2>
          <p>
            Welcome to GNK Education & Digital Services. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:sales@gnkedu.online" className="text-blue-600 font-semibold hover:underline">sales@gnkedu.online</a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services, when submitting contact forms, or when subscribing to our educational counseling programs.
          </p>
          <p className="font-semibold text-slate-800">The personal information we collect may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name and contact details (email address, telephone number, etc.)</li>
            <li>Academic credentials and history (for university guidance match profiling)</li>
            <li>Course preferences and educational goals</li>
            <li>Information related to software code or research project requirements</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business and educational purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To facilitate counseling and university matchmaking services.</li>
            <li>To review and respond to project assistance inquiries.</li>
            <li>To deliver software project mentoring, code reviews, and programming tutorials.</li>
            <li>To send administrative information, service updates, and answer queries.</li>
            <li>To comply with legal obligations and prevent fraud.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Sharing and Protecting Your Information</h2>
          <p>
            We only share information with your explicit consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. Your academic records, personal transcripts, and project source codes are treated with strict confidentiality.
          </p>
          <p>
            We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Your Privacy Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights under applicable data protection laws. These may include the right to request access and obtain a copy of your personal information, to request rectification or erasure, to restrict the processing of your personal information, and, if applicable, to data portability.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">6. Updates to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">7. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at <a href="mailto:sales@gnkedu.online" className="text-blue-600 font-semibold hover:underline">sales@gnkedu.online</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
