import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  Users,
  GraduationCap,
  Briefcase,
  Truck,
  Shield,
  Scale,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Academic Support');
  const [enquiry, setEnquiry] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const contactDivisions = [
    {
      title: 'Academic Support',
      desc: 'Ask about subjects, class schedules, matric rewrite programmes, and tutoring fees.',
      icon: GraduationCap,
    },
    {
      title: 'Career Development',
      desc: 'Ask about CV writing, job applications, interview preparation, and database registration.',
      icon: Briefcase,
    },
    {
      title: 'Operator Training',
      desc: 'Ask about machinery training, availability, entry requirements, and certification details.',
      icon: Truck,
    },
    {
      title: 'Security Training',
      desc: 'Ask about available programmes, entry qualifications, and relevant sector requirements.',
      icon: Shield,
    },
    {
      title: 'Legal Services',
      desc: 'Request information about consultations and the legal services relevant to your matter.',
      icon: Scale,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FFFEFE] text-[#050100]">
      {/* Header Banner */}
      <section className="bg-[#050100] text-[#FFFEFE] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
            alt="Office workspace and executive advisory center"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050100] via-[#050100]/90 to-transparent" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F7C206]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050100]/80 border border-[#F7C206]/40 text-[#F7C206] text-xs font-bold uppercase tracking-wider mb-6">
            PAGE 9: CONTACT US
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFEFE] leading-[1.1] max-w-4xl mb-6">
            Get in Touch With
            <br />
            <span className="text-[#F7C206]">Nyawo Royal Group.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#FCCF29] font-semibold mb-4">
            We Are Ready to Hear From You.
          </p>

          <p className="text-sm sm:text-base text-[#FCFCFC]/85 max-w-2xl leading-relaxed font-normal">
            Have a question about tutoring, matric rewrites, career development, operator training,
            security training, or legal services? Contact Nyawo Royal Group (Pty) Ltd. Tell us what
            you need, and our team will guide you towards the relevant service and next steps.
          </p>
        </div>
      </section>

      {/* Main 2-Column: Company Details & Form */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Company Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-1">
                Headquarters
              </span>
              <h2 className="text-3xl font-bold text-[#050100] tracking-tight">
                Our Company Details
              </h2>
            </div>

            <div className="p-8 bg-[#FCFCFC] border border-gray-200 rounded-xs space-y-6 shadow-sm">
              <div className="space-y-2 pb-4 border-b border-gray-200">
                <img
                  src="/images/logo.png"
                  alt="Nyawo Royal Group Logo"
                  className="h-14 w-auto object-contain mb-2"
                />
                <span className="text-[11px] font-mono font-bold text-[#743F05] uppercase block">
                  Registered Company
                </span>
                <h4 className="text-xl font-bold text-[#050100]">
                  Nyawo Royal Group (Pty) Ltd
                </h4>
                <p className="text-xs text-[#050100]/70">
                  Established 2026 • South Africa
                </p>
              </div>

              <div className="space-y-1 pb-4 border-b border-gray-200">
                <span className="text-[11px] font-mono font-bold text-[#743F05] uppercase">
                  Company Directors
                </span>
                <p className="text-sm font-semibold text-[#050100]">
                  Mr. Sakhile Nyawo
                </p>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-[#050100]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#050100] block">Location</span>
                    <span>Othobothini, South Africa</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#050100] block">Telephone</span>
                    <span>+27 (0) 69 498 6318</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#050100] block">WhatsApp</span>
                    <span>+27 (0) 69 498 6318</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#050100] block">Business Email</span>
                    <span>sakhilew@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#050100] block">Confirmed Business Hours</span>
                    <span>Monday – Friday: 08:00 – 17:00 | Saturday: 08:30 – 13:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#050100] text-[#FFFEFE] rounded-xs space-y-3">
              <h5 className="text-sm font-bold text-[#F7C206]">Direct Communication Channel</h5>
              <p className="text-xs text-[#FCFCFC]/80 leading-relaxed font-normal">
                Prefer instant messaging? Connect with our dedicated enquiries team on WhatsApp for
                quick timetable and registration updates.
              </p>
              <a
                href="https://wa.me/27694986318"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7C206] text-[#050100] font-bold text-xs hover:bg-[#FCCF29] transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-[#FCFCFC] border border-gray-200 rounded-xs p-8 md:p-12 shadow-xl border-t-4 border-[#050100]">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-1">
                Reach Out
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#050100]">
                Send Us an Enquiry
              </h3>
              <p className="text-xs text-[#050100]/70 mt-1">
                Use our contact form to tell us how we should assist you.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#F7C206]/20 text-[#743F05] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-bold text-[#050100]">
                  Message Sent Successfully
                </h4>
                <p className="text-sm text-[#050100]/80 max-w-sm mx-auto leading-relaxed">
                  Thank you, {fullName}. Our administrative team in Othobothini will review your
                  enquiry regarding <span className="font-semibold">{service}</span> and reach out to
                  you promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFullName('');
                    setPhone('');
                    setEmail('');
                    setEnquiry('');
                  }}
                  className="mt-4 px-6 py-2.5 text-xs font-bold rounded-full bg-[#050100] text-[#FFFEFE] hover:bg-[#743F05] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1.5">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xs text-sm text-[#050100] focus:outline-none focus:border-[#050100] bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#050100] mb-1.5">
                      Telephone / WhatsApp Number*
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 072 123 4567"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xs text-sm text-[#050100] focus:outline-none focus:border-[#050100] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#050100] mb-1.5">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. you@example.co.za"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xs text-sm text-[#050100] focus:outline-none focus:border-[#050100] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1.5">
                    Service of Interest*
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xs text-sm text-[#050100] bg-white focus:outline-none focus:border-[#050100] cursor-pointer"
                  >
                    <option value="Academic Support">Academic Support (Tutoring & Matric Rewrite)</option>
                    <option value="Career Development">Career Development (CVs & Job Prep)</option>
                    <option value="Operator Training">Operator Training (Heavy Machinery)</option>
                    <option value="Security Training">Security Training Services</option>
                    <option value="Legal Services">Legal Services & Advice</option>
                    <option value="General Information">General Company Enquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1.5">
                    Your Enquiry*
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={enquiry}
                    onChange={(e) => setEnquiry(e.target.value)}
                    placeholder="Tell us what you need and how our team can help you..."
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xs text-sm text-[#050100] focus:outline-none focus:border-[#050100] bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 rounded-full bg-[#050100] text-[#FFFEFE] font-bold text-sm uppercase tracking-wider hover:bg-[#743F05] transition-all cursor-pointer shadow-lg active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>{submitting ? 'Sending Enquiry...' : 'Send My Enquiry'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F7C206]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* "Contact Us About" Breakdown */}
      <section className="max-w-[1400px] mx-auto py-20 px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-1">
            Departmental Directory
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#050100]">
            Contact Us About
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {contactDivisions.map((div, idx) => {
            const Icon = div.icon;
            return (
              <div key={idx} className="p-6 bg-[#FCFCFC] border border-gray-200 rounded-xs space-y-3">
                <div className="w-10 h-10 rounded-xs bg-gray-100 flex items-center justify-center text-[#050100]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#050100]">{div.title}</h4>
                <p className="text-xs text-[#050100]/75 leading-relaxed font-normal">{div.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Final Motto */}
        <div className="mt-16 text-center p-10 bg-[#050100] text-[#FFFEFE] rounded-xs space-y-3">
          <h4 className="text-2xl font-bold text-[#FFFEFE]">
            Let Us Help You Move Forward.
          </h4>
          <p className="text-xs md:text-sm text-[#FCFCFC]/80 max-w-lg mx-auto">
            Your enquiry is the first step towards finding the support you need.
          </p>
          <div className="pt-2">
            <span className="inline-block px-5 py-2 rounded-full bg-[#F7C206] text-[#050100] font-bold text-xs">
              Nyawo Royal Group (Pty) Ltd • Othobothini
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
