'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Check, Loader as Loader2, Send, CircleAlert as AlertCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  industry: string;
  services: string[];
  projectBrief: string;
}

const serviceOptions = [
  'SEO',
  'Social Media Marketing',
  'Paid Ads',
  'Branding & Creative',
  'Website Development',
  'Performance Marketing',
];



export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    industry: '',
    services: [],
    projectBrief: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error when user starts typing
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
    setError('');
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      companyName: '',
      workEmail: '',
      phoneNumber: '',
      industry: '',
      services: [],
      projectBrief: '',
    });
    setRecaptchaToken('');
    recaptchaRef.current?.reset();

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate required fields
    if (!formData.fullName || !formData.companyName || !formData.workEmail || !formData.projectBrief) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA verification.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
      resetForm();
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-20 bg-gradient-to-br from-purple-50/30 via-white to-green-50/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-[#6BBF2A]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank you for reaching out!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team will contact you shortly.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-purple-50/30 via-white to-green-50/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Partner With DigiCompanions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tell us about your brand and goals. Our team will evaluate your requirements and connect with you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          <div className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                >
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Basic Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5A2D82] focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-900 mb-3">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5A2D82] focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="workEmail" className="block text-sm font-semibold text-gray-900 mb-3">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    required
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5A2D82] focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5A2D82] focus:border-transparent transition-all duration-200 text-gray-900"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label htmlFor="industry" className="block text-sm font-semibold text-gray-900 mb-3">
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5A2D82] focus:border-transparent transition-all duration-200 text-gray-900"
                  placeholder="e.g., E-commerce, SaaS, Healthcare"
                />
              </div>

              {/* Services Required */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  Services Required
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-5 h-5 text-[#6BBF2A] border-gray-300 rounded focus:ring-[#5A2D82] focus:ring-2"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label htmlFor="projectBrief" className="block text-sm font-semibold text-gray-900 mb-3">
                  Business Goals / Project Brief *
                </label>
                <textarea
                  id="projectBrief"
                  name="projectBrief"
                  required
                  rows={5}
                  value={formData.projectBrief}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5A2D82] focus:border-transparent transition-all duration-200 text-gray-900 resize-none"
                  placeholder="Tell us about your business goals, current challenges, and what you're looking to achieve with digital marketing..."
                />
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(token) => setRecaptchaToken(token || '')}
                    ref={recaptchaRef}
                />
                </div>


              {/* Submit Button */}
              <div className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !recaptchaToken}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full lg:w-auto inline-flex items-center justify-center px-12 py-5 bg-[#6BBF2A] hover:bg-[#5da625] disabled:bg-gray-400 text-white text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-[#6BBF2A]/25 hover:shadow-[#6BBF2A]/40 disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Inquiry
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}