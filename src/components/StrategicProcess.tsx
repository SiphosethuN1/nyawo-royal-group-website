import React from 'react';
import { Check } from 'lucide-react';

const STEPS = [
  {
    number: '1',
    title: 'Understand',
    description:
      'We begin by listening to your specific needs, background, goals, and challenges. Whether you are a learner needing exam guidance, a graduate seeking employment direction, or a client requiring legal clarity, we take the time to grasp your unique situation.',
    checkpoints: [
      'Listen to your goals and learning/career challenges',
      'Assess grade level, machine preference, or legal concern',
    ],
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    alt: 'Advisor consulting carefully with learner and client',
  },
  {
    number: '2',
    title: 'Support',
    description:
      'We present and explain relevant services and available options transparently. We outline class timetables, training requirements, CV enhancements, or legal procedures so you have full clarity before taking any step.',
    checkpoints: [
      'Transparent explanations of timetables, costs & options',
      'Honest guidance tailored to your objectives',
    ],
    image:
      '/images/Field Practicality Heavy equipment operator & safety standards in Othobothini and surrounding region.jpg',
    alt: 'Interactive workshop training session and academic assistance',
  },
  {
    number: '3',
    title: 'Progress',
    description:
      'We guide you through practical next steps towards your objectives—beginning your academic tutoring schedule, starting heavy equipment training, submitting polished job applications, or executing legal documentation.',
    checkpoints: [
      'Structured step-by-step learning and training implementation',
      'Timely documentation, mock exams & field practice',
    ],
    image:
      '/images/Step 3 Progress.jpg',
    alt: 'Practical skills development and operator training in progress',
  },
  {
    number: '4',
    title: 'Empower',
    description:
      'Our ultimate purpose is your long-term success. We support individuals in building knowledge, confidence, and practical abilities that unlock real employment, higher academic qualifications, and lasting community resilience.',
    checkpoints: [
      'Build enduring confidence and real-world competence',
      'Ongoing guidance for continuous personal growth',
    ],
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    alt: 'Empowered graduates and skilled trainees stepping into opportunities',
  },
];

const BG_COLORS = ['#FFFEFE', '#050100', '#4F2704', '#743F05'];
const ACCENT_COLORS = ['#F7C206', '#F7C206', '#FCCF29', '#FCCF29'];

export const StrategicProcess: React.FC = () => {
  return (
    <section id="process" className="bg-[#FFFEFE] border-b border-gray-100 overflow-hidden">

      {/* Section Header – normal scroll flow */}
      <div className="py-24 md:py-28 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-normal text-[#050100]">
                <span className="w-2.5 h-2.5 bg-[#F7C206] inline-block shrink-0 shadow-sm" />
                <span>OUR PROVEN APPROACH</span>
              </div>
              <p className="text-xs md:text-sm text-[#743F05] font-medium mt-2">
                Understand &#8226; Support &#8226; Progress &#8226; Empower
              </p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#050100] tracking-tight leading-[1.15]">
                We believe effective support begins with understanding the individual.
              </h2>
            </div>
          </div>
          <div className="h-[1px] bg-gray-200 w-full" />
        </div>
      </div>

      {/*
        ── Stacking Sticky Cards ──
        Each card wrapper uses position:sticky with a progressively lower top value
        and higher z-index. This makes each card freeze while the next slides up on top.
        Each wrapper has minHeight:100vh (except the last) so scroll "consumes" time
        before the next card kicks in.
      */}
      <div className="relative">
        {STEPS.map((step, index) => {
          const bg = BG_COLORS[index];
          const accent = ACCENT_COLORS[index];
          const isLight = index === 0;
          const topOffset = 88 + index * 10;
          const isLast = index === STEPS.length - 1;

          return (
            <div
              key={step.number}
              style={{
                position: 'sticky',
                top: `${topOffset}px`,
                zIndex: 10 + index,
                minHeight: isLast ? 'auto' : '100vh',
                display: 'flex',
                alignItems: 'flex-start',
                paddingBottom: isLast ? '6rem' : '1rem',
              }}
              className="px-4 sm:px-6 md:px-12 pt-4"
            >
              <div
                className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  backgroundColor: bg,
                  borderTop: `3px solid ${accent}`,
                  boxShadow: `0 ${8 + index * 6}px ${40 + index * 12}px rgba(0,0,0,${0.10 + index * 0.07})`,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                  {/* Left: Text */}
                  <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-4">
                      <span
                        className="text-7xl md:text-[100px] font-extrabold leading-none select-none"
                        style={{ color: accent, opacity: 0.18 }}
                      >
                        0{step.number}
                      </span>
                      <div
                        className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest"
                        style={{ backgroundColor: accent, color: '#050100' }}
                      >
                        Step {step.number} of {STEPS.length}
                      </div>
                    </div>

                    <h3
                      className="text-3xl md:text-4xl font-bold tracking-tight leading-tight"
                      style={{ color: isLight ? '#050100' : '#FFFEFE' }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: isLight ? 'rgba(5,1,0,0.72)' : 'rgba(255,255,255,0.78)' }}
                    >
                      {step.description}
                    </p>

                    {step.checkpoints.length > 0 && (
                      <div className="space-y-3 pt-2">
                        {step.checkpoints.map((cp, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 py-2 text-xs md:text-sm font-medium"
                            style={{
                              borderBottom: `1px solid ${isLight ? '#e5e7eb' : 'rgba(255,255,255,0.12)'}`,
                              color: isLight ? '#050100' : '#FFFEFE',
                            }}
                          >
                            <Check
                              className="w-4 h-4 shrink-0 stroke-[2.5]"
                              style={{ color: accent }}
                            />
                            <span>{cp}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Image */}
                  <div className="lg:col-span-5 relative min-h-[260px] md:min-h-[380px] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
                    <div
                      className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm"
                      style={{
                        backgroundColor: `${bg}ee`,
                        color: isLight ? '#050100' : accent,
                      }}
                    >
                      Step {step.number}: {step.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ghost Typography Marquee */}
      <div className="mt-16 pt-10 border-t border-gray-100 overflow-hidden select-none opacity-40">
        <div className="animate-marquee whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-transparent [-webkit-text-stroke:1.5px_#743F05]">
          <span>EMPOWERING MINDS &#8226; BUILDING SKILLS &#8226; CREATING OPPORTUNITIES &#8226; NYAWO ROYAL GROUP &#8226;&nbsp;</span>
          <span>EMPOWERING MINDS &#8226; BUILDING SKILLS &#8226; CREATING OPPORTUNITIES &#8226; NYAWO ROYAL GROUP &#8226;&nbsp;</span>
        </div>
      </div>
    </section>
  );
};
