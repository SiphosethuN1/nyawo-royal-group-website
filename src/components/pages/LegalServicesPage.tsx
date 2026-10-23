import React from 'react';
import { ArrowUpRight, Check, Scale, Shield, FileText, AlertCircle, Phone, Mail, MessageSquare } from 'lucide-react';

interface LegalServicesPageProps {
  onLegalAction: (service?: string) => void;
}

export const LegalServicesPage: React.FC<LegalServicesPageProps> = ({
  onLegalAction,
}) => {
  const legalServices = [
    {
      title: 'Legal Advice and Consultations',
      desc: 'Obtain professional guidance on your legal concerns, understand relevant options under South African law, and discuss practical next steps based on your circumstances.',
    },
    {
      title: 'Contract Drafting and Review',
      desc: 'Professional assistance with preparing, reviewing, vetting, and explaining contracts, commercial agreements, service level agreements, and memorandums.',
    },
    {
      title: 'Affidavits & Commissioner of Oaths',
      desc: 'Enquire about affidavit preparation assistance and commissioner of oaths verification services, subject to applicable requirements and availability.',
    },
    {
      title: 'Labour Law & Dispute Resolution',
      desc: 'Support with employment-related matters, CCMA processes, disciplinary hearings, workplace disputes, and employer/employee compliance.',
    },
    {
      title: 'Family Law Matters',
      desc: 'Compassionate, confidential legal assistance relating to selected family law matters, maintenance, parental rights, and domestic agreements.',
    },
    {
      title: 'Civil Litigation Support',
      desc: 'Assistance with selected civil claims and disputes, process pleadings, and clear guidance on court procedures and timelines.',
    },
    {
      title: 'Debt Collection and Recovery',
      desc: 'Lawful, structured debt recovery processes, letters of demand, acknowledgment of debt (AOD) documentation, and recovery tracking.',
    },
    {
      title: 'Property & Conveyancing Assistance',
      desc: 'Enquire about legal assistance relating to property transactions, transfers, lease agreements, and conveyancing matters via professional channels.',
    },
    {
      title: 'Business Registration & Compliance',
      desc: 'Assistance with CIPC company registrations, statutory documentation, founding agreements, and selected corporate compliance requirements.',
    },
    {
      title: 'Wills and Estate Planning',
      desc: 'Support with drafting legally sound wills, appointing executors, and structuring estate planning arrangements to protect loved ones and assets.',
    },
  ];

  const whoWeAssist = [
    'Individuals seeking clear legal guidance and advice',
    'Families requiring assistance with legal matters',
    'Employees and employers resolving workplace disputes',
    'Business owners, entrepreneurs, and start-up founders',
    'Clients managing civil disputes and debt collection',
    'Individuals seeking assistance with contracts, property, or wills',
  ];

  const steps = [
    { name: 'Listen', desc: 'We begin by understanding your concern and hearing all relevant background.' },
    { name: 'Assess', desc: 'We discuss the nature of your matter and the assistance required.' },
    { name: 'Explain', desc: 'We outline relevant legal options, requirements, costs, and next steps.' },
    { name: 'Assist', desc: 'Where the service is accepted, we provide the agreed legal assistance within professional standards.' },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FFFEFE] text-[#050100]">
      {/* Header Banner */}
      <section className="bg-[#050100] text-[#FFFEFE] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=2000&q=80"
            alt="Law library and legal documents"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050100] via-[#050100]/90 to-transparent" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F7C206]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050100]/80 border border-[#F7C206]/40 text-[#F7C206] text-xs font-bold uppercase tracking-wider mb-6">
            PAGE 7: LEGAL SERVICES
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFEFE] leading-[1.1] max-w-4xl mb-6">
            Professional
            <br />
            <span className="text-[#F7C206]">Legal Services.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#FCCF29] font-semibold mb-4">
            Clear Guidance. Professional Support. Solutions Focused on Your Needs.
          </p>

          <p className="text-sm sm:text-base text-[#FCFCFC]/85 max-w-2xl leading-relaxed mb-8 font-normal">
            Legal matters often involve important decisions affecting your family, employment,
            finances, property, or business. Nyawo Royal Group provides access to legal services
            through its qualified attorney and legal team.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onLegalAction('Legal Consultation')}
              className="px-7 py-3 rounded-full bg-[#F7C206] text-[#050100] font-bold text-sm hover:bg-[#FCCF29] transition-all cursor-pointer shadow-lg"
            >
              Request a Legal Consultation
            </button>
            <button
              onClick={() => onLegalAction('General Legal Enquiries')}
              className="px-7 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:border-[#F7C206] hover:text-[#F7C206] transition-all cursor-pointer"
            >
              Contact Our Legal Team
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid (10 Legal Services) */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-2">
            Practice Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050100] tracking-tight">
            Our Legal Services
          </h2>
          <p className="text-sm text-[#050100]/75 mt-2">
            Professional assistance with personal attention and strict confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalServices.map((ls, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#FCFCFC] border border-gray-200 rounded-xs flex flex-col justify-between hover:border-[#F7C206] hover:shadow-lg transition-all group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#743F05] block mb-2">
                  Service {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <h3 className="text-xl font-bold text-[#050100] mb-3 group-hover:text-[#743F05] transition-colors">
                  {ls.title}
                </h3>
                <p className="text-xs md:text-sm text-[#050100]/75 leading-relaxed font-normal">
                  {ls.desc}
                </p>
              </div>

              <button
                onClick={() => onLegalAction(ls.title)}
                className="mt-6 w-full py-2.5 px-4 rounded-full border border-[#050100] text-xs font-bold text-[#050100] hover:bg-[#050100] hover:text-[#FFFEFE] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Enquire about this matter</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Assist & Approach */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Who We Assist */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block">
              Clients
            </span>
            <h3 className="text-3xl font-bold text-[#050100] tracking-tight">
              Who We Assist
            </h3>
            <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
              Our legal services are tailored for individuals, families, and organizations seeking
              practical, respectful, and results-oriented guidance:
            </p>

            <div className="space-y-3 pt-2">
              {whoWeAssist.map((wa, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#FCFCFC] border border-gray-200 rounded-xs text-xs font-medium text-[#050100]">
                  <Check className="w-4 h-4 text-[#F7C206] shrink-0 stroke-[3]" />
                  <span>{wa}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our 4-Step Legal Approach */}
          <div className="lg:col-span-7 bg-[#050100] text-[#FFFEFE] p-8 md:p-12 rounded-xs border-t-4 border-[#F7C206] space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FCCF29] block">
              Ethical Practice
            </span>
            <h3 className="text-3xl font-bold tracking-tight text-[#FFFEFE]">
              Our Approach to Legal Assistance
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {steps.map((st, idx) => (
                <div key={idx} className="p-4 bg-[#4F2704]/20 border border-[#4F2704]/40 rounded-xs">
                  <span className="text-xs font-mono font-bold text-[#F7C206] block mb-1">
                    0{idx + 1} • {st.name}
                  </span>
                  <p className="text-xs text-[#FCFCFC]/80 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#4F2704]/60 space-y-2">
              <h5 className="text-xs font-bold text-[#F7C206] uppercase tracking-wider">
                Confidentiality and Professional Conduct
              </h5>
              <p className="text-xs text-[#FCFCFC]/75 leading-relaxed font-normal">
                We recognise the importance of handling legal matters with care and discretion.
                Client information is handled in accordance with applicable professional duties
                and privacy requirements. The nature and scope of legal assistance depend on the
                circumstances of each matter, professional availability, and applicable engagement terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action & Disclaimer */}
      <section className="max-w-[1400px] mx-auto py-16 px-6 md:px-12">
        <div className="p-8 md:p-12 rounded-xs bg-[#FCFCFC] border border-gray-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#050100] mb-2">
                Need Legal Assistance?
              </h4>
              <p className="text-xs sm:text-sm text-[#050100]/75 max-w-xl font-normal">
                Do not leave important legal questions unaddressed. Contact our team to enquire
                about the appropriate service for your circumstances.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onLegalAction('Legal Consultation')}
                className="px-6 py-3 rounded-full bg-[#050100] text-[#FFFEFE] font-bold text-xs hover:bg-[#743F05] transition-all cursor-pointer"
              >
                Request Consultation
              </button>
              <button
                onClick={() => onLegalAction('General Legal Enquiries')}
                className="px-6 py-3 rounded-full border border-[#050100] text-[#050100] font-semibold text-xs hover:bg-[#050100] hover:text-[#FFFEFE] transition-all cursor-pointer"
              >
                Contact Legal Team
              </button>
            </div>
          </div>

          <div className="p-4 bg-gray-100 rounded-xs text-[11px] text-[#050100]/70 flex items-start gap-2 border border-gray-200">
            <AlertCircle className="w-4 h-4 text-[#743F05] shrink-0 mt-0.5" />
            <span>
              Submitting an enquiry does not, by itself, establish an attorney-client relationship.
              Engagement terms, scope of service, and any applicable professional fees will be
              explained transparently through the relevant consultation process.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
