import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 text-black py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/23c802d7f9313d983d4e57c3b073a22a/80abc7146c5f1fd98ae43aa238f426d9.jpeg"
                  alt="Groupe Saika Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-black">Groupe Saika</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <p className="text-red-600 text-xs font-semibold uppercase tracking-wide">
              {t('footer.branch')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">{t('footer.navigation')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-sm">{t('services.distribution')}</li>
              <li className="text-gray-600 text-sm">{t('services.integration')}</li>
              <li className="text-gray-600 text-sm">{t('services.consulting')}</li>
              <li className="text-gray-600 text-sm">{t('solutions.lighting')}</li>
              <li className="text-gray-600 text-sm">{t('solutions.security')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-red-600 mr-2 mt-1"></i>
                <span className="text-gray-600 text-sm">{t('contact.location')}</span>
              </li>
              <li className="flex items-start">
                <i className="ri-phone-line text-red-600 mr-2 mt-1"></i>
                <a
                  href="tel:+213770454819"
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  +213 770 45 48 19
                </a>
              </li>
              <li className="flex items-start">
                <i className="ri-mail-line text-red-600 mr-2 mt-1"></i>
                <a
                  href="mailto:saadikassoulene@gmail.com"
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-200 cursor-pointer break-all"
                >
                  saadikassoulene@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center space-x-3 mt-6">
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <p className="mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-2">
              <span>{t('footer.madeWith')}</span>
              <i className="ri-heart-fill text-red-600"></i>
              <span>{t('footer.madeIn')}</span>
              <span className="mx-2">•</span>
              <a
                href="https://readdy.ai/?ref=logo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {t('footer.poweredBy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
