import React, { useState } from 'react';
import { BookOpen, HardHat, Scale, Check } from 'lucide-react';

const TABS = [
  {
    id: 0,
    icon: BookOpen,
    title: 'Academic Tutoring',
    text: 'Build confidence, master challenging concepts, and achieve your best results in Mathematics, Sciences, and Matric examinations.',
    badges: [
      { text: 'Targeted support for ', highlight: 'Mathematics & Physical Sciences', suffix: '' },
      { text: 'Comprehensive Matric rewrite revision & exam preparation' },
      { text: 'Consistent extra classes for Grades 10 to 12 learners' },
      { text: 'Experienced tutors dedicated to student progress' },
    ],
  },
  {
    id: 1,
    icon: HardHat,
    title: 'Operator & Security Training',
    text: 'Develop practical, workplace-ready skills for heavy construction equipment and security sector career pathways.',
    badges: [
      { text: 'Practical training on ', highlight: 'ADT, Excavators & Bulldozers', suffix: '' },
      { text: 'Tractor Loader Backhoe (TLB) & yellow plant machinery' },
      { text: 'Security industry entry preparation & regulatory guidance' },
      { text: 'Clear certification arrangements & safety compliance' },
    ],
  },
  {
    id: 2,
    icon: Scale,
    title: 'Careers & Legal Solutions',
    text: 'Present your qualifications with professional distinction while protecting personal and business interests through trusted legal counsel.',
    badges: [
      { text: 'Professional CV writing, cover letters & ', highlight: 'interview coaching', suffix: '' },
      { text: 'Job application assistance & employment database registration' },
      { text: 'Legal advice, contracts, labour disputes & family law' },
      { text: 'Directed by qualified attorney with personal attention' },
    ],
  },
];

export const InteractiveFeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#FFFEFE] border-b border-gray-100 overflow-hidden">
      {/* 3 Top Interactive Tabs Grid */}
      <div className="max-w-[1400px] mx-auto border-x border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative p-8 md:p-10 text-left transition-all duration-300 cursor-pointer group ${
                  isActive ? 'bg-[#FCFCFC]' : 'bg-[#FFFEFE] hover:bg-[#FCFCFC]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 flex items-center justify-center rounded-xs transition-transform duration-300 group-hover:scale-105 ${
                    isActive ? 'bg-[#F7C206] text-[#050100]' : 'bg-gray-100 text-[#050100]'
                  }`}>
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#743F05]">
                    {tab.title}
                  </span>
                </div>

                <p className="text-sm md:text-base text-[#050100]/85 font-normal leading-relaxed">
                  {tab.text}
                </p>

                {/* Active Indicator Underline */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-[#F7C206] transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Visual Area with Floating Badges */}
      <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden bg-[#050100]">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=85"
          alt="Nyawo Royal Group training students and empowering professionals in practical skills"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08]"
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050100]/90 via-[#050100]/25 to-transparent" />

        {/* Overlaid Floating Badges on Bottom Left */}
        <div className="absolute bottom-8 left-6 md:left-14 max-w-xl space-y-3 z-10">
          <div className="text-[11px] font-bold tracking-wider text-[#F7C206] uppercase bg-[#050100]/80 px-3 py-1 rounded-xs inline-block">
            Proven Standards • Nyawo Royal Group
          </div>
          {TABS[activeTab].badges.map((badge, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-white/60 text-[#050100] text-xs md:text-sm font-medium shadow-xl transition-all duration-300 hover:bg-white"
            >
              <span className="w-5 h-5 rounded-full bg-[#F7C206] flex items-center justify-center shrink-0 shadow-sm text-[#050100]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span>
                {badge.text}
                {badge.highlight && (
                  <span className="text-[#743F05] font-bold">
                    {badge.highlight}
                  </span>
                )}
                {badge.suffix}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
