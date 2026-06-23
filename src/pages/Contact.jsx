import React, { useState } from 'react';
import { Mail, Clock, Send, MessageSquare, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Admission Guidance',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate contact form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Admission Guidance', message: '' });
    }, 5000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 uppercase tracking-wider">
          Get In Touch
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Contact Our Inquiries Desk
        </h1>
        <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Have questions about university placements, software code reviews, or educational mentoring? Get in touch with our team of advisors today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-slate-200/80 pt-12">
        {/* Contact Info Card */}
        <div className="md:col-span-5 space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">Contact Details</h2>
          <p className="text-xs md:text-sm text-slate-550 leading-relaxed">
            Our support desk is dedicated to offering student counseling. Feel free to write to us or submit the online contact form.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-650 flex items-center justify-center shrink-0 border border-blue-100">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Sales & Inquiries</span>
                <a href="mailto:sales@gnkedu.online" className="text-xs md:text-sm text-slate-700 font-bold hover:text-blue-600 transition-colors">
                  sales@gnkedu.online
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-650 flex items-center justify-center shrink-0 border border-blue-100">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Operational Hours</span>
                <span className="text-xs md:text-sm text-slate-700 font-semibold block">
                  Monday to Friday: 9:00 AM – 6:00 PM (IST)
                </span>
                <span className="text-[10px] text-slate-450 block mt-0.5">Average email response time: &lt; 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="md:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
            <MessageSquare className="w-4.5 h-4.5 text-blue-600" />
            Send a Message
          </h3>

          {isSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
              <h4 className="font-extrabold text-emerald-800 text-sm">Message Sent Successfully!</h4>
              <p className="text-xs text-slate-500 leading-normal max-w-xs mx-auto">
                Thank you for contacting us. A student counselor from GNK Education will review your inquiry and reach back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-805 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-805 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Inquiry Area</label>
                <select 
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer"
                >
                  <option value="Admission Guidance">University Admission Guidance</option>
                  <option value="Project Support">Academic Project & Research Support</option>
                  <option value="Skill Mentoring">Digital Skill Mentoring & Programming</option>
                  <option value="Other">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Detailed Message</label>
                <textarea 
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your inquiry or requirement..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-805 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full btn-primary !py-3 !text-xs font-bold !bg-blue-600 hover:!bg-blue-750 shadow-[0_4px_14px_rgba(37,99,235,0.2)]"
              >
                Send Inquiry Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
