import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-white shadow-md">
              <img
                src="https://static.readdy.ai/image/23c802d7f9313d983d4e57c3b073a22a/80abc7146c5f1fd98ae43aa238f426d9.jpeg"
                alt="Groupe Saika Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Groupe Saika
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                isActive('/')
                  ? 'text-red-600'
                  : isScrolled
                  ? 'text-black hover:text-red-600'
                  : 'text-white hover:text-red-600'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className={`text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                isActive('/about')
                  ? 'text-red-600'
                  : isScrolled
                  ? 'text-black hover:text-red-600'
                  : 'text-white hover:text-red-600'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                isActive('/blog')
                  ? 'text-red-600'
                  : isScrolled
                  ? 'text-black hover:text-red-600'
                  : 'text-white hover:text-red-600'
              }`}
            >
              {t('nav.blog')}
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                isActive('/contact')
                  ? 'text-red-600'
                  : isScrolled
                  ? 'text-black hover:text-red-600'
                  : 'text-white hover:text-red-600'
              }`}
            >
              {t('nav.contact')}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => changeLanguage('fr')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  i18n.language === 'fr'
                    ? 'bg-red-600 text-white'
                    : isScrolled
                    ? 'bg-gray-100 text-black hover:bg-red-600 hover:text-white'
                    : 'bg-white/20 text-white hover:bg-red-600'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  i18n.language === 'en'
                    ? 'bg-red-600 text-white'
                    : isScrolled
                    ? 'bg-gray-100 text-black hover:bg-red-600 hover:text-white'
                    : 'bg-white/20 text-white hover:bg-red-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('ar')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  i18n.language === 'ar'
                    ? 'bg-red-600 text-white'
                    : isScrolled
                    ? 'bg-gray-100 text-black hover:bg-red-600 hover:text-white'
                    : 'bg-white/20 text-white hover:bg-red-600'
                }`}
              >
                AR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-semibold cursor-pointer whitespace-nowrap ${
                  isActive('/') ? 'text-red-600' : 'text-black hover:text-red-600'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-semibold cursor-pointer whitespace-nowrap ${
                  isActive('/about') ? 'text-red-600' : 'text-black hover:text-red-600'
                }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-semibold cursor-pointer whitespace-nowrap ${
                  isActive('/blog') ? 'text-red-600' : 'text-black hover:text-red-600'
                }`}
              >
                {t('nav.blog')}
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-semibold cursor-pointer whitespace-nowrap ${
                  isActive('/contact') ? 'text-red-600' : 'text-black hover:text-red-600'
                }`}
              >
                {t('nav.contact')}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    i18n.language === 'fr'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-black hover:bg-red-600 hover:text-white'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    i18n.language === 'en'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-black hover:bg-red-600 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage('ar')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    i18n.language === 'ar'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-black hover:bg-red-600 hover:text-white'
                  }`}
                >
                  AR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
