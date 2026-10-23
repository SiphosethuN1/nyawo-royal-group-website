import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Academic Tutoring',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredMethod, setPreferredMethod] = useState('WhatsApp');
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050100]/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#FFFEFE] rounded-xs shadow-2xl border-t-4 border-[#F7C206] overflow-hidden my-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 text-[#050100] hover:text-[#743F05] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F7C206]/20 text-[#743F05] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-[#050100] tracking-tight">
                Enquiry Received
              </h3>
              <p className="text-sm text-[#050100]/80 leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="font-semibold">{name}</span>. Your enquiry regarding{' '}
                <span className="font-semibold text-[#743F05]">{service}</span> has been received. Our
                coordinators will contact you via {preferredMethod} at {phone || email}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-8 py-3 rounded-full bg-[#050100] text-[#FFFEFE] text-sm font-bold hover:bg-[#743F05] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/logo.png"
                    alt="Nyawo Royal Group Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-[#743F05] uppercase tracking-wider block">
                      NYAWO ROYAL GROUP (PTY) LTD
                    </span>
                    <span className="text-xs text-[#050100]/60 font-medium">
                      Othobothini, South Africa
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#050100] tracking-tight">
                  Enquire About Our Services
                </h3>
                <p className="text-xs text-[#050100]/70 leading-relaxed">
                  Academic support, career readiness, heavy machinery operator training, security skills, and legal assistance.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1">
                    Your Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sipho Sithole"
                    className="w-full px-3.5 py-2 border border-gray-300 rounded-xs text-sm text-[#050100] focus:outline-none focus:border-[#050100]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#050100] mb-1">
                      Contact Number*
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 072 123 4567"
                      className="w-full px-3 py-2 border border-gray-300 rounded-xs text-xs text-[#050100] focus:outline-none focus:border-[#050100]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#050100] mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sipho@example.co.za"
                      className="w-full px-3 py-2 border border-gray-300 rounded-xs text-xs text-[#050100] focus:outline-none focus:border-[#050100]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#050100] mb-1">
                      Service of Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xs text-xs text-[#050100] focus:outline-none focus:border-[#050100]"
                    >
                      <option value="Academic Tutoring">Academic Tutoring (Grades 10–12)</option>
                      <option value="Matric Rewrite">Matric Rewrite Programme</option>
                      <option value="Career Development">Career Development & CVs</option>
                      <option value="Operator Training">Operator Training (Heavy Plant)</option>
                      <option value="Security Training">Security Training Services</option>
                      <option value="Legal Services">Legal Services & Consultations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#050100] mb-1">
                      Preferred Contact
                    </label>
                    <select
                      value={preferredMethod}
                      onChange={(e) => setPreferredMethod(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xs text-xs text-[#050100] focus:outline-none focus:border-[#050100]"
                    >
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you want to achieve..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-xs text-xs text-[#050100] focus:outline-none focus:border-[#050100] resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#050100]/65 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#743F05] shrink-0" />
                <span>POPIA compliant. Your details are strictly confidential.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#050100] hover:bg-[#743F05] text-[#FFFEFE] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 active:scale-95 shadow-md cursor-pointer group mt-2"
              >
                <span>Submit Quick Enquiry</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#F7C206]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
