import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050100] text-[#FCFCFC] pt-20 pb-8 px-6 md:px-12 relative overflow-hidden border-t border-[#4F2704]/40">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Company Banner in Footer */}
        <div className="mb-14 pb-12 border-b border-[#4F2704]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img
              src="/images/logo.png"
              alt="Nyawo Royal Group Logo"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(247,194,6,0.3)]"
            />
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-[#FFFEFE]">
                Nyawo Royal Group (Pty) Ltd
              </h3>
              <p className="text-sm text-[#F7C206] font-semibold mt-1">
                Empowering Minds, Building Skills, Creating Opportunities.
              </p>
              <p className="text-xs text-[#E0DFDE]/70 mt-1">
                Education | Career Development | Operator Training | Security Training | Legal Services
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/27796339234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7C206] text-[#050100] text-xs font-bold hover:bg-[#FCCF29] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Our Team</span>
            </a>
          </div>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border border-[#4F2704]/50 rounded-xs bg-[#050100]/80 divide-y md:divide-y-0 md:divide-x divide-[#4F2704]/40">
          {/* Column 1: Newsletter & Contacts (lg:col-span-4) */}
          <div className="p-8 md:p-10 lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#FCCF29] uppercase tracking-wider">
                Stay Informed
              </h4>
              <p className="text-xs text-[#FCFCFC]/80 leading-relaxed">
                Subscribe for updates regarding academic schedules, matric rewrites, operator intake dates, and career guidance.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubscribe} className="relative max-w-sm pt-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-transparent border-b border-[#4F2704] py-2.5 pr-12 text-sm text-[#FCFCFC] placeholder-gray-500 focus:outline-none focus:border-[#F7C206] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Submit Email"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F7C206] hover:bg-[#FCCF29] text-[#050100] flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>

              {subscribed && (
                <p className="text-xs text-[#F7C206] animate-fade-in font-medium">
                  Thank you for subscribing to Nyawo Royal Group updates.
                </p>
              )}

              <p className="text-[11px] text-[#FCFCFC]/50">
                Your information is handled in accordance with POPIA.
              </p>
            </div>

            {/* Direct Contact Summary */}
            <div className="space-y-2 text-xs text-[#FCFCFC]/70 pt-4 border-t border-[#4F2704]/40">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F7C206]" />
                <span>Othobothini, South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F7C206]" />
                <a href="mailto:sakhilew@gmail.com" className="hover:text-[#F7C206]">
                  sakhilew@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F7C206]" />
                <span>Telephone: +27 (0) 79 633 9234</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-3) */}
          <div className="p-8 md:p-10 lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#FCCF29] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-[#FCFCFC]/70 font-normal">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tutoring')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer">
                  Academic Tutoring
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('career')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer">
                  Career Development
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('operator-training')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer">
                  Operator Training
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('security-training')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer">
                  Security Training
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('legal-services')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer">
                  Legal Services
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Registration & Enquiries (lg:col-span-3) */}
          <div className="p-8 md:p-10 lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#FCCF29] uppercase tracking-wider">
              Apply & Connect
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-[#FCFCFC]/70 font-normal">
              <li>
                <button onClick={() => handleNav('apply')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer font-semibold text-[#FFFEFE]">
                  Apply or Register
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy-terms')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer">
                  Privacy Policy (POPIA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy-terms')} className="hover:text-[#F7C206] transition-colors text-left cursor-pointer">
                  Terms of Website Use
                </button>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/27796339234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F7C206] hover:underline flex items-center gap-1 font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: +27 (0) 79 633 9234</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Leadership & Location (lg:col-span-2) */}
          <div className="p-8 md:p-10 lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#FCCF29] uppercase tracking-wider">
              Governance
            </h4>
            <div className="space-y-3 text-xs text-[#FCFCFC]/70 font-normal">
              <div>
                <span className="text-[10px] uppercase text-[#FCCF29] block font-mono">Directors</span>
                <p className="text-[#FFFEFE] font-medium">Ms. Nombulelo Mlambo</p>
                <p className="text-[#FFFEFE] font-medium">Mr. Sakhile Nyawo</p>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#FCCF29] block font-mono">Incorporation</span>
                <p>Est. 2026</p>
                <p>Othobothini, South Africa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Watermark Typography */}
        <div className="pt-16 pb-6 overflow-hidden select-none opacity-20">
          <div className="whitespace-nowrap text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-extrabold tracking-tight text-transparent [-webkit-text-stroke:1px_#F7C206]">
            NYAWO ROYAL GROUP • NYAWO ROYAL GROUP •
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4F2704]/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FCFCFC]/60">
          <p>© 2026 Nyawo Royal Group (Pty) Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('privacy-terms')} className="hover:text-[#F7C206] transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => handleNav('privacy-terms')} className="hover:text-[#F7C206] transition-colors cursor-pointer">
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
