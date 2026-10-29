import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, CheckCircle2, MessageSquare, Clock, ShieldAlert } from 'lucide-react';
import { validateConsultationForm, ConsultationFormData, ValidationErrors } from '../utils/advisory';

interface ConsultationSectionProps {
  onPricingPlansClick?: () => void;
  onContactUsClick?: () => void;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  onPricingPlansClick,
  onContactUsClick,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    service: 'Academic Tutoring',
    specificNeed: '',
    preferredMethod: 'WhatsApp',
    preferredTime: 'Morning (08:00 - 12:00)',
    message: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section
      id="consultation"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#050100] overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=85"
          alt="Nyawo Royal Group office and learning environment"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050100] via-[#050100]/90 to-[#050100]/85" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#743F05]/30 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F7C206]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-8 text-[#FFFEFE]">
          {/* Subhead Tag */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-[#F7C206]">
            <span className="w-2.5 h-2.5 bg-[#F7C206] inline-block shrink-0 shadow-[0_0_8px_#F7C206]" />
            <span>FINAL CALL TO ACTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] text-[#FFFEFE]">
            Ready to Take
            <br />
            the Next Step?
          </h2>

          <p className="text-sm md:text-base text-[#FCFCFC]/85 leading-relaxed font-normal max-w-xl">
            Tell us what you want to achieve. Our team will help you identify the service best
            suited to your needs and explain the next steps.
          </p>

          <p className="text-xs md:text-sm text-[#F7C206] font-semibold">
            Nyawo Royal Group (Pty) Ltd. Empowering Minds, Building Skills, Creating Opportunities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://wa.me/27694986318"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#F7C206] text-[#050100] text-sm font-bold transition-all duration-300 hover:bg-[#FCCF29] hover:shadow-[0_0_20px_rgba(247,194,6,0.35)] active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#050100]" />
              <span>WhatsApp Our Team</span>
            </a>

            <button
              onClick={onContactUsClick}
              className="inline-flex items-center px-7 py-3 rounded-full border border-[#FFFEFE]/40 bg-[#050100]/40 text-[#FFFEFE] text-sm font-semibold transition-all duration-300 hover:border-[#F7C206] hover:text-[#FCCF29] active:scale-95 cursor-pointer"
            >
              Company Details
            </button>
          </div>

          {/* Contact Details */}
          <div className="pt-8 space-y-4 border-t border-[#4F2704]/70 max-w-xl">
            <div className="text-xs text-[#E0DFDE]/80 uppercase tracking-wider font-semibold">
              Company Information
            </div>

            <div className="flex items-center gap-4 pb-2">
              <img
                src="/images/logo.png"
                alt="Nyawo Royal Group Logo"
                className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(247,194,6,0.3)]"
              />
              <div className="text-sm text-[#FCFCFC]/90 space-y-1">
                <p className="font-bold text-[#FFFEFE]">Nyawo Royal Group (Pty) Ltd</p>
                <p className="text-xs text-[#E0DFDE]/70">
                  Company Director: Mr. Sakhile Nyawo
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#FCFCFC]/80 font-normal">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F7C206]" />
                <a
                  href="mailto:sakhilesecurity4@gmail.com"
                  className="hover:text-[#F7C206] transition-colors"
                >
                  sakhilesecurity4@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F7C206]" />
                <a
                  href="tel:0325410222"
                  className="hover:text-[#F7C206] transition-colors"
                >
                  032 541 0222
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-[#FCFCFC]/70">
              <MapPin className="w-4 h-4 text-[#F7C206] shrink-0" />
              <span>Othobothini, South Africa</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#FCFCFC]/65">
              <Clock className="w-4 h-4 text-[#F7C206] shrink-0" />
              <span>Office Hours: Mon – Fri: 08:00 – 17:00 | Sat: 08:30 – 13:00</span>
            </div>
          </div>
        </div>

        {/* Right Column: Enquiry Form Card */}
        <div className="lg:col-span-6 bg-[#FFFEFE] rounded-xs p-8 md:p-12 shadow-2xl border-t-4 border-[#F7C206]">
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#743F05] block mb-1">
              Direct Enquiry
            </span>
            <h3 className="text-2xl font-bold text-[#050100] tracking-tight">
              Tell Us What You Need
            </h3>
            <p className="text-xs text-[#050100]/70 mt-1">
              Select your required service and our coordinators will guide your next steps.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-[#F7C206]/20 text-[#743F05] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-[#050100]">
                Enquiry Successfully Received
              </h4>
              <p className="text-sm text-[#050100]/80 max-w-sm mx-auto leading-relaxed">
                Thank you for contacting Nyawo Royal Group, {formData.fullName}. Your enquiry has
                been received through our website. Our team will review your request and respond
                using your preferred contact method ({formData.preferredMethod}).
              </p>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xs text-xs text-[#743F05] max-w-sm mx-auto">
                Submitting an enquiry does not automatically confirm enrolment or secure a place in a programme. Our team will contact you with full schedule and fee details.
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    service: 'Academic Tutoring',
                    specificNeed: '',
                    preferredMethod: 'WhatsApp',
                    preferredTime: 'Morning (08:00 - 12:00)',
                    message: '',
                    acceptedTerms: false,
                  });
                }}
                className="mt-4 px-6 py-2.5 text-xs font-bold rounded-full bg-[#050100] text-[#FFFEFE] hover:bg-[#743F05] transition-colors"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Full Name & Contact Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sibusiso Zulu"
                    className={`w-full px-0 py-2 border-b text-sm text-[#050100] placeholder-gray-400 bg-transparent focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500'
                        : 'border-gray-300 focus:border-[#050100]'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1">
                    Contact / WhatsApp Number*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. 072 123 4567"
                    className={`w-full px-0 py-2 border-b text-sm text-[#050100] placeholder-gray-400 bg-transparent focus:outline-none transition-colors ${
                      errors.phoneNumber
                        ? 'border-red-500'
                        : 'border-gray-300 focus:border-[#050100]'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Preferred Contact Method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sibusiso@example.co.za"
                    className={`w-full px-0 py-2 border-b text-sm text-[#050100] placeholder-gray-400 bg-transparent focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-gray-300 focus:border-[#050100]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredMethod"
                    value={formData.preferredMethod}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-b border-gray-300 text-sm text-[#050100] bg-transparent focus:outline-none focus:border-[#050100] transition-colors cursor-pointer"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Email">Email</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Service Required & Specific Subject/Course */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1">
                    Service Required*
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-b border-gray-300 text-sm text-[#050100] bg-transparent focus:outline-none focus:border-[#050100] transition-colors cursor-pointer"
                  >
                    <option value="Academic Tutoring">Academic Tutoring (Grades 10–12)</option>
                    <option value="Matric Rewrite">Matric Rewrite Programme</option>
                    <option value="Career Development">Career Development (CVs & Prep)</option>
                    <option value="Operator Training">Operator Training (Heavy Machinery)</option>
                    <option value="Security Training">Security Training Services</option>
                    <option value="Legal Services">Legal Services & Advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#050100] mb-1">
                    Specific Subject, Course, or Matter
                  </label>
                  <input
                    type="text"
                    name="specificNeed"
                    value={formData.specificNeed}
                    onChange={handleChange}
                    placeholder="e.g. Mathematics, ADT, CV, or Contract"
                    className="w-full px-0 py-2 border-b border-gray-300 text-sm text-[#050100] placeholder-gray-400 bg-transparent focus:outline-none focus:border-[#050100] transition-colors"
                  />
                </div>
              </div>

              {/* Row 4: Preferred Contact Time */}
              <div>
                <label className="block text-xs font-bold text-[#050100] mb-1">
                  Preferred Contact Time
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-b border-gray-300 text-sm text-[#050100] bg-transparent focus:outline-none focus:border-[#050100] transition-colors cursor-pointer"
                >
                  <option value="Morning (08:00 - 12:00)">Morning (08:00 – 12:00)</option>
                  <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 – 16:00)</option>
                  <option value="Evening (16:00 - 19:00)">Evening (16:00 – 19:00)</option>
                  <option value="Anytime during business hours">Anytime during business hours</option>
                </select>
              </div>

              {/* Row 5: Your Message */}
              <div>
                <label className="block text-xs font-bold text-[#050100] mb-1">
                  Your Enquiry / Message*
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe what you want to achieve or any specific questions you have..."
                  className={`w-full px-0 py-2 border-b text-sm text-[#050100] placeholder-gray-400 bg-transparent focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-[#050100]'
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Security Advisory Warning */}
              <div className="flex items-start gap-2 p-3 bg-gray-50 border border-gray-200 rounded-xs text-[11px] text-[#050100]/70">
                <ShieldAlert className="w-4 h-4 text-[#743F05] shrink-0 mt-0.5" />
                <span>
                  Please do not include confidential legal documents, identity numbers, passwords,
                  or other sensitive personal information in this general enquiry form.
                </span>
              </div>

              {/* Checkbox: terms */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onChange={handleChange}
                    className="w-4 h-4 rounded-xs border-gray-300 text-[#050100] focus:ring-0 focus:outline-none accent-[#050100]"
                  />
                  <span className="text-xs text-[#050100]/80">
                    I agree to allow Nyawo Royal Group to contact me regarding my enquiry in accordance with POPIA.
                  </span>
                </label>
                {errors.acceptedTerms && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {errors.acceptedTerms}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#050100] hover:bg-[#743F05] text-[#FFFEFE] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 active:scale-95 shadow-md cursor-pointer group mt-2"
              >
                <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit My Enquiry'}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#F7C206]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
