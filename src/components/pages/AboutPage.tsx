import React from 'react';
import { ArrowUpRight, Check, Target, Compass, Award, Users, HeartHandshake, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onExploreServices: () => void;
  onContactClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onExploreServices,
  onContactClick,
}) => {
  const values = [
    { name: 'Excellence', desc: 'We strive to provide quality services and meaningful support.' },
    { name: 'Integrity', desc: 'We value honesty, ethical conduct, and transparency.' },
    { name: 'Professionalism', desc: 'We approach every client and assignment with respect and responsibility.' },
    { name: 'Innovation', desc: 'We seek effective ways to support learning, development, and service delivery.' },
    { name: 'Accountability', desc: 'We take responsibility for our work and commitments.' },
    { name: 'Empowerment', desc: 'We support individuals in building knowledge, confidence, and practical abilities.' },
    { name: 'Customer Satisfaction', desc: 'We listen to our clients and work towards meeting their needs.' },
  ];

  const missions = [
    'Improve learner performance through quality tutoring and academic support.',
    'Prepare Grade 12 learners for successful matric examinations.',
    'Help graduates strengthen their employment readiness.',
    'Provide practical machinery operator training suited to relevant industry requirements.',
    'Support individuals pursuing security training.',
    'Deliver professional and client-focused legal services.',
    'Empower communities through education, skills development, and lifelong learning.',
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FFFEFE] text-[#050100]">
      {/* Hero Header */}
      <section className="bg-[#050100] text-[#FFFEFE] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
            alt="Collaborative learning and leadership team"
            className="w-full h-full object-cover filter brightness-[0.28] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050100] via-[#050100]/90 to-transparent" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F7C206]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050100]/80 border border-[#F7C206]/40 text-[#F7C206] text-xs font-bold uppercase tracking-wider mb-6">
            PAGE 2: ABOUT US
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFEFE] leading-[1.1] max-w-4xl mb-6">
            Building Skills.
            <br />
            Supporting People.
            <br />
            <span className="text-[#F7C206]">Creating Opportunities.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FCFCFC]/85 max-w-2xl leading-relaxed">
            Nyawo Royal Group (Pty) Ltd is a South African company established in 2026 and based in
            Othobothini, South Africa. Directed by Ms. Nombulelo Mlambo and Mr. Sakhile Nyawo.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-[1400px] mx-auto py-20 px-6 md:px-12 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block">
              Founding Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#050100] leading-tight">
              Bridging educational, technical, and legal pathways.
            </h2>

            <div className="p-6 bg-[#FCFCFC] border border-gray-200 rounded-xs space-y-3">
              <img
                src="/images/logo.png"
                alt="Nyawo Royal Group Logo"
                className="h-14 w-auto object-contain mb-2"
              />
              <span className="text-xs font-mono font-bold text-[#743F05] uppercase block">
                Company Leadership
              </span>
              <p className="text-base font-bold text-[#050100]">Ms. Nombulelo Mlambo & Mr. Sakhile Nyawo</p>
              <p className="text-xs text-[#050100]/75">
                Executive Directors, Nyawo Royal Group (Pty) Ltd
              </p>
              <p className="text-xs text-[#050100]/70 pt-2 border-t border-gray-200">
                Registered in South Africa (2026) • Headquarters in Othobothini
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-[#050100]/85 leading-relaxed font-normal">
            <p>
              The company was established with a vision of empowering individuals through education,
              skills development, career advancement, and professional services.
            </p>
            <p>
              We recognise the challenges learners face when preparing for examinations, graduates
              encounter when entering the employment market, and individuals experience when seeking
              practical training or legal assistance.
            </p>
            <p>
              Our business brings these service areas together to provide practical support for
              people at different stages of their educational, professional, and personal journeys.
            </p>
            <p className="font-medium text-[#050100]">
              From academic tutoring and matric rewrite programmes to career preparation, machinery
              operator training, security training, and legal services, our focus is on helping people
              access the support they need to move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#050100] text-[#FFFEFE] py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Vision */}
          <div className="lg:col-span-5 space-y-6 bg-[#050100] border border-[#4F2704] p-8 md:p-10 rounded-xs relative">
            <div className="w-12 h-12 rounded-xs bg-[#F7C206] text-[#050100] flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FCCF29] block">
              Our Vision
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFEFE] leading-snug">
              To become a leading education, training, and career development company that transforms
              lives through knowledge, practical skills, and employment opportunities.
            </h3>
          </div>

          {/* Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F7C206]">
              <Compass className="w-4 h-4" />
              <span>OUR MISSION</span>
            </div>
            <h3 className="text-3xl font-bold text-[#FFFEFE] tracking-tight">
              Action-driven commitments for real impact.
            </h3>

            <div className="space-y-3 pt-2">
              {missions.map((m, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-[#4F2704]/20 border border-[#4F2704]/40 rounded-xs">
                  <Check className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5 stroke-[3]" />
                  <span className="text-sm text-[#FCFCFC]/90">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-2">
            The Principles That Guide Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050100] tracking-tight">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FCFCFC] border border-gray-200 rounded-xs hover:border-[#F7C206] transition-all hover:shadow-md"
            >
              <div className="w-8 h-8 rounded-xs bg-[#F7C206]/20 text-[#743F05] flex items-center justify-center font-bold text-xs mb-4">
                0{idx + 1}
              </div>
              <h4 className="text-lg font-bold text-[#050100] mb-2">{v.name}</h4>
              <p className="text-xs md:text-sm text-[#050100]/75 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach & Community Commitment */}
      <section className="max-w-[1400px] mx-auto py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block">
              Methodology
            </span>
            <h3 className="text-3xl font-bold text-[#050100] tracking-tight">
              Our 3-Key Approach
            </h3>
            <p className="text-sm text-[#050100]/80 leading-relaxed">
              We believe effective support begins with understanding the individual. Our approach
              focuses on three key principles:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 border-l-4 border-[#F7C206] rounded-r-xs">
                <h5 className="font-bold text-[#050100] text-sm">Understand</h5>
                <p className="text-xs text-[#050100]/75 mt-0.5">We listen to your needs, goals, and challenges.</p>
              </div>
              <div className="p-4 bg-gray-50 border-l-4 border-[#F7C206] rounded-r-xs">
                <h5 className="font-bold text-[#050100] text-sm">Support</h5>
                <p className="text-xs text-[#050100]/75 mt-0.5">We explain relevant services and available options.</p>
              </div>
              <div className="p-4 bg-gray-50 border-l-4 border-[#F7C206] rounded-r-xs">
                <h5 className="font-bold text-[#050100] text-sm">Progress</h5>
                <p className="text-xs text-[#050100]/75 mt-0.5">We help you identify practical next steps towards your objectives.</p>
              </div>
            </div>
          </div>

          {/* Commitment to Community */}
          <div className="p-8 md:p-10 rounded-xs bg-[#050100] text-[#FFFEFE] space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F7C206]">
              <HeartHandshake className="w-4 h-4" />
              <span>COMMUNITY PURPOSE</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
              Our Commitment to the Community
            </h3>
            <p className="text-xs sm:text-sm text-[#FCFCFC]/80 leading-relaxed font-normal">
              We aim to contribute to stronger communities by supporting education, encouraging
              lifelong learning, developing practical skills, and improving employment readiness.
              Through our services, we seek to create opportunities for learners, graduates,
              trainees, families, and businesses in Othobothini and nationwide.
            </p>

            <div className="pt-4 border-t border-[#4F2704] flex flex-wrap gap-4">
              <button
                onClick={onExploreServices}
                className="px-6 py-3 rounded-full bg-[#F7C206] text-[#050100] font-bold text-xs hover:bg-[#FCCF29] transition-all cursor-pointer"
              >
                Explore Our Services
              </button>
              <button
                onClick={onContactClick}
                className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-xs hover:border-[#F7C206] hover:text-[#F7C206] transition-all cursor-pointer"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
