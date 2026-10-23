import React, { useState } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface TestimonialsBannerProps {
  onFreeConsultationClick: () => void;
}

const TESTIMONIALS = [
  {
    quote:
      'The extra classes and matric rewrite programme gave me the exact confidence I needed. The teachers explained Physical Sciences and Mathematics step-by-step until everything clicked.',
    author: 'Thabo Mkhize',
    role: 'Matric Rewrite Candidate, Othobothini',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    stars: 5,
  },
  {
    quote:
      'Nyawo Royal Group transformed my career search. Their CV writing service and interview preparation helped me understand what employers look for. Within three weeks I had two formal interviews.',
    author: 'Zandile Ndlovu',
    role: 'University Graduate, Job Seeker',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    stars: 5,
  },
  {
    quote:
      'The operator training on the Excavator and ADT was hands-on and practical. They explained the safety protocols clearly and made sure we felt confident behind the controls before certification.',
    author: 'Sipho Zulu',
    role: 'Certified Heavy Plant Operator',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    stars: 5,
  },
  {
    quote:
      'When our family needed contract review and estate advice, their legal team was respectful, attentive, and extremely thorough. They explained every detail in plain language.',
    author: 'Nomusa Khumalo',
    role: 'Family Legal Services Client',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    stars: 5,
  },
];

export const TestimonialsBanner: React.FC<TestimonialsBannerProps> = ({
  onFreeConsultationClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="bg-[#FFFEFE] border-b border-gray-100 overflow-hidden">
      {/* Top Banner with Background Image & Floating Card */}
      <div className="relative w-full h-[460px] md:h-[520px] overflow-hidden">
        <img
          src="/images/Our Commitment ..jpg"
          alt="Our commitment to your progress — Nyawo Royal Group"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-[#050100]/40" />

        {/* Floating Card on the Right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-16 lg:right-24 max-w-md w-full shadow-2xl">
          <div className="bg-[#FFFEFE] p-8 md:p-10 rounded-t-xs border-t-4 border-[#F7C206]">


            <span className="text-[11px] font-bold uppercase tracking-wider text-[#743F05] block mb-2">
              Our Commitment
            </span>

            <h3 className="text-xl md:text-2xl font-bold text-[#050100] tracking-tight leading-snug mb-3">
              Your Progress Is Our Purpose.
            </h3>

            <p className="text-xs md:text-sm text-[#050100]/80 leading-relaxed font-normal">
              At Nyawo Royal Group, we believe education and skills development open doors to new
              possibilities. We are committed to supporting academic improvement, professional
              growth, practical skills development, and access to legal assistance.
            </p>
          </div>

          {/* Attached Dark Button Below Card */}
          <button
            onClick={onFreeConsultationClick}
            className="w-full bg-[#050100] hover:bg-[#743F05] text-[#FFFEFE] py-4 px-6 flex items-center justify-center gap-2 text-sm font-bold transition-colors duration-300 rounded-b-xs cursor-pointer group"
          >
            <span>Enquire With Our Team</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#F7C206]" />
          </button>
        </div>
      </div>

      {/* Bottom Testimonial Section with Carousel Controls */}
      <div className="max-w-[1400px] mx-auto py-24 md:py-32 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Info & Navigation Arrows */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-block px-3 py-1 rounded-xs bg-[#F7C206]/20 text-[#743F05] text-xs font-bold uppercase tracking-wider">
              Community Voices
            </div>

            <h4 className="text-3xl font-bold text-[#050100] tracking-tight">
              Testimonials & Client Feedback
            </h4>

            <p className="text-sm text-[#050100]/75 leading-relaxed font-normal max-w-sm">
              Real feedback from learners, parents, job seekers, and clients who have moved forward
              with Nyawo Royal Group.
            </p>

            {/* Carousel Buttons */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-12 h-12 rounded-full bg-[#050100] text-[#FFFEFE] hover:bg-[#743F05] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-12 h-12 rounded-full bg-[#050100] text-[#FFFEFE] hover:bg-[#743F05] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Quotation & Author */}
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-6 items-start">
            {/* Giant Quotation Mark */}
            <span className="text-8xl md:text-9xl font-serif text-[#F7C206]/30 leading-none select-none shrink-0 -mt-4">
              “
            </span>

            <div className="space-y-8 flex-1">
              {/* Quote text */}
              <p className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#050100] tracking-tight leading-[1.28]">
                {current.quote}
              </p>

              {/* Author Information */}
              <div className="flex items-center gap-4 pt-2">
                <div>
                  <h5 className="text-base font-bold text-[#050100] tracking-tight">
                    {current.author}
                  </h5>
                  <p className="text-xs text-[#743F05] font-semibold mb-1">{current.role}</p>
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-[#F7C206]">
                    {[...Array(current.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F7C206]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
