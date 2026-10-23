import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateConsultationForm,
  searchFaqs,
  formatStatValue,
  filterCaseStudies,
  computeHorizontalScrollProgress,
} from './advisory';

test('validateConsultationForm flags missing required fields', () => {
  const invalidData = {
    fullName: '',
    email: 'not-an-email',
    companyName: '',
    phoneNumber: '123',
    service: '',
    message: 'short',
    acceptedTerms: false,
  };

  const result = validateConsultationForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phoneNumber);
  assert.ok(result.errors.service);
  assert.ok(result.errors.message);
  assert.ok(result.errors.acceptedTerms);
});

test('validateConsultationForm passes with valid inputs', () => {
  const validData = {
    fullName: 'Alexander Hamilton',
    email: 'alex@treasury.gov',
    companyName: 'Bank of New York',
    phoneNumber: '+1 212 555 0199',
    service: 'Strategic Planning',
    message: 'We are seeking guidance on capital restructuring and long-term liquidity models.',
    acceptedTerms: true,
  };

  const result = validateConsultationForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('searchFaqs filters questions and answers correctly', () => {
  const faqs = [
    { id: '1', question: 'What types of businesses do you work with?', answer: 'We work with growth-stage and enterprise firms.' },
    { id: '2', question: 'What finance advisory services do you offer?', answer: 'Capital planning, liquidity models, and M&A.' },
    { id: '3', question: 'Do you offer ongoing advisory support?', answer: 'Yes, retained executive CFO advisory.' },
  ];

  const result = searchFaqs(faqs, 'liquidity');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, '2');

  const all = searchFaqs(faqs, '');
  assert.equal(all.length, 3);
});

test('formatStatValue returns proper formatting', () => {
  assert.equal(formatStatValue(99), '99%');
  assert.equal(formatStatValue(116, '+'), '116+');
});

test('filterCaseStudies filters properly by category', () => {
  const sample = [
    { id: '1', category: 'Marketing & Growth', title: 'A', description: '', impactMetric: '', metricLabel: '', image: '', tags: [] },
    { id: '2', category: 'Operational Excellence', title: 'B', description: '', impactMetric: '', metricLabel: '', image: '', tags: [] },
  ];
  assert.equal(filterCaseStudies(sample, 'All').length, 2);
  assert.equal(filterCaseStudies(sample, 'Marketing & Growth').length, 1);
  assert.equal(filterCaseStudies(sample, 'Operational Excellence')[0].id, '2');
});

test('computeHorizontalScrollProgress clamps correctly between 0 and 1', () => {
  assert.equal(computeHorizontalScrollProgress(0, 3000, 1000), 0);
  assert.equal(computeHorizontalScrollProgress(1000, 3000, 1000), 0.5);
  assert.equal(computeHorizontalScrollProgress(2000, 3000, 1000), 1);
  assert.equal(computeHorizontalScrollProgress(3000, 3000, 1000), 1);
  assert.equal(computeHorizontalScrollProgress(-50, 3000, 1000), 0);
});

