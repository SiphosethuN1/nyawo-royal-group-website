import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Truck,
  Shield,
  Scale,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ShieldAlert,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { validateConsultationForm, ConsultationFormData, ValidationErrors } from '../../utils/advisory';

export const ApplyRegisterPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Academic Tutoring and Matric Rewrite');
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    service: 'Academic Tutoring and Matric Rewrite',
    specificNeed: '',
    preferredMethod: 'WhatsApp',
    preferredTime: 'Morning (08:00 - 12:00)',
    message: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      id: 'Academic Tutoring and Matric Rewrite',
      title: 'Academic Tutoring & Matric Rewrite',
      desc: 'For learners seeking subject support, extra classes, examination preparation, or matric rewrite assistance.',
      icon: GraduationCap,
      btnLabel: 'Enquire About Academic Support',
    },
    {
      id: 'Career Development',
      title: 'Career Development',
      desc: 'For graduates and job seekers who need CV writing, application assistance, career guidance, or interview preparation.',
      icon: Briefcase,
      btnLabel: 'Request Career Support',
    },
    {
      id: 'Operator Training',
      title: 'Operator Training',
      desc: 'For individuals interested in ADT, excavator, bulldozer, TLB, or other available yellow plant machinery training.',
      icon: Truck,
      btnLabel: 'Enquire About Operator Training',
    },
    {
      id: 'Security Training',
      title: 'Security Training',
      desc: 'For individuals interested in available security training programmes and relevant entry requirements.',
      icon: Shield,
      btnLabel: 'Enquire About Security Training',
    },
    {
      id: 'Legal Services',
      title: 'Legal Services',
      desc: 'For individuals, families, and businesses seeking legal consultations or assistance with a legal matter.',
      icon: Scale,
      btnLabel: 'Request Legal Assistance',
    },
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setFormData((prev) => ({ ...prev, service: serviceId }));
    const formEl = document.getElementById('enquiry-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateConsultationForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-28 pb-20 bg-[#FFFEFE] text-[#050100]">
      {/* Header Banner */}
      <section className="bg-[#050100] text-[#FFFEFE] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
            alt="Students and professionals applying for programmes"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050100] via-[#050100]/90 to-transparent" />
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F7C206]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#050100]/80 border border-[#F7C206]/40 text-[#F7C206] text-xs font-bold uppercase tracking-wider mb-6">
            PAGE 8: APPLY OR REGISTER
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFEFE] leading-[1.1] max-w-4xl mb-6">
            Take Your Next Step
            <br />
            <span className="text-[#F7C206]">With Nyawo Royal Group.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#FCCF29] font-semibold mb-4">
            Tell Us What You Need. We Will Guide You Through the Process.
          </p>

          <p className="text-sm sm:text-base text-[#FCFCFC]/85 max-w-2xl leading-relaxed font-normal">
            Whether you want to improve your academic performance, prepare for employment, pursue
            practical training, or enquire about legal services, our team is ready to assist with
            your enquiry. Choose the service relevant to your needs and submit your details.
          </p>
        </div>
      </section>

      {/* Select Your Service (5 Cards) */}
      <section className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-2">
            Step 1
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050100] tracking-tight">
            Select Your Service
          </h2>
          <p className="text-sm text-[#050100]/75 mt-2">
            Click on any service card below to automatically configure the application form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            const isSelected = selectedService === svc.id;
            return (
              <div
                key={svc.id}
                onClick={() => handleServiceSelect(svc.id)}
                className={`p-8 rounded-xs border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#F7C206] bg-[#FCFCFC] shadow-xl ring-2 ring-[#F7C206]/20'
                    : 'border-gray-200 bg-[#FCFCFC] hover:border-gray-400'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xs flex items-center justify-center mb-6 transition-colors ${
                    isSelected ? 'bg-[#F7C206] text-[#050100]' : 'bg-gray-100 text-[#050100]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#050100] mb-2">{svc.title}</h3>
                  <p className="text-xs md:text-sm text-[#050100]/75 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                <button
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors ${
                    isSelected
                      ? 'bg-[#050100] text-[#FFFEFE]'
                      : 'border border-[#050100] text-[#050100] hover:bg-[#050100] hover:text-[#FFFEFE]'
                  }`}
                >
                  <span>{svc.btnLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form-section" className="max-w-[1400px] mx-auto py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-3xl mx-auto bg-[#FCFCFC] border border-gray-200 rounded-xs p-8 md:p-14 shadow-xl border-t-4 border-[#F7C206]">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#743F05] block mb-1">
              Step 2
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#050100]">
              Official Enquiry & Registration Form
            </h3>
            <p className="text-xs text-[#050100]/70 mt-1">
              Currently selected:{' '}
              <span className="font-bold text-[#743F05]">{selectedService}</span>
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#F7C206]/20 text-[#743F05] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#050100]">
                Enquiry Successfully Received
              </h4>
              <p className="text-sm text-[#050100]/85 max-w-md mx-auto leading-relaxed">
                Thank you for contacting Nyawo Royal Group. Your enquiry has been received through
                our website. Our team will review your request and respond using the contact details
                you provided.
              </p>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xs text-xs text-[#743F05] max-w-md mx-auto text-left">
                <strong>Before You Register:</strong> Our team will provide relevant information
                about programme availability, applicable fees, entry requirements, and registration
                arrangements. Submitting an enquiry does not automatically confirm enrolment or secure
                a place in a programme.
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    service: selectedService,
                    specificNeed: '',
                    preferredMethod: 'WhatsApp',
                    preferredTime: 'Morning (08:00 - 12:00)',
                    message: '',
                    acceptedTerms: false,
                  });
                }}
                className="mt-6 px-8 py-3 rounded-full bg-[#050100] text-[#FFFEFE] font-bold text-xs uppercase tracking-wider hover:bg-[#743F05] transition-colors"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Contact Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1.5">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-3.5 py-2.5 border rounded-xs text-sm text-[#050100] focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-gray-300 focus:border-[#050100] bg-white'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 mt-1 block font-medium">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1.5">
                    Contact Number*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. 072 123 4567"
                    className={`w-full px-3.5 py-2.5 border rounded-xs text-sm text-[#050100] focus:outline-none transition-colors ${
                      errors.phoneNumber
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-gray-300 focus:border-[#050100] bg-white'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <span className="text-[11px] text-red-500 mt-1 block font-medium">
                      {errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Email Address & Preferred Contact Method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1.5">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@example.co.za"
                    className={`w-full px-3.5 py-2.5 border rounded-xs text-sm text-[#050100] focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 bg-red-50/20'
                        : 'border-gray-300 focus:border-[#050100] bg-white'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 block font-medium">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1.5">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredMethod"
                    value={formData.preferredMethod}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xs text-sm text-[#050100] bg-white focus:outline-none focus:border-[#050100] cursor-pointer"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Email">Email</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Service Required & Specific Subject/Course/Legal Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1.5">
                    Service Required*
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => {
                      handleChange(e);
                      setSelectedService(e.target.value);
                    }}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xs text-sm text-[#050100] bg-white focus:outline-none focus:border-[#050100] cursor-pointer"
                  >
                    <option value="Academic Tutoring and Matric Rewrite">
                      Academic Tutoring & Matric Rewrite
                    </option>
                    <option value="Career Development">Career Development (CVs & Prep)</option>
                    <option value="Operator Training">Operator Training (Yellow Plant)</option>
                    <option value="Security Training">Security Training Services</option>
                    <option value="Legal Services">Legal Services & Advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1.5">
                    Specific Subject, Course, or Legal Service
                  </label>
                  <input
                    type="text"
                    name="specificNeed"
                    value={formData.specificNeed}
                    onChange={handleChange}
                    placeholder="e.g. Mathematics, ADT, CV, or Contract Drafting"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xs text-sm text-[#050100] bg-white focus:outline-none focus:border-[#050100]"
                  />
                </div>
              </div>

              {/* Row 4: Preferred Contact Time */}
              <div>
                <label className="block text-xs font-bold text-[#050100] mb-1.5">
                  Preferred Contact Time, if applicable
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xs text-sm text-[#050100] bg-white focus:outline-none focus:border-[#050100] cursor-pointer"
                >
                  <option value="Morning (08:00 - 12:00)">Morning (08:00 – 12:00)</option>
                  <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 – 16:00)</option>
                  <option value="Evening (16:00 - 19:00)">Evening (16:00 – 19:00)</option>
                  <option value="Anytime during office hours">Anytime during office hours</option>
                </select>
              </div>

              {/* Row 5: Your Message */}
              <div>
                <label className="block text-xs font-bold text-[#050100] mb-1.5">
                  Your Message*
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you want to achieve or explain your specific questions..."
                  className={`w-full px-3.5 py-2.5 border rounded-xs text-sm text-[#050100] focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-gray-300 focus:border-[#050100] bg-white'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-500 mt-1 block font-medium">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Sensitive Info Warning */}
              <div className="flex items-start gap-2.5 p-3.5 bg-gray-100 rounded-xs border border-gray-200 text-xs text-[#050100]/75">
                <ShieldAlert className="w-4 h-4 text-[#743F05] shrink-0 mt-0.5" />
                <span>
                  Please do not include confidential legal documents, identity numbers, passwords,
                  or other sensitive information in a general enquiry form.
                </span>
              </div>

              {/* Terms Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onChange={handleChange}
                    className="w-4 h-4 rounded-xs border-gray-300 text-[#050100] focus:ring-0 mt-0.5 accent-[#050100]"
                  />
                  <span className="text-xs text-[#050100]/80">
                    I understand that submitting an enquiry does not automatically confirm enrolment
                    or establish an attorney-client relationship, and I consent to Nyawo Royal Group
                    contacting me regarding my enquiry.
                  </span>
                </label>
                {errors.acceptedTerms && (
                  <span className="text-[11px] text-red-500 mt-1 block font-medium">
                    {errors.acceptedTerms}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full bg-[#050100] text-[#FFFEFE] font-bold text-sm uppercase tracking-wider hover:bg-[#743F05] transition-all cursor-pointer shadow-lg active:scale-98 flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit My Enquiry'}</span>
                <ArrowUpRight className="w-4 h-4 text-[#F7C206]" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Before You Register Advisory */}
      <section className="max-w-[1400px] mx-auto py-16 px-6 md:px-12">
        <div className="p-8 md:p-12 rounded-xs bg-[#050100] text-[#FFFEFE] border-t-4 border-[#F7C206] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h4 className="text-2xl font-bold text-[#FFFEFE]">
              Before You Register
            </h4>
            <p className="text-xs md:text-sm text-[#FCFCFC]/80 leading-relaxed font-normal">
              Our team will provide relevant information about programme availability, applicable fees,
              entry requirements, and registration arrangements. Submitting an enquiry does not
              automatically confirm enrolment or secure a place in a programme.
            </p>
            <p className="text-xs text-[#F7C206] font-semibold">
              Need immediate help? Contact us directly through our published telephone or WhatsApp details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/27796339234"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F7C206] text-[#050100] font-bold text-xs hover:bg-[#FCCF29] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Our Team</span>
            </a>
            <a
              href="tel:+27796339234"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-xs hover:border-[#F7C206] hover:text-[#F7C206] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
