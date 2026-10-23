import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ValueStatementProps {
  onGetStartedClick: () => void;
  onOurStoryClick: () => void;
}

export const ValueStatement: React.FC<ValueStatementProps> = ({
  onGetStartedClick,
  onOurStoryClick,
}) => {
  return (
    <section id="about-statement" className="bg-[#FFFEFE] py-24 md:py-36 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        {/* Large Statement Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-[#050100] tracking-tight leading-[1.12] mb-16 md:mb-24 max-w-6xl">
          At Nyawo Royal Group, we believe education and skills development open doors to{' '}
          <span className="text-[#743F05] font-normal underline decoration-[#F7C206] decoration-4 underline-offset-8">
            new possibilities.
          </span>
        </h2>

        {/* 2-Column Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Tag */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-normal text-[#050100]">
              <span className="w-2.5 h-2.5 bg-[#F7C206] inline-block shrink-0 shadow-sm" />
              <span>Othobothini, South Africa • Established 2026</span>
            </div>
            <p className="text-xs md:text-sm text-[#743F05] font-medium leading-relaxed">
              Directed by <strong className="text-[#050100]">Ms. Nombulelo Mlambo</strong> and{' '}
              <strong className="text-[#050100]">Mr. Sakhile Nyawo</strong>, bringing education,
              practical training, and legal solutions under one roof.
            </p>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base md:text-lg text-[#050100] leading-relaxed font-normal">
              We recognise the challenges learners face when preparing for examinations, graduates
              encounter when entering the employment market, and individuals experience when
              seeking practical training or legal assistance. Our business brings these service
              areas together to provide practical support for people at different stages of their
              educational, professional, and personal journeys.
            </p>

            <p className="text-sm md:text-base text-[#050100]/75 leading-relaxed font-normal">
              From academic tutoring and matric rewrite programmes to career preparation,
              machinery operator training, security training, and legal services, our focus is on
              helping people access the support they need to move forward.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onGetStartedClick}
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#050100] text-[#FFFEFE] text-sm font-bold transition-all duration-300 hover:bg-[#F7C206] hover:text-[#050100] hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onOurStoryClick}
                className="inline-flex items-center px-7 py-3 rounded-full border border-[#050100] bg-transparent text-[#050100] text-sm font-semibold transition-all duration-300 hover:bg-[#050100] hover:text-[#FFFEFE] active:scale-95 cursor-pointer"
              >
                About Our Company
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
