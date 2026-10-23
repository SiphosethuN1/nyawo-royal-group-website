import React, { useState } from 'react';
import { ShieldCheck, FileText, Lock, AlertCircle, Mail, MapPin } from 'lucide-react';

export const PrivacyTermsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  return (
    <div className="pt-28 pb-20 bg-[#FFFEFE] text-[#050100]">
      {/* Header Banner */}
      <section className="bg-[#050100] text-[#FFFEFE] py-20 md:py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050100]/80 border border-[#F7C206]/40 text-[#F7C206] text-xs font-bold uppercase tracking-wider mb-6">
            PAGE 10: LEGAL COMPLIANCE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FFFEFE] leading-[1.1] max-w-4xl mb-4">
            Privacy Policy &
            <br />
            <span className="text-[#F7C206]">Terms of Website Use.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#FCFCFC]/80 max-w-2xl leading-relaxed font-normal">
            Nyawo Royal Group (Pty) Ltd respects your privacy and complies with applicable South
            African law, including the Protection of Personal Information Act (POPIA).
          </p>

          {/* Tab Switcher */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'privacy'
                  ? 'bg-[#F7C206] text-[#050100] shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Privacy Policy (POPIA)
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'terms'
                  ? 'bg-[#F7C206] text-[#050100] shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Terms of Website Use
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1000px] mx-auto py-20 px-6 md:px-12">
        {activeTab === 'privacy' ? (
          <div className="space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-1">
                Data Protection
              </span>
              <h2 className="text-3xl font-bold text-[#050100] tracking-tight">
                Privacy Policy
              </h2>
              <p className="text-base font-semibold text-[#743F05] mt-1">
                Your Information Matters.
              </p>
              <p className="text-sm text-[#050100]/80 leading-relaxed font-normal mt-3">
                Nyawo Royal Group (Pty) Ltd respects the privacy of individuals who visit its website
                or contact the company about its services. This policy explains how personal
                information submitted through the website is intended to be collected, used, stored,
                and protected in accordance with the Protection of Personal Information Act (POPIA).
              </p>
            </div>

            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">1. Information We Collect</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  Depending on the service requested, we may collect information such as:
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-[#050100]/80 space-y-1.5 font-normal">
                  <li>Your name and contact details (telephone/WhatsApp and email address)</li>
                  <li>Your specific service enquiry and requirements</li>
                  <li>Academic grade level or career-related information you choose to provide</li>
                  <li>Information needed to respond effectively to a service request</li>
                  <li>Other information reasonably required for a specific programme or service</li>
                </ul>
                <p className="text-xs text-[#050100]/70 italic">
                  We ask visitors to provide only information relevant to their enquiry.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">2. How We Use Your Information</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  Personal information is used solely for legitimate business purposes such as:
                </p>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-[#050100]/80 space-y-1.5 font-normal">
                  <li>Responding to enquiries and answering questions</li>
                  <li>Providing detailed information about our courses, tutoring, and services</li>
                  <li>Processing preliminary registration requests and bookings</li>
                  <li>Communicating about programmes, timetables, and consultation appointments</li>
                  <li>Preparing requested service documents (such as CVs or contract drafts)</li>
                  <li>Managing client relationships respectfully and professionally</li>
                  <li>Meeting applicable legal, regulatory, or administrative obligations</li>
                </ul>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">3. Sharing of Information</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  We do not treat personal information as information for unrestricted public use,
                  and we never sell client data. Where necessary and lawful, information may be
                  shared with authorized service providers, training bodies, employment platforms,
                  or professional advisers strictly to fulfil a requested service or comply with legal requirements.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">4. Protection of Personal Information</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  We take appropriate technical and organisational measures to protect personal
                  information against unauthorised access, loss, misuse, or accidental disclosure.
                  Visitors should avoid submitting sensitive identity numbers, bank passwords, or
                  confidential legal case files through general online contact forms.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">5. Your Rights</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  Subject to applicable law under POPIA, you have rights relating to your personal
                  information. These include rights to request access to your personal data, request
                  correction or deletion where applicable, and raise concerns regarding information handling.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">6. Contact About Privacy</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  For privacy-related enquiries or data requests, contact:
                </p>
                <div className="p-4 bg-[#FCFCFC] border border-gray-200 rounded-xs space-y-2 text-xs text-[#050100]">
                  <p><strong>Entity:</strong> Nyawo Royal Group (Pty) Ltd</p>
                  <p><strong>Email:</strong> privacy@nyaworoyalgroup.co.za</p>
                  <p><strong>Physical Address:</strong> Othobothini, South Africa</p>
                </div>
              </div>

              <div className="pt-6 space-y-2">
                <h3 className="text-xl font-bold text-[#050100]">7. Policy Updates</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  This policy will be updated when necessary to reflect changes in our services,
                  information-handling practices, or statutory legal obligations.
                </p>
                <p className="text-xs text-[#743F05] font-semibold">Effective Date: 2026</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-1">
                Website Guidelines
              </span>
              <h2 className="text-3xl font-bold text-[#050100] tracking-tight">
                Terms of Website Use
              </h2>
              <p className="text-sm text-[#050100]/80 leading-relaxed font-normal mt-3">
                Please review these terms governing the use of the Nyawo Royal Group (Pty) Ltd website.
              </p>
            </div>

            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">1. General Information</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  This website provides information about the educational, career, operator training,
                  security training, and legal services offered by Nyawo Royal Group (Pty) Ltd. Website
                  content is intended to help visitors understand available offerings and make enquiries.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">2. Accuracy of Information</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  We aim to keep website information accurate and current. Service availability,
                  programme dates, fees, entry requirements, and other details should always be
                  confirmed directly with the company before finalising registration.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">3. Enquiries and Registration</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  Submitting a website enquiry does not automatically confirm registration,
                  acceptance into a programme, an appointment, or an engagement for legal services.
                  The relevant terms, fees, requirements, and arrangements will be confirmed through
                  the appropriate formal onboarding process.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">4. Training and Employment Outcomes</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  Training and career development services are intended to support learning, skill
                  acquisition, and employment readiness. Participation does not guarantee a qualification,
                  certification, interview, job offer, or employment placement. Any certification or
                  recognition should be confirmed against the relevant programme and authorized issuing body.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">5. Legal Services</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  Website information is general information about the company's legal service
                  offerings. It does not, by itself, constitute legal advice tailored to an
                  individual's circumstances or establish an attorney-client relationship. Specific
                  legal services are subject to relevant engagement arrangements and professional requirements.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">6. Website Content</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  Website text, branding, logos, and other original content are intended for use in
                  connection with the company and its services. Visitors should not reproduce or use
                  protected material without appropriate written permission.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">7. Third-Party Services</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  The website may refer visitors to external platforms or messaging channels (e.g.
                  WhatsApp). Their content, privacy practices, and terms are governed by the relevant third parties.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">8. Changes to These Terms</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  Nyawo Royal Group (Pty) Ltd reserves the right to update website information and
                  these terms as its services and statutory requirements develop, subject to applicable law.
                </p>
              </div>

              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-bold text-[#050100]">9. Contact</h3>
                <p className="text-sm text-[#050100]/80 leading-relaxed font-normal">
                  For questions about these terms, contact the company using the official contact
                  details published on this website:
                </p>
                <div className="p-4 bg-[#FCFCFC] border border-gray-200 rounded-xs space-y-1 text-xs text-[#050100]">
                  <p><strong>Entity:</strong> Nyawo Royal Group (Pty) Ltd</p>
                  <p><strong>Location:</strong> Othobothini, South Africa</p>
                  <p><strong>Email:</strong> sakhilew@gmail.com</p>
                </div>
                <p className="text-xs text-[#743F05] font-semibold pt-2">Effective Date: 2026</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
