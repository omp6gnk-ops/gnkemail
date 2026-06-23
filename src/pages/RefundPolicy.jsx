import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-8 text-slate-700">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-extrabold text-slate-900">Refund Policy</h1>
        <p className="text-xs text-slate-400">Last updated: June 23, 2026</p>
      </div>

      <div className="space-y-6 text-xs md:text-sm leading-relaxed border-t border-slate-200/80 pt-8">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Overview</h2>
          <p>
            At GNK Education & Digital Services, we strive to deliver exceptional academic counseling, advisory, and digital mentoring services. Because our services are based on personalized professional hours, intellectual content delivery, and mentoring resources, we have structured our refund policies as detailed below.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Consultation & Counseling Services</h2>
          <p>
            Initial consultation sessions or match-profiling assessments are non-refundable once the session has commenced. If you need to reschedule a counseling session, you must notify us at least 24 hours in advance at <a href="mailto:sales@gnkedu.online" className="text-blue-600 font-semibold hover:underline">sales@gnkedu.online</a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Academic Project & Mentoring Programs</h2>
          <p>
            For long-term mentoring contracts, thesis support setups, or software project implementations, work is divided into specific stages/milestones:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Payments completed for milestone stages that have already been reviewed and delivered are non-refundable.</li>
            <li>If a program is cancelled by the student mid-way, a refund may be requested for any future milestones that have not yet been started or worked on.</li>
            <li>In cases where we are unable to deliver the scheduled mentoring hours or project support due to internal reasons, a full refund of that specific milestone fee will be processed immediately.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Processing of Refunds</h2>
          <p>
            Refund requests must be formally submitted in writing to our billing desk at <a href="mailto:sales@gnkedu.online" className="text-blue-600 font-semibold hover:underline">sales@gnkedu.online</a>. Please include your transaction details, service invoice, and a description of the issue. Approved refund requests are processed within 7-10 business days and returned via the original payment method.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
