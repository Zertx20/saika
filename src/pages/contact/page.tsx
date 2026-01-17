import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert(t('contactPage.errorMessage'));
      return;
    }

    if (formData.message.length > 500) {
      alert(t('contactPage.errorMessage'));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }).toString();

      const response = await fetch('https://readdy.ai/api/form/d5lehgideasqilubg5c0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Split Layout */}
      <section className="pt-20 min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Black Background */}
        <div className="lg:w-1/2 bg-black text-white p-12 lg:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{t('contactPage.title')}</h1>
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            {t('contactPage.subtitle')}
          </p>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full mr-4 flex-shrink-0">
                <i className="ri-map-pin-line text-xl"></i>
              </div>
              <div>
                <h3 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-2">
                  {t('contactPage.locationTitle')}
                </h3>
                <p className="text-white text-base">{t('contactPage.locationAddress')}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full mr-4 flex-shrink-0">
                <i className="ri-phone-line text-xl"></i>
              </div>
              <div>
                <h3 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-2">
                  {t('contactPage.phoneTitle')}
                </h3>
                <a
                  href="tel:+213770454819"
                  className="text-white text-base hover:text-red-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  +213 770 45 48 19
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full mr-4 flex-shrink-0">
                <i className="ri-mail-line text-xl"></i>
              </div>
              <div>
                <h3 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-2">
                  {t('contactPage.emailTitle')}
                </h3>
                <a
                  href="mailto:saadikassoulene@gmail.com"
                  className="text-white text-base hover:text-red-600 transition-colors duration-200 cursor-pointer break-all"
                >
                  saadikassoulene@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-red-600 my-12"></div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-4">
              {t('about.contactSocial')}
            </h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/iksaadiksaad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/groupesaika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - White Background with Form */}
        <div className="lg:w-1/2 bg-white p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-black mb-8">{t('contactPage.formTitle')}</h2>

          <form id="contact-form" onSubmit={handleSubmit} data-readdy-form className="space-y-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-red-600 text-xs font-bold uppercase tracking-wide mb-2">
                {t('contactPage.nameLabel')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-black text-black text-base py-3 focus:outline-none focus:border-red-600 focus:border-b-2 transition-all duration-200"
                placeholder={t('contactPage.namePlaceholder')}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-red-600 text-xs font-bold uppercase tracking-wide mb-2">
                {t('contactPage.emailLabel')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-black text-black text-base py-3 focus:outline-none focus:border-red-600 focus:border-b-2 transition-all duration-200"
                placeholder={t('contactPage.emailPlaceholder')}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-red-600 text-xs font-bold uppercase tracking-wide mb-2">
                {t('contactPage.phoneLabel')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-black text-black text-base py-3 focus:outline-none focus:border-red-600 focus:border-b-2 transition-all duration-200"
                placeholder={t('contactPage.phonePlaceholder')}
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-red-600 text-xs font-bold uppercase tracking-wide mb-2">
                {t('contactPage.messageLabel')} * (Max 500)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={500}
                rows={6}
                className="w-full bg-transparent border-b border-black text-black text-base py-3 focus:outline-none focus:border-red-600 focus:border-b-2 transition-all duration-200 resize-none"
                placeholder={t('contactPage.messagePlaceholder')}
              ></textarea>
              <div className="text-xs text-gray-500 mt-2 text-right">
                {formData.message.length}/500
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 text-white font-bold py-4 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? t('contactPage.submitButton') + '...' : t('contactPage.submitButton')}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                {t('contactPage.successMessage')}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                {t('contactPage.errorMessage')}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96 lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.4087!2d5.2!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f40362f64a2c3d%3A0x4ba2e6d0e2e5c5e5!2sS%C3%A9tif%2C%20Algeria!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Groupe Saika Location"
        ></iframe>

        {/* Overlay Panel */}
        <div className="absolute bottom-8 left-8 bg-black text-white p-6 rounded-lg shadow-2xl max-w-sm">
          <h3 className="text-xl font-bold mb-2">{t('contactPage.locationTitle')}</h3>
          <p className="text-gray-300 text-sm mb-4">{t('contactPage.locationAddress')}</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Setif+Algeria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-200 text-sm whitespace-nowrap cursor-pointer"
          >
            {t('contactPage.locationTitle')}
            <i className="ri-external-link-line ml-2"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
