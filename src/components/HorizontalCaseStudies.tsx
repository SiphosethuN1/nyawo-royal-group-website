import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';
import { CaseStudy } from '../utils/advisory';

interface HorizontalCaseStudiesProps {
  onSelectCaseStudy?: (study: CaseStudy) => void;
  onExploreAllClick?: () => void;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'matric-turnaround',
    category: 'Academic Tutoring',
    title: 'Matric Rewrite Results Turnaround in Mathematics & Sciences',
    description:
      'A structured topic-by-topic revision and mock exam programme enabled rewriting candidates to elevate their grades from Level 3 to Bachelor Degree entry passes.',
    impactMetric: '+38%',
    metricLabel: 'Average Mark Improvement',
    image:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80',
    tags: ['Matric Rewrite', 'Mathematics', 'Physical Sciences'],
  },
  {
    id: 'operator-readiness',
    category: 'Operator Training',
    title: 'Heavy Plant Excavator & ADT Workplace Certification',
    description:
      'Hands-on machine familiarisation and rigorous site safety procedures equipped trainees with practical operating competence for civil construction contracts.',
    impactMetric: '100%',
    metricLabel: 'Practical Competency',
    image:
      '/images/Operator Training,Heavy Plant Excavator & ADT Workplace Certification.jpg',
    tags: ['ADT', 'Excavator', 'Safety Compliance'],
  },
  {
    id: 'graduate-career-launch',
    category: 'Career Development',
    title: 'Professional CV & Interview Coaching Securing Placement',
    description:
      'Overhauled unstructured graduate profiles into recruiter-compliant modern CVs, combined with mock interviews and employment database registration.',
    impactMetric: '4.5x',
    metricLabel: 'Interview Call Rate',
    image:
      '/images/Career Development Professional CV & Interview Coaching Securing Placement.jpg',
    tags: ['CV Writing', 'Interview Coaching', 'Job Readiness'],
  },
  {
    id: 'security-training-pathway',
    category: 'Security Training',
    title: 'Security Sector Preparation & Compliance Registration',
    description:
      'Prospective officers completed regulatory training modules, physical procedures, and verification protocols for entry into formal security operations.',
    impactMetric: 'Qualified',
    metricLabel: 'Sector Ready',
    image:
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80',
    tags: ['Security Prep', 'Regulations', 'Professionalism'],
  },
  {
    id: 'legal-dispute-resolution',
    category: 'Legal Services',
    title: 'Commercial Contract Drafting & Labour Dispute Settlement',
    description:
      'Our legal team provided clear guidance, drafting protective employment contracts and achieving out-of-court dispute resolution for an emerging enterprise.',
    impactMetric: 'Resolved',
    metricLabel: 'Compliant & Protected',
    image:
      '/images/Legal Services Commercial Contract Drafting & Labour Dispute Settlement.jpg',
    tags: ['Contracts', 'Labour Law', 'Compliance'],
  },
];

