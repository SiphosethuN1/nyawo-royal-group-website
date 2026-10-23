import React from 'react';
import { ArrowUpRight, Check, Truck, ShieldAlert, AlertCircle, Info, MessageSquare } from 'lucide-react';

interface OperatorTrainingPageProps {
  onOperatorAction: (machine?: string) => void;
}

export const OperatorTrainingPage: React.FC<OperatorTrainingPageProps> = ({
  onOperatorAction,
}) => {
  const programmes = [
    {
      title: 'Articulated Dump Truck (ADT)',
      desc: 'Enquire about training related to articulated dump truck operation, including applicable operating procedures, hauling protocols, tipping, and practical field training arrangements.',
      tag: 'Heavy Hauling & Earthmoving',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Excavator Training',
      desc: 'Explore training focused on hydraulic excavator operation, equipment familiarisation, trenching, bulk excavation, site setup, and relevant safe operating practices.',
      tag: 'Trenching & Excavation',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Bulldozer Training',
      desc: 'Enquire about bulldozer training designed to develop technical knowledge and practical skills relevant to earth-moving operations, levelling, blade control, and ground clearing.',
      tag: 'Earthmoving & Grading',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Tractor Loader Backhoe (TLB)',
      desc: 'Explore TLB training arrangements covering the versatile equipment and dual-function skills associated with tractor-loader-backhoe operations in civil and utility works.',
      tag: 'Versatile Plant Operation',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Other Yellow Plant Machinery',
      desc: 'Contact us about other available machinery training options. Programme availability depends on the equipment and scheduled training arrangements offered.',
      tag: 'Subject to Availability',
      image: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const checklistItems = [
    'Available training dates and duration',
    'Entry requirements (age, licensing, medical fitness)',
    'Training location and practical field arrangements',
    'Practical training site arrangements and equipment availability',
    'Practical and theoretical assessment requirements',
    'The issuing body and status of any certificate',
    'Total programme fees and transparent payment arrangements',
  ];

  const steps = [
    { num: 'Step 1', title: 'Select machine', desc: 'Choose the machine you want to train on (ADT, Excavator, TLB, or Bulldozer).' },
    { num: 'Step 2', title: 'Contact our team', desc: 'Discuss programme availability, upcoming intake dates, and entry criteria.' },
    { num: 'Step 3', title: 'Confirm details', desc: 'Verify training arrangements, certification details, and total programme fees.' },
    { num: 'Step 4', title: 'Complete registration', desc: 'Register once fully satisfied with all programme information.' },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FFFEFE] text-[#050100]">
      {/* Header Banner */}
      <section className="bg-[#050100] text-[#FFFEFE] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f8?auto=format&fit=crop&w=2000&q=80"
            alt="Heavy construction machinery operating in industrial site"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050100] via-[#050100]/90 to-transparent" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F7C206]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050100]/80 border border-[#F7C206]/40 text-[#F7C206] text-xs font-bold uppercase tracking-wider mb-6">
            PAGE 5: OPERATOR TRAINING
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFEFE] leading-[1.1] max-w-4xl mb-6">
            Heavy Machinery &
            <br />
            <span className="text-[#F7C206]">Operator Training.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#FCCF29] font-semibold mb-4">
            Build Practical Skills. Prepare for Industry Opportunities.
          </p>

          <p className="text-sm sm:text-base text-[#FCFCFC]/85 max-w-2xl leading-relaxed mb-8 font-normal">
            Heavy machinery plays an important role in construction, earth-moving, infrastructure
            development, and related industries. Nyawo Royal Group offers operator training programmes
            focused on selected heavy construction and earth-moving equipment.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOperatorAction('Articulated Dump Truck (ADT)')}
              className="px-7 py-3 rounded-full bg-[#F7C206] text-[#050100] font-bold text-sm hover:bg-[#FCCF29] transition-all cursor-pointer shadow-lg"
            >
              Enquire About ADT Training
            </button>
            <button
              onClick={() => onOperatorAction('Excavator Training')}
              className="px-7 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:border-[#F7C206] hover:text-[#F7C206] transition-all cursor-pointer"
            >
              Enquire About Excavator
            </button>
          </div>
        </div>
      </section>

      {/* Machinery Programmes Cards */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-2">
            Equipment Specialisations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050100] tracking-tight">
            Our Training Programmes
          </h2>
          <p className="text-sm text-[#050100]/75 mt-2">
            Practical machinery familiarisation and safety compliance for high-demand plant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((prog, idx) => (
            <div
              key={idx}
              className="bg-[#FCFCFC] border border-gray-200 rounded-xs overflow-hidden flex flex-col justify-between hover:border-[#F7C206] hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#050100]">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-[#050100]/80 text-[#F7C206] px-2.5 py-1 rounded-xs text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  {prog.tag}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#050100] mb-2 group-hover:text-[#743F05] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#050100]/75 leading-relaxed font-normal">
                    {prog.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOperatorAction(prog.title)}
                  className="mt-6 w-full py-2.5 px-4 rounded-full border border-[#050100] text-xs font-bold text-[#050100] group-hover:bg-[#050100] group-hover:text-[#FFFEFE] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Enquire about {prog.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certification & Information Checklist */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block">
              Essential Due Diligence
            </span>
            <h3 className="text-3xl font-bold text-[#050100] tracking-tight">
              Training & Certification Information
            </h3>
            <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
              Before registration, our team will provide full clarity on all operational and
              accreditation arrangements so you make an informed decision before enrolling.
            </p>

            <div className="p-4 bg-amber-50 border-l-4 border-[#F7C206] text-xs text-[#743F05] space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#050100]">
                <AlertCircle className="w-4 h-4 text-[#743F05]" />
                <span>Certification Status Advisory</span>
              </div>
              <p>
                Certification depends on the applicable programme and authorised issuing body.
                Confirm all details with our team before paying any registration fees.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#050100] text-[#FFFEFE] p-8 md:p-12 rounded-xs border-t-4 border-[#F7C206]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FCCF29] block mb-2">
              Verify Before Enrolling
            </span>
            <h4 className="text-2xl font-bold text-[#FFFEFE] mb-6">
              Details Confirmed By Our Coordinators:
            </h4>

            <div className="space-y-3">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-[#4F2704]/25 border border-[#4F2704]/50 rounded-xs">
                  <Check className="w-4 h-4 text-[#F7C206] shrink-0 mt-0.5 stroke-[3]" />
                  <span className="text-xs sm:text-sm text-[#FCFCFC]/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Enrolment Workflow */}
      <section className="max-w-[1400px] mx-auto py-20 px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-2">
            Enrolment Workflow
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#050100]">
            How to Enquire About Training
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div key={idx} className="p-6 bg-[#FCFCFC] border border-gray-200 rounded-xs">
              <span className="text-xs font-bold text-[#743F05] block mb-1">{st.num}</span>
              <h4 className="text-base font-bold text-[#050100] mb-2">{st.title}</h4>
              <p className="text-xs text-[#050100]/75 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Final CTA Box */}
        <div className="mt-16 p-8 md:p-12 rounded-xs bg-[#050100] text-[#FFFEFE] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl sm:text-3xl font-bold text-[#FFFEFE] mb-2">
              Take the Next Step Towards Skills Development.
            </h4>
            <p className="text-xs md:text-sm text-[#FCFCFC]/80 max-w-xl font-normal">
              Build your knowledge and explore relevant machinery operator training opportunities with Nyawo Royal Group.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOperatorAction('General Operator Training')}
              className="px-6 py-3 rounded-full bg-[#F7C206] text-[#050100] font-bold text-xs hover:bg-[#FCCF29] transition-all cursor-pointer"
            >
              Enquire Now
            </button>
            <a
              href="https://wa.me/27796339234"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-xs hover:border-[#F7C206] hover:text-[#F7C206] transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
