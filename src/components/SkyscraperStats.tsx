import React from 'react';
import { Check } from 'lucide-react';

export const SkyscraperStats: React.FC = () => {
  const advantages = [
    { title: 'Professional service', desc: 'We approach our work with integrity and high professional ethics.' },
    { title: 'Personalised support', desc: 'Every learner, graduate, trainee, and client receives individualized attention.' },
    { title: 'Practical development', desc: 'Programmes focused on actionable, in-demand technical knowledge and skills.' },
    { title: 'Accessible opportunities', desc: 'Opening accessible pathways for individuals across diverse backgrounds.' },
    { title: 'Client-focused solutions', desc: 'Clear communication, transparency, accountability, and respectful service.' },
    { title: 'Multiple services under one roof', desc: 'Education, careers, machinery operator training, and legal aid together.' },
  ];

  return (
    <section className="bg-[#FFFEFE] border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Left Column Content */}
        <div className="lg:col-span-6 px-6 md:px-12 py-20 md:py-28 flex flex-col justify-between">
          <div>
            {/* Tag */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-normal text-[#050100] mb-6">
              <span className="w-2.5 h-2.5 bg-[#F7C206] inline-block shrink-0 shadow-sm" />
              <span>WHY CHOOSE NYAWO ROYAL GROUP?</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#050100] tracking-tight leading-[1.14] max-w-xl mb-6">
              Your Goals Matter to Us.
            </h2>

            <p className="text-sm md:text-base text-[#050100]/80 leading-relaxed font-normal mb-8 max-w-xl">
              We focus on understanding your needs and guiding you towards practical next steps.
              Whether upgrading academic marks or mastering yellow plant machinery, our team is dedicated to your progress.
            </p>

            {/* Six bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {advantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#050100]">
                  <Check className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5 stroke-[3]" />
                  <div>
                    <span className="font-bold block">{adv.title}</span>
                    <span className="text-[#050100]/70">{adv.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two Boxed Stat Cards with Solid Border */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            {/* Stat Box 1 */}
            <div className="border-2 border-[#050100] p-6 rounded-xs bg-[#FFFEFE] shadow-[3px_3px_0px_#743F05] hover:shadow-[5px_5px_0px_#F7C206] transition-shadow duration-300">
              <span className="text-4xl md:text-5xl font-bold text-[#050100] tracking-tight block mb-2">
                6 in 1
              </span>
              <p className="text-xs text-[#050100]/80 leading-relaxed font-semibold">
                Integrated Advantage
              </p>
              <p className="text-[11px] text-[#050100]/65 leading-tight mt-1">
                Tutoring, rewrites, CVs, operators, security & law.
              </p>
            </div>

            {/* Stat Box 2 */}
            <div className="border-2 border-[#050100] p-6 rounded-xs bg-[#FFFEFE] shadow-[3px_3px_0px_#743F05] hover:shadow-[5px_5px_0px_#F7C206] transition-shadow duration-300">
              <span className="text-4xl md:text-5xl font-bold text-[#050100] tracking-tight block mb-2">
                10+
              </span>
              <p className="text-xs text-[#050100]/80 leading-relaxed font-semibold">
                Communities & Groups
              </p>
              <p className="text-[11px] text-[#050100]/65 leading-tight mt-1">
                Grade 10–12, graduates, job seekers, and families.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Imagery */}
        <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full overflow-hidden bg-[#050100]">
          <img
            src="/images/We focus on understanding your needs and guiding you towards practical next steps. Whether upgrading academic marks or mastering yellow plant machinery, our team is dedicated to your progress.jpg"
            alt="Heavy construction machinery and technical engineering field training"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.1] hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050100]/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xs bg-[#050100]/80 backdrop-blur-md border border-[#F7C206]/40 text-[#FFFEFE]">
            <p className="text-xs font-bold text-[#F7C206] uppercase tracking-wider mb-1">
              Field Practicality
            </p>
            <p className="text-xs text-[#FCFCFC]/90">
              Heavy equipment operator & safety standards in Othobothini and surrounding regions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