export const HorizontalCaseStudies: React.FC<HorizontalCaseStudiesProps> = ({
  onSelectCaseStudy,
  onExploreAllClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Academic Tutoring',
    'Operator Training',
    'Career Development',
    'Legal Services',
  ];

  const filteredStudies =
    selectedCategory === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category.toLowerCase() === selectedCategory.toLowerCase());

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - viewportHeight;

      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(
        Math.max(currentScroll / totalScrollableDistance, 0),
        1
      );

      setScrollProgress(progress);

      const trackWidth = trackRef.current.scrollWidth;
      const availableWidth = window.innerWidth;
      const maxTranslateX = trackWidth - availableWidth + 120;

      if (maxTranslateX > 0) {
        const translateX = progress * maxTranslateX;
        trackRef.current.style.transform = `translateX(-${translateX}px)`;
      }

      const cardIdx = Math.min(
        Math.floor(progress * filteredStudies.length),
        filteredStudies.length - 1
      );
      setActiveCardIndex(cardIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredStudies.length]);

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (filteredStudies.length - 1)) * totalDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="outcomes"
      ref={containerRef}
      className="relative bg-[#050100] text-[#FFFEFE] border-t border-b border-[#4F2704]/40"
      style={{ height: '320vh' }}
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 px-6 md:px-12 overflow-hidden">
        {/* Ambient Golden Amber Aura Motivated by #F7C206 */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#F7C206]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#743F05]/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Top Header & Progress Bar */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-16 md:pt-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#4F2704]/60">
            <div>
              {/* Category Subhead with #F7C206 Accent */}
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-[#F7C206] mb-3">
                <span className="w-2 h-2 bg-[#F7C206] inline-block shadow-[0_0_8px_#F7C206]" />
                <span>REAL OUTCOMES • NYAWO ROYAL GROUP</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFEFE]">
                Proven Impact In Motion.
              </h2>
            </div>

            {/* Navigation & Progress Controls */}
            <div className="flex items-center gap-6">
              {/* Card Counter Motivated by #F7C206 */}
              <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#FCCF29]">
                <span className="text-[#F7C206] font-bold text-base">
                  0{activeCardIndex + 1}
                </span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-400">0{filteredStudies.length}</span>
              </div>

              {/* Arrow navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollToCard(Math.max(activeCardIndex - 1, 0))}
                  aria-label="Previous story"
                  disabled={activeCardIndex === 0}
                  className="w-10 h-10 rounded-full border border-[#4F2704] bg-[#050100] text-[#FFFEFE] hover:border-[#F7C206] hover:text-[#F7C206] flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    scrollToCard(
                      Math.min(activeCardIndex + 1, filteredStudies.length - 1)
                    )
                  }
                  aria-label="Next story"
                  disabled={activeCardIndex === filteredStudies.length - 1}
                  className="w-10 h-10 rounded-full border border-[#4F2704] bg-[#050100] text-[#FFFEFE] hover:border-[#F7C206] hover:text-[#F7C206] flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Glowing Scroll Bar Motivated by #F7C206 */}
          <div className="w-full h-1 bg-[#4F2704]/40 mt-4 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#743F05] via-[#F7C206] to-[#FCCF29] shadow-[0_0_12px_#F7C206] transition-all duration-150"
              style={{ width: `${Math.max(scrollProgress * 100, 4)}%` }}
            />
          </div>
        </div>

        {/* Horizontally Moving Track (Translates left as user scrolls down) */}
        <div className="relative w-full overflow-visible py-4 my-auto">
          <div
            ref={trackRef}
            className="flex items-stretch gap-8 transition-transform ease-out will-change-transform"
            style={{
              paddingLeft: 'max(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem))',
              paddingRight: '6rem',
            }}
          >
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => onSelectCaseStudy?.(study)}
                className="relative w-[340px] sm:w-[440px] lg:w-[480px] h-[480px] sm:h-[540px] shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-[#4F2704]/70 group hover:border-[#F7C206] transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Background Photographic Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050100] via-[#050100]/40 to-transparent" />
                </div>

                {/* Top Badge: Impact Metric Highlight motivated by #F7C206 */}
                <div className="relative z-10 p-6 flex items-start justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#050100]/80 backdrop-blur-md border border-[#F7C206]/40 text-xs font-semibold text-[#F7C206] shadow-md">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{study.impactMetric}</span>
                    <span className="text-[#FCCF29]/80 font-normal">
                      {study.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Bottom Dark Walnut Floating Card */}
                <div className="relative z-10 m-4 sm:m-6 p-6 sm:p-7 rounded-xl bg-[#2A201A]/95 backdrop-blur-md border border-[#4F2704] transition-all duration-300 group-hover:bg-[#251B15] group-hover:border-[#F7C206]/60 group-hover:shadow-[0_10px_30px_rgba(247,194,6,0.15)]">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    {/* Category Pill Tag */}
                    <span className="px-3 py-1 rounded-full bg-[#FFFEFE] text-[#050100] text-xs font-bold tracking-tight shadow-sm">
                      {study.category}
                    </span>

                    {/* Circular Action Arrow Button (turns #F7C206 on hover) */}
                    <div className="w-9 h-9 rounded-full bg-[#3D2E24] text-[#FFFEFE] group-hover:bg-[#F7C206] group-hover:text-[#050100] group-hover:shadow-[0_0_15px_#F7C206] flex items-center justify-center transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#FFFEFE] tracking-tight leading-snug mb-2.5 group-hover:text-[#FCCF29] transition-colors">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#FCFCFC]/75 leading-relaxed font-normal line-clamp-3">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Helper Bar */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex items-center justify-between text-xs text-[#FCFCFC]/60 pt-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F7C206] animate-pulse" />
            <span>Scroll vertically to pan across learner & career achievements</span>
          </div>

          <button
            onClick={onExploreAllClick}
            className="hover:text-[#F7C206] transition-colors flex items-center gap-1 font-semibold cursor-pointer"
          >
            <span>Start your own journey with us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
