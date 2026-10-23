import React from 'react';

const METRICS = [
  {
    title: 'Academic Focus',
    value: '100%',
    description: 'Dedicated to strengthening student understanding, confidence, and examination performance.',
  },
  {
    title: 'Core Heavy Machines',
    value: '5+',
    description: 'Practical training on ADT, Excavators, Bulldozers, TLBs, and yellow plant machinery.',
  },
  {
    title: 'Client Satisfaction',
    value: '98%',
    description: 'Built on respectful service, clear communication, accountability, and practical results.',
  },
  {
    title: 'Integrated Services',
    value: '5 in 1',
    description: 'Academic tutoring, career support, operator training, security training, and legal assistance.',
  },
];

export const MetricsShowcase: React.FC = () => {
  return (
    <section className="bg-[#050100] py-24 md:py-36 px-6 md:px-12 border-b border-[#4F2704]/50 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F7C206]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#743F05]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Subhead Tag */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-[#F7C206] mb-6">
          <span className="w-2 h-2 bg-[#F7C206] inline-block shrink-0 shadow-[0_0_8px_#F7C206]" />
          <span>EMPOWERING MINDS • BUILDING SKILLS • CREATING OPPORTUNITIES</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#FFFEFE] tracking-tight leading-[1.12] mb-16 md:mb-24 max-w-5xl">
          We bring education, professional training, and legal solutions together to serve
          learners, job seekers, and communities.
        </h2>

        {/* 4 Columns Box Grid with Staggered Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#4F2704]/80 rounded-xs bg-[#050100]/95 shadow-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#4F2704]/70">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="relative p-8 md:p-10 flex flex-col justify-between min-h-[400px] md:min-h-[460px] group transition-colors duration-300 hover:bg-[#4F2704]/20"
            >
              {/* Metric Title Top */}
              <div className="z-10">
                <span className="text-[11px] font-mono text-[#FCCF29] uppercase tracking-wider block mb-1">
                  Pillar 0{idx + 1}
                </span>
                <p className="text-sm font-semibold text-[#FCFCFC]/90 tracking-wide">
                  {metric.title}
                </p>
              </div>

              {/* Dynamic Staggered Horizontal Bar Line & Stat */}
              <div
                className="w-full my-auto py-6"
                style={{
                  paddingTop: `${idx === 0 ? 10 : idx === 1 ? 55 : idx === 2 ? 15 : 75}px`,
                }}
              >
                {/* Horizontal Divider Line */}
                <div className="w-full h-[2.5px] bg-[#F7C206] shadow-[0_0_12px_rgba(247,194,6,0.6)] mb-6 transition-all duration-500 group-hover:bg-[#FCCF29] group-hover:shadow-[0_0_18px_rgba(252,207,41,0.8)]" />

                {/* Percentage / Value Stat */}
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FCCF29] tracking-tight block">
                  {metric.value}
                </span>
              </div>

              {/* Description Bottom */}
              <div className="pt-6 z-10 border-t border-[#4F2704]/40">
                <p className="text-xs md:text-sm text-[#FCFCFC]/75 leading-relaxed font-normal">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
