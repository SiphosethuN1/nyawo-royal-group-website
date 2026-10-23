import React from 'react';
import {
  ArrowUpRight,
  Check,
  GraduationCap,
  Briefcase,
  Truck,
  Shield,
  Scale,
} from 'lucide-react';

interface SolutionsSectionProps {
  onServiceSelect: (servicePage: string) => void;
  onApplyClick: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onServiceSelect,
  onApplyClick,
}) => {
  const services = [
    {
      id: 'tutoring',
      icon: GraduationCap,
      title: 'Academic Tutoring',
      tagline: 'Build confidence. Improve your results.',
      description:
        'Our tutoring programmes support learners in understanding challenging subjects, strengthening academic foundations, and preparing for examinations.',
      items: [
        'Mathematics & Physical Sciences',
        'Life Sciences & Agricultural Sciences',
        'Matric rewrite support programme',
        'Extra classes for Grades 10 to 12',
        'Exam preparation, revision & mock tests',
      ],
      buttonText: 'Explore Academic Support',
    },
    {
      id: 'career',
      icon: Briefcase,
      title: 'Career Development',
      tagline: 'Prepare for opportunities. Present your best self.',
      description:
        'We help graduates and job seekers prepare professional application documents and improve their readiness for the employment market.',
      items: [
        'Professional CV writing and updating',
        'Targeted cover letters & motivation letters',
        'Job application assistance',
        'Employment database registration',
        'Career guidance & interview preparation',
      ],
      buttonText: 'Advance Your Career',
    },
    {
      id: 'operator-training',
      icon: Truck,
      title: 'Operator Training',
      tagline: 'Develop practical skills for the workplace.',
      description:
        'Our operator training programmes focus on heavy construction and earth-moving equipment, helping trainees pursue relevant technical skills.',
      items: [
        'Articulated Dump Truck (ADT)',
        'Excavator Training',
        'Bulldozer Training',
        'Tractor Loader Backhoe (TLB)',
        'Yellow plant machinery options',
      ],
      buttonText: 'Enquire About Training',
    },
    {
      id: 'security-training',
      icon: Shield,
      title: 'Security Training',
      tagline: 'Take your first step towards a career in security.',
      description:
        'We offer security training services designed to help individuals pursue opportunities within the security sector.',
      items: [
        'Information on available programmes',
        'Entry requirements & registration guidance',
        'Sector procedures & professional conduct',
        'Training arrangements & assessment info',
        'Potential employment pathway guidance',
      ],
      buttonText: 'Enquire About Security Training',
    },
    {
      id: 'legal-services',
      icon: Scale,
      title: 'Legal Services',
      tagline: 'Professional legal assistance. Personal attention.',
      description:
        'Our legal services support individuals, families, and businesses with a range of legal matters with clear guidance and solutions.',
      items: [
        'Legal consultations & clear advice',
        'Contract drafting and review',
        'Affidavits & Commissioner of Oaths',
        'Labour law matters & workplace disputes',
        'Family law, property, debt recovery & estate planning',
      ],
      buttonText: 'Request Legal Assistance',
    },
  ];

  return (
    <section id="services" className="bg-[#FFFEFE] py-24 md:py-36 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Split Layout: Photo on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xs overflow-hidden shadow-2xl border border-gray-200 bg-gray-100">
              <img
                src="/images/OUR SERVICES-.jpg"
                alt="South African students and professionals engaged in practical career development"
                className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#050100]/85 text-[#F7C206] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide backdrop-blur-sm border border-[#F7C206]/40">
                OUR SERVICES
              </div>
            </div>
          </div>

          {/* Right Column: Copy, Buttons, Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-xs bg-[#F7C206]/20 text-[#743F05] text-xs font-bold uppercase tracking-wider">
              Comprehensive Support Under One Roof
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#050100] tracking-tight leading-[1.15]">
              Everything You Need to Take the Next Step.
            </h2>

            <p className="text-sm md:text-base text-[#050100]/80 leading-relaxed font-normal">
              We bring education, professional development, practical training, and legal support
              together to serve individuals, families, graduates, and communities across South Africa.
            </p>

            {/* Checklist with thin dividers */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 py-2.5 border-b border-gray-200 text-sm font-medium text-[#050100]">
                <Check className="w-4 h-4 text-[#743F05] shrink-0" />
                <span>Academic Tutoring & Matric Rewrite support for Grades 10 to 12.</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 border-b border-gray-200 text-sm font-medium text-[#050100]">
                <Check className="w-4 h-4 text-[#743F05] shrink-0" />
                <span>Professional CV writing, job applications & employment database registration.</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 border-b border-gray-200 text-sm font-medium text-[#050100]">
                <Check className="w-4 h-4 text-[#743F05] shrink-0" />
                <span>Practical heavy machinery operator training (ADT, Excavator, TLB, Bulldozer).</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 border-b border-gray-200 text-sm font-medium text-[#050100]">
                <Check className="w-4 h-4 text-[#743F05] shrink-0" />
                <span>Security training information, sector preparation & entry guidance.</span>
              </div>
              <div className="flex items-center gap-3 py-2.5 border-b border-gray-200 text-sm font-medium text-[#050100]">
                <Check className="w-4 h-4 text-[#743F05] shrink-0" />
                <span>Dedicated legal consultations, contracts, labour matters & family law.</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onApplyClick}
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#050100] text-[#FFFEFE] text-sm font-bold transition-all duration-300 hover:bg-[#F7C206] hover:text-[#050100] hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Apply or Register Now</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Pillar Services Cards Grid */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-2">
              Our 5 Distinct Disciplines
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#050100] tracking-tight">
              Tailored Programmes For Every Stage of Your Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-[#FCFCFC] border border-gray-200 rounded-xs p-8 flex flex-col justify-between hover:border-[#F7C206] hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xs bg-[#FFFEFE] border border-gray-200 text-[#050100] group-hover:bg-[#F7C206] transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-xl font-bold text-[#050100] mb-1 tracking-tight">
                      {service.title}
                    </h4>

                    <p className="text-xs font-semibold text-[#743F05] mb-3">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-[#050100]/75 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-gray-200/80 mb-8">
                      {service.items.map((it, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#050100]/85">
                          <Check className="w-3.5 h-3.5 text-[#F7C206] shrink-0 mt-0.5 stroke-[3]" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onServiceSelect(service.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#050100] bg-transparent text-[#050100] text-xs font-bold uppercase tracking-wider group-hover:bg-[#050100] group-hover:text-[#FFFEFE] transition-all cursor-pointer"
                  >
                    <span>{service.buttonText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
