import React, { useState } from 'react';
import { ArrowUpRight, Plus, X } from 'lucide-react';

interface FaqSectionProps {
  onAskQuestionClick: () => void;
}

const FAQS = [
  {
    id: 1,
    question: 'What subjects and grades are covered in Academic Tutoring?',
    answer:
      'We offer specialized tutoring in Mathematics, Physical Sciences, Life Sciences, and Agricultural Sciences. Our programmes cover extra classes for Grades 10 to 12, afternoon study sessions, weekend classes, holiday revision, and full Matric rewrite examination preparation.',
  },
  {
    id: 2,
    question: 'How does the Matric Rewrite Programme work?',
    answer:
      'If you need to improve your National Senior Certificate results, our structured programme provides topic-by-topic explanations, exam-focused revision, practice questions, mock examinations, and individual study planning. Enrolment and subject arrangements are confirmed during registration.',
  },
  {
    id: 3,
    question: 'Which heavy machines are included in Operator Training?',
    answer:
      'Our practical heavy construction machinery programmes cover Articulated Dump Trucks (ADT), Excavators, Bulldozers, and Tractor Loader Backhoes (TLB), along with other yellow plant equipment subject to availability. We emphasize hands-on operation and safety compliance.',
  },
  {
    id: 4,
    question: 'How do your Career Development services assist job seekers?',
    answer:
      'We assist graduates and job seekers with modern, ATS-friendly CV writing and updating, tailored cover and motivation letters, job application assistance, career guidance, interview preparation, and registration on relevant employment databases.',
  },
  {
    id: 5,
    question: 'What should I know before registering for Security Training?',
    answer:
      'We advise contacting our team to confirm current programme schedules, entry/age requirements, assessment procedures, training duration, and applicable South African regulatory certification standards.',
  },
  {
    id: 6,
    question: 'What types of Legal Services do you provide?',
    answer:
      'Our qualified attorney and legal team assist with legal advice consultations, contract drafting and review, affidavits and commissioner of oaths services, labour law and workplace disputes, family law, property assistance, business compliance, and wills/estate planning under strict confidentiality.',
  },
];

export const FaqSection: React.FC<FaqSectionProps> = ({
  onAskQuestionClick,
}) => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#FFFEFE] py-24 md:py-36 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 pb-6 border-b border-gray-200">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05]">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#050100] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#050100]">
            <span>Questions? We've got clear answers for you</span>
            <span className="w-2 h-2 bg-[#F7C206] inline-block shrink-0 shadow-sm" />
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Left Column: Explainer and CTA */}
          <div className="lg:col-span-5 space-y-12">
            <p className="text-base text-[#050100]/80 leading-relaxed font-normal">
              Find transparent answers about our academic tutoring schedules, heavy machinery
              training modules, graduate CV preparation, security training, and legal consultations.
            </p>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <p className="text-sm font-bold text-[#050100]">
                Need more specific guidance?
              </p>
              <button
                onClick={onAskQuestionClick}
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#050100] text-[#FFFEFE] text-sm font-bold transition-all duration-300 hover:bg-[#F7C206] hover:text-[#050100] hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Ask our team directly</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 divide-y divide-gray-200 border-t border-b border-gray-200">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-5">
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-bold text-[#050100] tracking-tight group-hover:text-[#743F05] transition-colors">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-full text-[#050100] group-hover:text-[#743F05] transition-colors shrink-0">
                      {isOpen ? (
                        <X className="w-5 h-5 text-[#F7C206]" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pb-2 pr-6 animate-fade-in">
                      <p className="text-sm md:text-base text-[#050100]/75 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
