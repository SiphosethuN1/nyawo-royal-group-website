import React from 'react';
import { ArrowUpRight, Check, FileText, Briefcase, UserCheck, Search, Award, MessageSquare } from 'lucide-react';

interface CareerDevelopmentPageProps {
  onCareerAction: (service?: string) => void;
}

export const CareerDevelopmentPage: React.FC<CareerDevelopmentPageProps> = ({
  onCareerAction,
}) => {
  const services = [
    {
      title: 'Professional CV Writing',
      desc: 'Present your qualifications, experience, skills, and achievements in a clean, modern, recruiter-ready format tailored to specified roles where appropriate.',
      bullets: ['Professional layout & ATS structure', 'Clear presentation of qualifications', 'Relevant skills & experience highlighted', 'Improved professional wording'],
    },
    {
      title: 'CV Updating',
      desc: 'Keep your CV current as your qualifications, work experience, and technical competencies develop over time.',
      bullets: ['Review of existing document', 'Refinement of achievements', 'Addition of recent credentials'],
    },
    {
      title: 'Cover Letters',
      desc: 'Receive assistance preparing tailored cover letters aligned with the specific position and employer you are approaching.',
      bullets: ['Targeted role alignment', 'Clear introduction of key strengths', 'Professional tone & formatting'],
    },
    {
      title: 'Motivation Letters',
      desc: 'We help you present your reasons for applying, relevant strengths, and professional aspirations in a compelling, structured manner.',
      bullets: ['Bursaries, internships & entry roles', 'Articulating personal drive & values', 'Clear, impactful structure'],
    },
    {
      title: 'Job Application Assistance',
      desc: 'Get support with understanding complex application instructions, organising required certified documents, and completing online submissions.',
      bullets: ['Instruction interpretation', 'Document bundle organisation', 'Application portal completion'],
    },
    {
      title: 'Online Job Registration',
      desc: 'We assist with registration on selected employment platforms and databases, subject to platform requirements and availability.',
      bullets: ['Profile optimization', 'Keyword alignment', 'Platform profile setup'],
    },
    {
      title: 'Employment Database Registration',
      desc: 'We assist job seekers with registering on relevant employment databases to strengthen their visibility and participation in active job searches.',
      bullets: ['Database intake assistance', 'Candidate profile filing', 'Broadened search visibility'],
    },
    {
      title: 'Opportunity Notifications',
      desc: 'Where opportunities are available through our information channels, we share relevant vacancy information with registered clients.',
      bullets: ['Timely vacancy alerts', 'Notice: No guarantee of employment', 'Direct employer criteria links'],
    },
    {
      title: 'Career Guidance',
      desc: 'Discuss your qualifications, interests, skills, and potential pathways to help you make informed decisions about your professional journey.',
      bullets: ['Qualification mapping', 'Pathway exploration', 'Realistic market insight'],
    },
    {
      title: 'Interview Preparation',
      desc: 'Prepare for interviews by practising how to introduce yourself, explain your experience, answer common questions, and communicate with confidence.',
      bullets: ['Mock interview practice', 'Handling competency questions', 'Professional body language & poise'],
    },
  ];

  const targetAudience = [
    'Recent university and TVET college graduates',
    'Postgraduate students entering the professional sector',
    'Unemployed graduates seeking employment readiness',
    'First-time job seekers navigating the job market',
    'Individuals changing careers or industry tracks',
    'Professionals seeking to update their CV profiles',
    'Job seekers needing assistance with application paperwork',
  ];

  const steps = [
    { num: '01', title: 'Choose your service', desc: 'Select CV writing, updating, application assistance, or interview coaching.' },
    { num: '02', title: 'Submit your information', desc: 'Provide your existing CV, qualifications, experience, and target roles.' },
    { num: '03', title: 'Receive professional assistance', desc: 'We work closely with your details to prepare recruiter-grade documents.' },
    { num: '04', title: 'Take the next step', desc: 'Use your polished documents and preparation to pursue suitable opportunities.' },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FFFEFE] text-[#050100]">
      {/* Header Banner */}
      <section className="bg-[#050100] text-[#FFFEFE] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80"
            alt="Graduate preparing for professional career interview"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050100] via-[#050100]/90 to-transparent" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F7C206]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050100]/80 border border-[#F7C206]/40 text-[#F7C206] text-xs font-bold uppercase tracking-wider mb-6">
            PAGE 4: GRADUATE CAREER DEVELOPMENT
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFEFE] leading-[1.1] max-w-4xl mb-6">
            Career Development
            <br />
            <span className="text-[#F7C206]">Services.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#FCCF29] font-semibold mb-4">
            Your Qualifications Matter. Let Your Application Reflect Your Potential.
          </p>

          <p className="text-sm sm:text-base text-[#FCFCFC]/85 max-w-2xl leading-relaxed mb-8 font-normal">
            Entering the job market requires more than qualifications. You also need professional
            application documents, a clear understanding of job requirements, and the confidence to
            present your skills. Nyawo Royal Group provides the support you need.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onCareerAction('CV Writing')}
              className="px-7 py-3 rounded-full bg-[#F7C206] text-[#050100] font-bold text-sm hover:bg-[#FCCF29] transition-all cursor-pointer shadow-lg"
            >
              Request CV Assistance
            </button>
            <button
              onClick={() => onCareerAction('Career Guidance')}
              className="px-7 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:border-[#F7C206] hover:text-[#F7C206] transition-all cursor-pointer"
            >
              Get Career Support
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid (10 Services) */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-2">
            Career Preparation Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050100] tracking-tight">
            Our Career Services
          </h2>
          <p className="text-sm text-[#050100]/75 mt-2">
            Everything you need to navigate job portals, CV screens, and recruiter interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#FCFCFC] border border-gray-200 rounded-xs flex flex-col justify-between hover:border-[#F7C206] hover:shadow-lg transition-all group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#743F05] block mb-2">
                  Service {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <h3 className="text-xl font-bold text-[#050100] mb-3 group-hover:text-[#743F05] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs md:text-sm text-[#050100]/75 leading-relaxed mb-5 font-normal">
                  {s.desc}
                </p>

                <div className="space-y-2 pt-3 border-t border-gray-200 mb-6">
                  {s.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-[#050100]/85">
                      <Check className="w-3.5 h-3.5 text-[#F7C206] shrink-0 stroke-[3]" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onCareerAction(s.title)}
                className="w-full py-2.5 px-4 rounded-full border border-[#050100] text-xs font-bold text-[#050100] hover:bg-[#050100] hover:text-[#FFFEFE] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Enquire about this service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Who Should Use & Process */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Who Should Use */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block">
              Audience
            </span>
            <h3 className="text-3xl font-bold text-[#050100] tracking-tight">
              Who Should Use Our Services?
            </h3>
            <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
              Whether you are taking your very first step into the working world or transitioning
              to a new professional chapter, our services are structured for:
            </p>

            <div className="space-y-3 pt-2">
              {targetAudience.map((aud, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#FCFCFC] border border-gray-200 rounded-xs text-xs font-medium text-[#050100]">
                  <Check className="w-4 h-4 text-[#F7C206] shrink-0 stroke-[3]" />
                  <span>{aud}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="lg:col-span-7 space-y-6 bg-[#050100] text-[#FFFEFE] p-8 md:p-12 rounded-xs border-t-4 border-[#F7C206]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FCCF29] block">
              Workflow
            </span>
            <h3 className="text-3xl font-bold tracking-tight text-[#FFFEFE]">
              How It Works
            </h3>
            <p className="text-xs sm:text-sm text-[#FCFCFC]/80 leading-relaxed font-normal">
              A straightforward, transparent process designed to get your documents into employer hands quickly and professionally.
            </p>

            <div className="space-y-6 pt-4">
              {steps.map((st, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-[#4F2704]/60 last:border-0">
                  <div className="w-9 h-9 rounded-xs bg-[#F7C206] text-[#050100] font-bold text-sm flex items-center justify-center shrink-0">
                    {st.num}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#FFFEFE] mb-1">{st.title}</h4>
                    <p className="text-xs text-[#FCFCFC]/75 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-[1400px] mx-auto py-16 px-6 md:px-12">
        <div className="p-8 md:p-12 rounded-xs bg-[#FCFCFC] border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-2xl sm:text-3xl font-bold text-[#050100] mb-2">
              Give Your Career Search a Stronger Start.
            </h4>
            <p className="text-xs sm:text-sm text-[#050100]/75 max-w-xl">
              You have invested in your education. Let us help you present your qualifications
              professionally. Contact Nyawo Royal Group today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onCareerAction('CV Writing')}
              className="px-6 py-3 rounded-full bg-[#050100] text-[#FFFEFE] font-bold text-xs hover:bg-[#743F05] transition-all cursor-pointer"
            >
              Request CV Assistance
            </button>
            <button
              onClick={() => onCareerAction('Job Application Assistance')}
              className="px-6 py-3 rounded-full border border-[#050100] text-[#050100] font-semibold text-xs hover:bg-[#050100] hover:text-[#FFFEFE] transition-all cursor-pointer"
            >
              Enquire About Applications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
