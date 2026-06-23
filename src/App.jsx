import React from 'react';
import { 
  GraduationCap, 
  FileText, 
  Laptop, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Users,
  ExternalLink,
  BookOpen
} from 'lucide-react';

// Configuration: Change this URL to point to your deployed Email Sender SaaS dashboard
const SAAS_PORTAL_URL = "https://email-sender-dashboard.vercel.app"; // Or change to "/app/campaigns" if hosting on the same domain

function App() {
  const services = [
    {
      title: 'University Admission Guidance',
      desc: 'Expert mentoring for students navigating college selection, application processes, and course registry approvals.',
      icon: GraduationCap,
      color: 'bg-blue-50 border-blue-100 text-blue-600',
      bullets: [
        'Personalized college & course match profiling',
        'SOP & Letter of Recommendation mentoring',
        'Direct admission process counseling',
        'Scholarship and financial aid applications'
      ]
    },
    {
      title: 'Document Processing & CSC Services',
      desc: 'Accurate digitization, certificate verification, and Common Service Centre (CSC) utility registry services.',
      icon: FileText,
      color: 'bg-indigo-50 border-indigo-100 text-indigo-600',
      bullets: [
        'Online government registrations & filings',
        'Official transcripts and certificate verification',
        'Secure scanning, uploading, and translation support',
        'Fast-track verification tracking'
      ]
    },
    {
      title: 'Academic Project Assistance',
      desc: 'Guidance on structural research formatting, code implementations, software execution, and plagiarism testing.',
      icon: Laptop,
      color: 'bg-emerald-50 border-emerald-100 text-emerald-600',
      bullets: [
        'Thesis research methodology structure support',
        'Software implementation (Web, AI, Data Science)',
        'Comprehensive documentation & presentation slides',
        'Turnitin plagiarism reports & corrections'
      ]
    }
  ];

  const highlights = [
    { title: 'Verified Experts', desc: 'Our team comprises certified academic advisors and seasoned tech specialists.', icon: Users },
    { title: 'Data Confidentiality', desc: 'We protect your records and project source codes using secure uploads.', icon: ShieldCheck },
    { title: 'Verified Results', desc: 'Successfully helped 1,500+ students secure seats in prestigious colleges globally.', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute top-[60vh] right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 h-16 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-650 flex items-center justify-center shadow-md">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-base md:text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
            GNK Education
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="mailto:hello@gnkedu.online"
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <Mail className="w-4 h-4 text-blue-600" />
            hello@gnkedu.online
          </a>
          <a 
            href={SAAS_PORTAL_URL} 
            className="flex items-center gap-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-700 px-3.5 py-1.5 rounded-lg transition-all"
          >
            Client Portal
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 tracking-wide uppercase">
            Official Academic Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            Empowering Students with <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-650 to-indigo-700">
              Academic Support & Digital Services
            </span>
          </h1>
          <p className="text-sm md:text-base text-slate-550 leading-relaxed max-w-lg">
            GNK Education & Digital Services guides your academic journey. From securing university placements to processing crucial documents and delivering tailored software project assistance, we provide reliable, secure, and professional guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#services"
              className="btn-primary flex items-center justify-center gap-2 !py-3 !px-6 !text-xs font-bold !bg-blue-600 hover:!bg-blue-700 cursor-pointer shadow-[0_4px_14px_rgba(37,99,235,0.2)]"
            >
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href={SAAS_PORTAL_URL}
              className="btn-secondary flex items-center justify-center gap-2 !py-3 !px-6 !text-xs font-bold cursor-pointer"
            >
              Get Started / Login
            </a>
          </div>
        </div>

        {/* Hero Decorative Mockup */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          <div className="relative w-80 h-96 bg-white border border-slate-200/85 rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_12px_50px_rgba(0,0,0,0.05)] hover:scale-[1.01]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
              <span className="text-xs font-extrabold text-slate-900 tracking-tight">Active Consultations</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">B.Tech Admission</span>
                  <span className="text-xs text-slate-800 font-semibold">Verification Approved</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <FileText className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">CSC Portal Registry</span>
                  <span className="text-xs text-slate-800 font-semibold">12 Documents Processed</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Laptop className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">React Mini Project</span>
                  <span className="text-xs text-slate-800 font-semibold">Code Review Complete</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-4 text-center">
              <span className="text-[10px] text-slate-450">Total Consultations: <strong className="text-blue-600">99.8% Approval</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white border-y border-slate-200/60 py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">Expertise Fields</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">Our Professional Offerings</h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto">
              We leverage years of experience in the digital and education sectors to offer comprehensive guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card p-6 flex flex-col justify-between border border-slate-200/85 hover:border-blue-400/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="space-y-5">
                    {/* Icon Box */}
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${svc.color}`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-extrabold text-slate-900 text-base">{svc.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{svc.desc}</p>
                    </div>

                    {/* Bullet List */}
                    <ul className="space-y-2 pt-2 border-t border-slate-100">
                      {svc.bullets.map((bullet, bidx) => (
                        <li key={bidx} className="flex items-start gap-2 text-xs text-slate-655">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="mailto:hello@gnkedu.online"
                      className="text-xs text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 group"
                    >
                      Inquire Details 
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">Service Standards</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">Why Choose GNK Services?</h2>
            <p className="text-sm text-slate-550 leading-relaxed">
              We understand the pressures students face regarding admission documentation, deadlines, and project submissions. Our agency delivers transparent pricing, prompt answers, and professional mentorship.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/80 rounded-xl p-5 space-y-3.5 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-normal mt-1">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-850 text-white py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Have an Academic or Digital Service Query?</h2>
          <p className="text-sm text-blue-100 max-w-lg mx-auto leading-relaxed">
            Reach out directly. Our support staff is active to answer admissions questions, CSC processing criteria, and project guidelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a 
              href="mailto:hello@gnkedu.online"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-700 font-bold px-6 py-3 rounded-lg text-xs transition-all shadow-md hover:scale-[1.01]"
            >
              <Mail className="w-4 h-4" />
              hello@gnkedu.online
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 md:px-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              GNK Education & Digital Services
            </span>
          </div>

          <div className="flex gap-6 text-xs font-semibold text-slate-400">
            <a href="mailto:hello@gnkedu.online" className="hover:text-white transition-colors">hello@gnkedu.online</a>
            <a href={SAAS_PORTAL_URL} className="hover:text-white transition-colors flex items-center gap-1">Client Portal <ExternalLink className="w-3 h-3" /></a>
          </div>

          <div className="text-center md:text-right text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} GNK Education & Digital Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
