import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[40vh] bg-white flex items-center justify-center overflow-hidden">
        <div className="absolute top-8 left-6 lg:left-12 text-sm text-gray-500">
          <span>{t('nav.home')}</span>
          <i className="ri-arrow-right-s-line mx-2 text-red-600"></i>
          <span className="text-red-600 font-semibold">{t('nav.about')}</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-black">{t('about.title')}</h1>
        <div className="absolute bottom-0 right-0 w-64 h-64">
          <div className="absolute bottom-0 right-0 w-48 h-0.5 bg-red-600 transform rotate-45"></div>
          <div className="absolute bottom-12 right-12 w-32 h-0.5 bg-red-600 transform rotate-45"></div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
            {/* Large Quote Mark Watermark */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-red-600 opacity-5 text-9xl font-serif pointer-events-none">
              "
            </div>

            {/* Mission */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-red-600 mb-6">{t('about.missionTitle')}</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {t('about.missionDescription')}
              </p>
            </div>

            {/* Vision */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-red-600 mb-6">{t('about.visionTitle')}</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {t('about.visionDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Connection Section */}
      <section className="py-20 px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://readdy.ai/api/search-image?query=TIS%20Algeria%20company%20logo%20design%2C%20modern%20technology%20brand%20identity%2C%20clean%20white%20background%20with%20red%20accents%2C%20professional%20corporate%20logo%2C%20minimalist%20design%2C%20high-quality%20vector%20style&width=240&height=120&seq=tislogo&orientation=landscape"
              alt="TIS Algeria"
              className="h-24 mx-auto"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('about.tisTitle')}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-12">
            {t('about.tisDescription')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-white mb-2">4.6K</div>
              <div className="text-red-600 text-sm font-semibold uppercase tracking-wide">
                {t('about.tisFollowers')}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">Sétif</div>
              <div className="text-red-600 text-sm font-semibold uppercase tracking-wide">
                {t('contact.location')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            {t('about.commitmentsTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="bg-white border-l-4 border-red-600 p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-10 h-10 flex items-center justify-center mb-6">
                <i className="ri-medal-line text-4xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t('about.qualityTitle')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('about.qualityDescription')}
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white border-l-4 border-red-600 p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-10 h-10 flex items-center justify-center mb-6">
                <i className="ri-lightbulb-flash-line text-4xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t('about.innovationTitle')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('about.innovationDescription')}
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="bg-white border-l-4 border-red-600 p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-10 h-10 flex items-center justify-center mb-6">
                <i className="ri-customer-service-2-line text-4xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t('about.satisfactionTitle')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('about.satisfactionDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Sidebar (Sticky on Desktop) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 w-72 bg-white shadow-xl rounded-lg p-6 hidden xl:block z-40">
        <div className="bg-red-600 text-white text-center py-3 -mx-6 -mt-6 mb-6 rounded-t-lg font-bold text-sm">
          {t('about.contactTitle').toUpperCase()}
        </div>
        <div className="space-y-4">
          <div className="flex items-start">
            <i className="ri-map-pin-line text-red-600 text-xl mr-3 mt-1"></i>
            <div>
              <div className="text-xs text-gray-500 mb-1">{t('about.contactLocation')}</div>
              <div className="text-sm text-black font-medium">{t('contact.location')}</div>
            </div>
          </div>
          <div className="flex items-start">
            <i className="ri-phone-line text-red-600 text-xl mr-3 mt-1"></i>
            <div>
              <div className="text-xs text-gray-500 mb-1">{t('about.contactPhone')}</div>
              <a
                href="tel:+213770454819"
                className="text-sm text-black font-medium hover:text-red-600 transition-colors duration-200 cursor-pointer"
              >
                +213 770 45 48 19
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <i className="ri-mail-line text-red-600 text-xl mr-3 mt-1"></i>
            <div>
              <div className="text-xs text-gray-500 mb-1">{t('about.contactEmail')}</div>
              <a
                href="mailto:saadikassoulene@gmail.com"
                className="text-sm text-black font-medium hover:text-red-600 transition-colors duration-200 cursor-pointer break-all"
              >
                saadikassoulene@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-3">{t('about.contactSocial')}</div>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/iksaadiksaad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-200 cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/groupesaika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
