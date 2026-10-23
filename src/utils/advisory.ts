export interface ConsultationFormData {
  fullName: string;
  email: string;
  companyName?: string;
  phoneNumber: string;
  service: string;
  specificNeed?: string;
  preferredMethod?: string;
  preferredTime?: string;
  message: string;
  acceptedTerms: boolean;
}

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  service?: string;
  message?: string;
  acceptedTerms?: string;
}

export function validateConsultationForm(data: ConsultationFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name is required (minimum 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'A valid email address is required';
  }

  const phoneRegex = /^[\d\s+\-()]{7,}$/;
  if (!data.phoneNumber || !phoneRegex.test(data.phoneNumber.trim())) {
    errors.phoneNumber = 'A valid phone number is required (min 7 digits)';
  }

  if (!data.service || data.service.trim() === '') {
    errors.service = 'Please select a service of interest';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide details about your enquiry (min 10 characters)';
  }

  if (!data.acceptedTerms) {
    errors.acceptedTerms = 'You must accept the terms and conditions';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export function searchFaqs(items: FAQItem[], query: string): FAQItem[] {
  if (!query || query.trim() === '') return items;
  const q = query.toLowerCase().trim();
  return items.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q)
  );
}

export function formatStatValue(value: number, suffix: string = '%'): string {
  return `${value}${suffix}`;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  impactMetric: string;
  metricLabel: string;
  image: string;
  tags: string[];
}

export function filterCaseStudies(
  studies: CaseStudy[],
  category: string
): CaseStudy[] {
  if (!category || category === 'All') return studies;
  return studies.filter((s) => s.category.toLowerCase() === category.toLowerCase());
}

export function computeHorizontalScrollProgress(
  scrollOffset: number,
  containerHeight: number,
  viewportHeight: number
): number {
  const maxScroll = containerHeight - viewportHeight;
  if (maxScroll <= 0) return 0;
  const progress = scrollOffset / maxScroll;
  return Math.min(Math.max(progress, 0), 1);
}


