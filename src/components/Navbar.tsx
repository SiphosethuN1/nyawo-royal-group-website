import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X, ChevronDown, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onEnquireClick: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onEnquireClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { label: 'Academic Tutoring', page: 'tutoring', desc: 'Mathematics, Sciences & Matric Rewrite' },
    { label: 'Career Development', page: 'career', desc: 'Professional CVs & Job Readiness' },
    { label: 'Operator Training', page: 'operator-training', desc: 'Heavy Machinery, ADT & Excavators' },
    { label: 'Security Training', page: 'security-training', desc: 'Accredited Sector Skills & Prep' },
    { label: 'Legal Services', page: 'legal-services', desc: 'Advice, Contracts, Labour & Family Law' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServiceActive = [
    'tutoring',
    'career',
    'operator-training',
    'security-training',
    'legal-services',
  ].includes(activePage);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050100]/90 backdrop-blur-md py-3.5 border-b border-[#4F2704]/40 shadow-2xl'
          : 'bg-gradient-to-b from-[#050100]/90 via-[#050100]/40 to-transparent backdrop-blur-[2px] py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 group cursor-pointer text-left focus:outline-none"
          aria-label="Nyawo Royal Group Home"
        >
          <img
            src="/images/logo.png"
            alt="Nyawo Royal Group Logo"
            className="h-11 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(247,194,6,0.3)]"
          />
          <div className="flex flex-col">
            <span className="text-base md:text-xl font-bold tracking-tight text-[#FFFEFE] leading-none group-hover:text-[#F7C206] transition-colors">
              NYAWO ROYAL GROUP
            </span>
            <span className="text-[10px] tracking-wider text-[#FCCF29] uppercase font-semibold mt-1">
              Empowering Minds • Building Skills
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-medium"
          aria-label="Primary Navigation"
        >
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
              activePage === 'home'
                ? 'text-[#FFFEFE] font-semibold'
                : 'text-[#E0DFDE]/80 hover:text-[#F7C206]'
            }`}
          >
            {activePage === 'home' && (
              <span className="inline-block w-1.5 h-1.5 bg-[#F7C206] rounded-xs" />
            )}
            <span>Home</span>
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
              activePage === 'about'
                ? 'text-[#FFFEFE] font-semibold'
                : 'text-[#E0DFDE]/80 hover:text-[#F7C206]'
            }`}
          >
            {activePage === 'about' && (
              <span className="inline-block w-1.5 h-1.5 bg-[#F7C206] rounded-xs" />
            )}
            <span>About Us</span>
          </button>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`transition-colors duration-200 flex items-center gap-1.5 cursor-pointer py-1 ${
                isServiceActive
                  ? 'text-[#F7C206] font-semibold'
                  : 'text-[#E0DFDE]/80 hover:text-[#F7C206]'
              }`}
            >
              {isServiceActive && (
                <span className="inline-block w-1.5 h-1.5 bg-[#F7C206] rounded-xs" />
              )}
              <span>Our Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#F7C206]' : ''
                }`}
              />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 rounded-sm bg-[#050100]/95 backdrop-blur-xl border border-[#4F2704] shadow-2xl p-2 z-50 divide-y divide-[#4F2704]/40">
                {serviceLinks.map((s) => (
                  <button
                    key={s.page}
                    onClick={() => handleNavClick(s.page)}
                    className={`w-full text-left p-3 rounded-xs transition-all flex flex-col cursor-pointer ${
                      activePage === s.page
                        ? 'bg-[#4F2704]/40 text-[#F7C206]'
                        : 'text-[#FCFCFC] hover:bg-[#4F2704]/20 hover:text-[#F7C206]'
                    }`}
                  >
                    <span className="text-xs font-bold">{s.label}</span>
                    <span className="text-[11px] text-[#E0DFDE]/60 mt-0.5 font-normal">
                      {s.desc}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('apply')}
            className={`transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
              activePage === 'apply'
                ? 'text-[#FFFEFE] font-semibold'
                : 'text-[#E0DFDE]/80 hover:text-[#F7C206]'
            }`}
          >
            {activePage === 'apply' && (
              <span className="inline-block w-1.5 h-1.5 bg-[#F7C206] rounded-xs" />
            )}
            <span>Apply / Register</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
              activePage === 'contact'
                ? 'text-[#FFFEFE] font-semibold'
                : 'text-[#E0DFDE]/80 hover:text-[#F7C206]'
            }`}
          >
            {activePage === 'contact' && (
              <span className="inline-block w-1.5 h-1.5 bg-[#F7C206] rounded-xs" />
            )}
            <span>Contact Us</span>
          </button>
        </nav>

        {/* Right CTA Area */}
        <div className="hidden sm:flex items-center gap-3">
          {/* WhatsApp Direct Connect */}
          <a
            href="https://wa.me/27796339234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#F7C206]/40 bg-[#050100]/60 text-[#F7C206] text-xs font-semibold hover:border-[#F7C206] hover:bg-[#F7C206]/10 transition-all cursor-pointer"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Enquire Button */}
          <button
            onClick={() => onEnquireClick()}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F7C206] text-[#050100] text-sm font-bold transition-all duration-300 hover:bg-[#FCCF29] hover:shadow-[0_0_20px_rgba(247,194,6,0.45)] active:scale-95 cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2.5">
          <button
            onClick={() => onEnquireClick()}
            className="px-3 py-1.5 rounded-full bg-[#F7C206] text-[#050100] text-xs font-bold"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FFFEFE] hover:text-[#F7C206] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050100]/98 border-b border-[#4F2704] px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-3 text-sm">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center justify-between py-2 border-b border-[#4F2704]/30 text-left ${
                activePage === 'home' ? 'text-[#F7C206] font-bold' : 'text-[#E0DFDE]'
              }`}
            >
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`flex items-center justify-between py-2 border-b border-[#4F2704]/30 text-left ${
                activePage === 'about' ? 'text-[#F7C206] font-bold' : 'text-[#E0DFDE]'
              }`}
            >
              <span>About Us</span>
            </button>

            <div className="py-2 border-b border-[#4F2704]/30">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FCCF29] block mb-2">
                Our Services
              </span>
              <div className="space-y-2 pl-3">
                {serviceLinks.map((s) => (
                  <button
                    key={s.page}
                    onClick={() => handleNavClick(s.page)}
                    className={`block w-full text-left py-1 text-xs ${
                      activePage === s.page ? 'text-[#F7C206] font-bold' : 'text-[#FCFCFC]/80'
                    }`}
                  >
                    • {s.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('apply')}
              className={`flex items-center justify-between py-2 border-b border-[#4F2704]/30 text-left ${
                activePage === 'apply' ? 'text-[#F7C206] font-bold' : 'text-[#E0DFDE]'
              }`}
            >
              <span>Apply or Register</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`flex items-center justify-between py-2 border-b border-[#4F2704]/30 text-left ${
                activePage === 'contact' ? 'text-[#F7C206] font-bold' : 'text-[#E0DFDE]'
              }`}
            >
              <span>Contact Us</span>
            </button>

            <button
              onClick={() => handleNavClick('privacy-terms')}
              className={`flex items-center justify-between py-2 border-b border-[#4F2704]/30 text-left ${
                activePage === 'privacy-terms' ? 'text-[#F7C206] font-bold' : 'text-[#E0DFDE]'
              }`}
            >
              <span>Privacy Policy & Terms</span>
            </button>

            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnquireClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F7C206] text-[#050100] font-bold text-sm"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/27796339234"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#F7C206]/50 bg-[#050100] text-[#F7C206] font-semibold text-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Our Team</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
