import React from 'react';
import { ArrowUpRight, Check, BookOpen, GraduationCap, Calendar, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';

interface AcademicTutoringPageProps {
  onRegisterClick: (subject?: string) => void;
}

export const AcademicTutoringPage: React.FC<AcademicTutoringPageProps> = ({
  onRegisterClick,
}) => {
  const subjects = [
    {
      name: 'Mathematics',
      desc: 'Strengthen your understanding of mathematical concepts, develop problem-solving skills, and practise applying methods to examination questions.',
      tag: 'Grades 10–12 & Rewrite',
    },
    {
      name: 'Physical Sciences',
      desc: 'Build a stronger foundation in physics and chemistry concepts through guided explanations, worked examples, and examination-focused practice.',
      tag: 'Physics & Chemistry',
    },
    {
      name: 'Life Sciences',
      desc: 'Improve your understanding of biological concepts, scientific terminology, diagrams, and structured examination answers.',
      tag: 'Biology & Genetics',
    },
    {
      name: 'Agricultural Sciences',
      desc: 'Develop your understanding of agricultural principles, production systems, relevant scientific concepts, and subject-specific examination techniques.',
      tag: 'Principles & Systems',
    },
  ];

  const matricRewritePoints = [
    'Subject revision & syllabus mastery',
    'Topic-by-topic clear explanations',
    'Past examination papers & revision guidance',
    'Practice questions & worked solutions',
    'Full mock examinations under exam conditions',
    'Individual academic guidance & support',
    'Custom study planning & time management',
  ];

  const extraClassesPoints = [
    'Afternoon study sessions throughout term time',
    'Weekend classes for in-depth topic review',
    'School holiday intensive revision programmes',
    'Daily homework assistance and troubleshooting',
    'Test and major examination preparation',
    'Essential study skills & memory techniques',
    'Time management guidance for learner balance',
    'Subject-specific revision and practice drilling',
  ];

  const steps = [
    { num: 'Step 1', title: 'Make an enquiry', desc: "Tell us the learner's grade and required subjects." },
    { num: 'Step 2', title: 'Discuss your needs', desc: 'We explain available classes, arrangements, and applicable fees.' },
    { num: 'Step 3', title: 'Confirm registration', desc: 'Complete the required registration process.' },
    { num: 'Step 4', title: 'Begin learning', desc: 'Follow the agreed timetable and learning programme.' },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FFFEFE] text-[#050100]">
      {/* Banner */}
      <section className="bg-[#050100] text-[#FFFEFE] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=2000&q=80"
            alt="Students studying mathematics and science in classroom"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050100] via-[#050100]/90 to-transparent" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F7C206]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050100]/80 border border-[#F7C206]/40 text-[#F7C206] text-xs font-bold uppercase tracking-wider mb-6">
            PAGE 3: ACADEMIC TUTORING
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFEFE] leading-[1.1] max-w-4xl mb-6">
            Academic Tutoring &
            <br />
            <span className="text-[#F7C206]">Learner Support.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#FCCF29] font-semibold mb-4">
            Understand More. Perform Better. Reach Your Goals.
          </p>

          <p className="text-sm sm:text-base text-[#FCFCFC]/85 max-w-2xl leading-relaxed mb-8 font-normal">
            Every learner deserves the opportunity to understand their subjects, build confidence,
            and prepare effectively for examinations. Nyawo Royal Group provides structured programmes
            designed to strengthen subject knowledge and help learners excel.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onRegisterClick('Academic Tutoring')}
              className="px-7 py-3 rounded-full bg-[#F7C206] text-[#050100] font-bold text-sm hover:bg-[#FCCF29] transition-all cursor-pointer shadow-lg"
            >
              Register for Tutoring
            </button>
            <button
              onClick={() => onRegisterClick('Matric Rewrite')}
              className="px-7 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:border-[#F7C206] hover:text-[#F7C206] transition-all cursor-pointer"
            >
              Enquire About Matric Rewrite
            </button>
          </div>
        </div>
      </section>

      {/* Subjects We Offer */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-2">
            Subject Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050100] tracking-tight">
            Subjects We Offer
          </h2>
          <p className="text-sm text-[#050100]/75 mt-2">
            Comprehensive curriculum guidance mapped to South African CAPS and examination standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((sub, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#FCFCFC] border border-gray-200 rounded-xs flex flex-col justify-between hover:border-[#F7C206] hover:shadow-xl transition-all group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#743F05] bg-[#F7C206]/20 px-2.5 py-1 rounded-xs inline-block mb-4">
                  {sub.tag}
                </span>
                <h3 className="text-xl font-bold text-[#050100] mb-3 group-hover:text-[#743F05] transition-colors">
                  {sub.name}
                </h3>
                <p className="text-xs md:text-sm text-[#050100]/75 leading-relaxed font-normal">
                  {sub.desc}
                </p>
              </div>

              <button
                onClick={() => onRegisterClick(sub.name)}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#050100] hover:text-[#743F05] transition-colors cursor-pointer pt-4 border-t border-gray-200"
              >
                <span>Enquire about {sub.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Matric Rewrite & Extra Classes 2-Column Split */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Matric Rewrite */}
          <div className="bg-[#050100] text-[#FFFEFE] p-8 md:p-12 rounded-xs border-t-4 border-[#F7C206] shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FCCF29] block mb-2">
              National Senior Certificate Upgrade
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFEFE] mb-4">
              Matric Rewrite Programme
            </h3>
            <p className="text-xs font-semibold text-[#F7C206] mb-4">
              Another Opportunity to Improve Your Results.
            </p>
            <p className="text-xs sm:text-sm text-[#FCFCFC]/80 leading-relaxed font-normal mb-6">
              If you want to improve your National Senior Certificate results, our matric rewrite
              support programme offers structured academic assistance to help you prepare for your
              examinations with topic-by-topic clarity.
            </p>

            <div className="space-y-2.5 mb-8">
              {matricRewritePoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#FCFCFC]/90">
                  <Check className="w-4 h-4 text-[#F7C206] shrink-0 stroke-[2.5]" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#FCFCFC]/60 italic mb-6">
              Programme availability and subject arrangements are confirmed during enrolment.
            </p>

            <button
              onClick={() => onRegisterClick('Matric Rewrite')}
              className="w-full py-3.5 px-6 rounded-full bg-[#F7C206] text-[#050100] font-bold text-xs uppercase tracking-wider hover:bg-[#FCCF29] transition-all cursor-pointer shadow-md"
            >
              Enquire About Matric Rewrite
            </button>
          </div>

          {/* Extra Classes Grades 10 - 12 */}
          <div className="bg-[#FCFCFC] border border-gray-200 p-8 md:p-12 rounded-xs border-t-4 border-[#050100] shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-2">
              Academic Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#050100] mb-4">
              Extra Classes for Grades 10 to 12
            </h3>
            <p className="text-xs font-semibold text-[#743F05] mb-4">
              Consistent Support Throughout the School Year.
            </p>
            <p className="text-xs sm:text-sm text-[#050100]/80 leading-relaxed font-normal mb-6">
              Strong academic performance develops through regular practice, clear explanations,
              and effective study habits. Our extra classes provide dedicated assistance throughout
              the academic year.
            </p>

            <div className="space-y-2.5 mb-8">
              {extraClassesPoints.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#050100]/90">
                  <Check className="w-4 h-4 text-[#743F05] shrink-0 stroke-[2.5]" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#050100]/60 italic mb-6">
              Afternoon, weekend, and school holiday sessions scheduled per grade.
            </p>

            <button
              onClick={() => onRegisterClick('Extra Classes Grades 10-12')}
              className="w-full py-3.5 px-6 rounded-full bg-[#050100] text-[#FFFEFE] font-bold text-xs uppercase tracking-wider hover:bg-[#743F05] transition-all cursor-pointer shadow-md"
            >
              Register for Extra Classes
            </button>
          </div>
        </div>
      </section>

      {/* 4-Step Enrolment Process */}
      <section className="max-w-[1400px] mx-auto py-20 px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-2">
            Simple & Transparent
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#050100]">
            Our 4-Step Enrolment Process
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div key={idx} className="p-6 bg-[#FCFCFC] border border-gray-200 rounded-xs">
              <span className="text-xs font-bold text-[#743F05] block mb-1">{st.num}</span>
              <h4 className="text-base font-bold text-[#050100] mb-2">{st.title}</h4>
              <p className="text-xs text-[#050100]/75 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Final CTA Box */}
        <div className="mt-16 p-8 md:p-12 rounded-xs bg-[#050100] text-[#FFFEFE] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-[#FFFEFE] mb-2">
              Give Your Academic Goals the Support They Deserve.
            </h4>
            <p className="text-xs md:text-sm text-[#FCFCFC]/80 max-w-xl">
              The right support and consistent effort help learners prepare more effectively for
              academic challenges. Contact Nyawo Royal Group today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onRegisterClick('Academic Tutoring')}
              className="px-6 py-3 rounded-full bg-[#F7C206] text-[#050100] font-bold text-xs hover:bg-[#FCCF29] transition-all cursor-pointer"
            >
              Register for Tutoring
            </button>
            <a
              href="https://wa.me/27694986318"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-xs hover:border-[#F7C206] hover:text-[#F7C206] transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
