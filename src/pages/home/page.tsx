import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { sliderImages } from '../../mocks/sliderImages';
import { services, solutions } from '../../mocks/services';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Slider Section */}
      <section className="relative h-[85vh] overflow-hidden">
        {sliderImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt={t(`home.heroTitle${slide.id}`)}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
            
            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  {t(`home.heroTitle${slide.id}`)}
                </h1>
                <div className="w-3/5 h-1 bg-red-600 mx-auto mb-6"></div>
                <p className="text-lg md:text-xl text-gray-200 tracking-wide mb-8">
                  {t(`home.heroSubtitle${slide.id}`)}
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-red-600 text-white font-semibold px-12 py-4 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  {t('home.ctaButton')}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100 cursor-pointer z-10"
          aria-label="Previous slide"
        >
          <i className="ri-arrow-left-line text-xl"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100 cursor-pointer z-10"
          aria-label="Next slide"
        >
          <i className="ri-arrow-right-line text-xl"></i>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'bg-red-600 border-red-600 w-8' : 'bg-transparent'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-2 relative">
              <div className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-2 mb-4 whitespace-nowrap">
                {t('home.introTitle').toUpperCase()}
              </div>
              <div className="absolute left-0 top-12 w-0.5 h-48 bg-red-600"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight pl-6">
                {t('home.introTitle')}
              </h2>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {t('home.introDescription')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {t('home.ctaButtonSecondary')}
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">{t('home.servicesTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-10 rounded-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-5xl text-red-600`}></i>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{t(`home.services${service.title}`)}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {t(`home.services${service.title}Desc`)}
                </p>
                <span className="text-red-600 font-semibold text-sm inline-flex items-center group-hover:translate-x-2 transition-transform duration-200 whitespace-nowrap">
                  {t('home.ctaButtonSecondary')}
                  <i className="ri-arrow-right-line ml-1"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions Section */}
      <section className="py-20 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('home.solutionsTitle')}
          </h2>
          <p className="text-gray-400 text-base mb-12 max-w-2xl">
            {t('home.solutionsSubtitle')}
          </p>

          <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={solution.image}
                    alt={t(`home.solutions${solution.title}`)}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-black mb-3">{t(`home.solutions${solution.title}`)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {t(`home.solutions${solution.title}Desc`)}
                  </p>
                  <div className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center bg-red-600 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 flex">
          {/* Left Side - White */}
          <div className="w-full lg:w-3/5 bg-white flex items-center justify-center p-12 relative z-10">
            <div className="max-w-md text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {t('home.ctaTitle')}
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center bg-red-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                {t('home.ctaButton')}
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>

          {/* Right Side - Red */}
          <div className="hidden lg:flex w-2/5 bg-red-600 items-center justify-center p-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-white transform -skew-x-12 -translate-x-16"></div>
            <div className="max-w-md text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('home.ctaDescription')}
              </h2>
              <Link
                to="/blog"
                className="inline-flex items-center border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                {t('blog.readMore')}
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
