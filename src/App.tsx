/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveFeatureShowcase } from './components/InteractiveFeatureShowcase';
import { ValueStatement } from './components/ValueStatement';
import { MetricsShowcase } from './components/MetricsShowcase';
import { SolutionsSection } from './components/SolutionsSection';
import { SkyscraperStats } from './components/SkyscraperStats';
import { HorizontalCaseStudies } from './components/HorizontalCaseStudies';
import { StrategicProcess } from './components/StrategicProcess';
import { TestimonialsBanner } from './components/TestimonialsBanner';
import { FaqSection } from './components/FaqSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CaseStudyDetailModal } from './components/CaseStudyDetailModal';
import { CaseStudy } from './utils/advisory';

// Dedicated Page Views
import { AboutPage } from './components/pages/AboutPage';
import { AcademicTutoringPage } from './components/pages/AcademicTutoringPage';
import { CareerDevelopmentPage } from './components/pages/CareerDevelopmentPage';
import { OperatorTrainingPage } from './components/pages/OperatorTrainingPage';
import { SecurityTrainingPage } from './components/pages/SecurityTrainingPage';
import { LegalServicesPage } from './components/pages/LegalServicesPage';
import { ApplyRegisterPage } from './components/pages/ApplyRegisterPage';
import { ContactPage } from './components/pages/ContactPage';
import { PrivacyTermsPage } from './components/pages/PrivacyTermsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Academic Tutoring');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Sync with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = [
        'home',
        'about',
        'tutoring',
        'career',
        'operator-training',
        'security-training',
        'legal-services',
        'apply',
        'contact',
        'privacy-terms',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (service = 'Academic Tutoring') => {
    setModalService(service);
    setModalOpen(true);
  };

  const scrollTo = (id: string) => {
    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFEFE] text-[#050100] selection:bg-[#F7C206]/35 selection:text-[#050100]">
      {/* Luxury Navigation */}
      <Navbar
        activePage={currentPage}
        onNavigate={navigateTo}
        onEnquireClick={(service) => handleOpenModal(service || 'General Enquiry')}
      />

      {/* Dynamic Page Router */}
      <main>
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section (Page 1) */}
            <HeroSection
              onExploreServicesClick={() => scrollTo('services')}
              onEnquireNowClick={() => handleOpenModal('General Enquiry')}
            />

            {/* 2. Interactive Feature Showcase & Overlaid Badges */}
            <div id="features">
              <InteractiveFeatureShowcase />
            </div>

            {/* 3. Value Statement */}
            <ValueStatement
              onGetStartedClick={() => scrollTo('consultation')}
              onOurStoryClick={() => navigateTo('about')}
            />

            {/* 4. Staggered Metrics Showcase */}
            <MetricsShowcase />

            {/* 5. Solutions & 5 Core Pillar Services */}
            <SolutionsSection
              onServiceSelect={(serviceId) => navigateTo(serviceId)}
              onApplyClick={() => navigateTo('apply')}
            />

            {/* 6. Skyscraper Stats: 6 Core Advantages & 10+ Groups */}
            <SkyscraperStats />

            {/* 7. Horizontally Scrolled Real Outcomes */}
            <HorizontalCaseStudies
              onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
              onExploreAllClick={() => handleOpenModal('Programme Enquiry')}
            />

            {/* 8. Strategic 4-Step Process & Watermark Marquee */}
            <StrategicProcess />

            {/* 9. Testimonials & Commitment Banner */}
            <TestimonialsBanner
              onFreeConsultationClick={() => handleOpenModal('Consultation Request')}
            />

            {/* 10. FAQ Section */}
            <div id="faq">
              <FaqSection onAskQuestionClick={() => handleOpenModal('General Question')} />
            </div>

            {/* 11. Consultation & Contact Enquiry Section */}
            <ConsultationSection
              onPricingPlansClick={() => handleOpenModal('Course Schedules & Fees')}
              onContactUsClick={() => navigateTo('contact')}
            />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onExploreServices={() => navigateTo('home')}
            onContactClick={() => navigateTo('contact')}
          />
        )}

        {currentPage === 'tutoring' && (
          <AcademicTutoringPage
            onRegisterClick={(subject) => handleOpenModal(`Academic Tutoring: ${subject || 'General'}`)}
          />
        )}

        {currentPage === 'career' && (
          <CareerDevelopmentPage
            onCareerAction={(service) => handleOpenModal(`Career Support: ${service || 'General'}`)}
          />
        )}

        {currentPage === 'operator-training' && (
          <OperatorTrainingPage
            onOperatorAction={(machine) => handleOpenModal(`Operator Training: ${machine || 'General'}`)}
          />
        )}

        {currentPage === 'security-training' && (
          <SecurityTrainingPage
            onSecurityAction={() => handleOpenModal('Security Training Services')}
          />
        )}

        {currentPage === 'legal-services' && (
          <LegalServicesPage
            onLegalAction={(service) => handleOpenModal(`Legal Services: ${service || 'Consultation'}`)}
          />
        )}

        {currentPage === 'apply' && <ApplyRegisterPage />}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'privacy-terms' && <PrivacyTermsPage />}
      </main>

      {/* Luxury Footer with Giant Watermark */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Quick Enquiry Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={modalService}
      />

      {/* Case Study Detail Modal */}
      <CaseStudyDetailModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onConsultationClick={(studyTitle) => handleOpenModal(`Programme: ${studyTitle}`)}
      />
    </div>
  );
}
