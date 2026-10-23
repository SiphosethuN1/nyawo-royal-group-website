import React from 'react';
import { ArrowUpRight, Check, Shield, AlertCircle, Info, MessageSquare, Award, Users } from 'lucide-react';

interface SecurityTrainingPageProps {
  onSecurityAction: () => void;
}

export const SecurityTrainingPage: React.FC<SecurityTrainingPageProps> = ({
  onSecurityAction,
}) => {
  const targetProfiles = [
    'Individuals interested in pursuing a disciplined career in private and commercial security.',
    'Candidates wanting to understand the formal training requirements for relevant security roles.',
    'Job seekers needing structured guidance on available training options and intake dates.',
    'Individuals seeking to explore potential employment pathways within the growing security sector.',
  ];

  const verificationPoints = [
    'Available security training programmes and levels',
    'Entry and age requirements, where applicable',
    'Training duration, schedule, and training facility location',
    'Total programme fees and payment arrangements',
    'Registration and formal assessment arrangements',
    'Applicable South African regulatory compliance requirements',
    'Recognition, status, and validity of the qualification or certificate',
    'Potential employment pathway support and industry links after training',
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FFFEFE] text-[#050100]">
      {/* Header Banner */}
      <section className="bg-[#050100] text-[#FFFEFE] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2000&q=80"
            alt="Security personnel and training facility"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050100] via-[#050100]/90 to-transparent" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F7C206]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050100]/80 border border-[#F7C206]/40 text-[#F7C206] text-xs font-bold uppercase tracking-wider mb-6">
            PAGE 6: SECURITY TRAINING
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFEFE] leading-[1.1] max-w-4xl mb-6">
            Security Training
            <br />
            <span className="text-[#F7C206]">Services.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#FCCF29] font-semibold mb-4">
            Develop Your Skills. Prepare for Your Next Opportunity.
          </p>

          <p className="text-sm sm:text-base text-[#FCFCFC]/85 max-w-2xl leading-relaxed mb-8 font-normal">
            The security sector requires individuals who understand their responsibilities, follow
            applicable procedures, and approach their work professionally. Nyawo Royal Group offers
            security training services to individuals interested in pursuing opportunities in the
            security field.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onSecurityAction}
              className="px-7 py-3 rounded-full bg-[#F7C206] text-[#050100] font-bold text-sm hover:bg-[#FCCF29] transition-all cursor-pointer shadow-lg"
            >
              Enquire About Security Training
            </button>
            <button
              onClick={onSecurityAction}
              className="px-7 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:border-[#F7C206] hover:text-[#F7C206] transition-all cursor-pointer"
            >
              Request Programme Details
            </button>
          </div>
        </div>
      </section>

      {/* Overview & Audience */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block">
              Candidate Suitability
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#050100] tracking-tight">
              Who Is This Programme For?
            </h2>
            <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
              We assist prospective trainees with information about available programmes, entry
              requirements, training arrangements, and relevant registration or certification requirements.
            </p>

            <div className="space-y-3 pt-2">
              {targetProfiles.map((tp, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-[#FCFCFC] border border-gray-200 rounded-xs">
                  <Check className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5 stroke-[3]" />
                  <span className="text-xs md:text-sm text-[#050100]/85">{tp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Details */}
          <div className="lg:col-span-7 bg-[#050100] text-[#FFFEFE] p-8 md:p-12 rounded-xs border-t-4 border-[#F7C206]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FCCF29] block mb-2">
              Transparency First
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFEFE] mb-4">
              What You Should Know Before Registering
            </h3>
            <p className="text-xs sm:text-sm text-[#FCFCFC]/80 leading-relaxed font-normal mb-6">
              Contact our team to confirm all arrangements prior to registration:
            </p>

            <div className="space-y-3 mb-6">
              {verificationPoints.map((vp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#FCFCFC]/90">
                  <Check className="w-4 h-4 text-[#F7C206] shrink-0 stroke-[2.5]" />
                  <span>{vp}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xs text-[11px] text-[#FCCF29] leading-relaxed">
              Training, registration, and certification arrangements depend on the relevant
              programme and applicable South African regulatory requirements.
            </div>
          </div>
        </div>
      </section>

      {/* Employment Pathways & Support */}
      <section className="max-w-[1400px] mx-auto py-20 px-6 md:px-12">
        <div className="p-8 md:p-12 rounded-xs bg-[#FCFCFC] border border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block">
              Career Assistance
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#050100]">
              Training & Employment Support
            </h3>
            <p className="text-xs sm:text-sm text-[#050100]/80 leading-relaxed font-normal">
              We also assist with information about potential employment pathways and job placement
              support, subject to available opportunities and employer requirements.
            </p>
            <div className="p-3 bg-gray-100 rounded-xs text-[11px] text-[#050100]/70 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#743F05] shrink-0" />
              <span>Completion of training does not guarantee employment.</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={onSecurityAction}
              className="w-full py-3.5 px-6 rounded-full bg-[#050100] text-[#FFFEFE] font-bold text-xs uppercase tracking-wider hover:bg-[#743F05] transition-all cursor-pointer shadow-md text-center"
            >
              Enquire About Training
            </button>
            <a
              href="https://wa.me/27796339234"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-full border border-[#050100] text-[#050100] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#050100] hover:text-[#FFFEFE] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
