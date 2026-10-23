import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreServicesClick: () => void;
  onEnquireNowClick: () => void;
}

const HERO_SLIDES = [
  {
    title: 'Academic Tutoring',
    subtitle: 'Build confidence. Improve your results.',
    description:
      'Mathematics, Physical Sciences, Life Sciences, Agricultural Sciences, and dedicated Matric rewrite support.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    tag: 'Grades 10–12 & Matric',
  },
  {
    title: 'Operator Training',
    subtitle: 'Develop practical skills for the workplace.',
    description:
      'Hands-on technical training on ADT, Excavators, Bulldozers, TLB, and yellow plant machinery.',
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    tag: 'Heavy Machinery & Plant',
  },
  {
    title: 'Careers & Legal Solutions',
    subtitle: 'Professional preparation & personal attention.',
    description:
      'CV writing, application support, interview guidance, plus trusted legal consultations and contract drafting.',
    image:
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
    tag: 'Graduates, Families & Business',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServicesClick,
  onEnquireNowClick,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#050100]"
    >
      {/* Background imagery with luxury gradient overlays */}
      <div className="absolute inset-0 z-0 bg-[#050100]">
        <img
          src="/images/hero section background image.png"
          alt="Diverse students and professionals developing practical skills in collaborative space"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15]"
        />
        {/* Gradients harmonizing with #050100, Raw Umber #743F05, and Dark Walnut #4F2704 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050100]/95 via-[#050100]/70 to-[#050100]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050100] via-transparent to-[#050100]/70" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F7C206]/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* Main Hero Headline */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-8 md:pt-16">


        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold text-[#FFFEFE] tracking-tight leading-[1.08] max-w-4xl">
          Your Future Starts
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFEFE] via-[#FCCF29] to-[#F7C206]">
            With the Right
          </span>{' '}
          Support.
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-[#F7C206] tracking-tight">
          Education. Skills. Careers. Legal Solutions.
        </p>
      </div>

      {/* Hero Bottom Section */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-12 md:pt-16 flex flex-col lg:flex-row items-end justify-between gap-10">
        {/* Left Side: Scroll indicator, summary, buttons */}
        <div className="max-w-xl w-full">
          {/* Scroll Down line */}
          <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-[#FCCF29] mb-5">
            <span className="flex items-center gap-1 cursor-pointer hover:text-[#F7C206] transition-colors">
              ONE COMPANY • MULTIPLE SOLUTIONS <ChevronDown className="w-3.5 h-3.5 inline animate-bounce" />
            </span>
            <div className="flex-1 h-[1px] bg-[#F7C206]/30" />
          </div>

          <p className="text-sm md:text-base text-[#FCFCFC]/90 leading-relaxed mb-6 font-normal">
            At Nyawo Royal Group (Pty) Ltd, we help individuals move forward through quality
            academic support, career development, professional training, and legal services.
            Whether you are a learner preparing for your matric examinations, a graduate seeking
            employment, a trainee pursuing practical skills, or an individual in need of legal
            assistance, we are here to support your next step.
          </p>

          <div className="flex items-center gap-2 text-xs font-medium text-[#E0DFDE] mb-7">
            <CheckCircle2 className="w-4 h-4 text-[#F7C206] shrink-0" />
            <span>One company. Multiple solutions. A brighter future.</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreServicesClick}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F7C206] text-[#050100] text-sm font-bold transition-all duration-300 hover:bg-[#FCCF29] hover:shadow-[0_0_25px_rgba(247,194,6,0.45)] active:scale-95 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onEnquireNowClick}
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-[#FFFEFE]/40 bg-[#050100]/40 backdrop-blur-sm text-[#FFFEFE] text-sm font-semibold transition-all duration-300 hover:border-[#F7C206] hover:bg-[#4F2704]/40 hover:text-[#FCCF29] cursor-pointer"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {/* Right Side: Floating Interactive Card */}
        <div className="w-full sm:w-[460px] bg-[#FFFEFE] rounded-sm p-6 shadow-2xl border-t-4 border-[#F7C206] transition-all duration-300">
          <div className="flex items-start gap-5">
            <div className="flex-1">
              <span className="inline-block px-2.5 py-0.5 rounded-xs bg-[#F7C206]/20 text-[#743F05] text-[10px] font-bold uppercase tracking-wider mb-2">
                {HERO_SLIDES[activeSlide].tag}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#050100] mb-1 tracking-tight">
                {HERO_SLIDES[activeSlide].title}
              </h3>
              <p className="text-xs font-semibold text-[#743F05] mb-2">
                {HERO_SLIDES[activeSlide].subtitle}
              </p>
              <p className="text-xs md:text-sm text-[#050100]/75 leading-relaxed font-normal">
                {HERO_SLIDES[activeSlide].description}
              </p>
            </div>
          </div>

          {/* Slider indicators */}
          <div className="flex items-center justify-between gap-2 mt-5 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx
                      ? 'w-10 bg-[#050100]'
                      : 'w-4 bg-gray-300 hover:bg-[#F7C206]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={onExploreServicesClick}
              className="text-xs font-bold text-[#743F05] hover:text-[#050100] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Learn more</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
