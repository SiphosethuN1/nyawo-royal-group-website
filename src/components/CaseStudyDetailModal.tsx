import React from 'react';
import { X, ArrowUpRight, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { CaseStudy } from '../utils/advisory';

interface CaseStudyDetailModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onConsultationClick: (studyTitle: string) => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyDetailModalProps> = ({
  study,
  onClose,
  onConsultationClick,
}) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050100]/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFFEFE] text-[#050100] rounded-xl shadow-2xl border-t-4 border-[#F7C206] overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#050100]/60 text-white hover:bg-[#F7C206] hover:text-[#050100] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner Image */}
        <div className="relative h-60 w-full overflow-hidden bg-[#050100]">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050100] via-[#050100]/40 to-transparent" />

          {/* Badge & Impact Pill */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <span className="px-3 py-1 rounded-full bg-[#FFFEFE] text-[#050100] text-xs font-bold tracking-tight shadow">
              {study.category}
            </span>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050100]/85 backdrop-blur-md border border-[#F7C206] text-xs font-semibold text-[#F7C206]">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{study.impactMetric}</span>
              <span className="text-[#FCCF29] font-normal">{study.metricLabel}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-10 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#050100] mb-3">
              {study.title}
            </h3>
            <p className="text-sm md:text-base text-[#050100]/75 leading-relaxed font-normal">
              {study.description}
            </p>
          </div>

          {/* Programme Highlights */}
          <div className="space-y-3 pt-2 border-t border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#743F05]">
              Core Methodologies & Support Framework
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3 text-xs md:text-sm text-[#050100]/85">
                <CheckCircle className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5" />
                <span>Personalised assessments to diagnose specific learning or training requirements.</span>
              </div>
              <div className="flex items-start gap-3 text-xs md:text-sm text-[#050100]/85">
                <CheckCircle className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5" />
                <span>Hands-on practice, verified past examination papers, and industry-standard machine operations.</span>
              </div>
              <div className="flex items-start gap-3 text-xs md:text-sm text-[#050100]/85">
                <CheckCircle className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5" />
                <span>Transparent guidance, regular feedback, and ongoing career readiness or legal assistance.</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-[#743F05]" />
              <span>Nyawo Royal Group (Pty) Ltd • Othobothini</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onConsultationClick(study.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#050100] hover:bg-[#F7C206] hover:text-[#050100] text-[#FFFEFE] text-xs md:text-sm font-bold transition-all duration-300 shadow cursor-pointer group"
            >
              <span>Enquire About This Service</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
