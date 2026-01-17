import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { blogPosts } from '../../mocks/blogPosts';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { t, i18n } = useTranslation();

  const categories = ['All', 'Technology', 'Solutions', 'Security', 'Company News'];

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  const getCategoryTranslation = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'All': t('blog.allCategories'),
      'Technology': t('blog.technology'),
      'Solutions': t('blog.solutions'),
      'Security': t('blog.security'),
      'Company News': t('blog.news')
    };
    return categoryMap[category] || category;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Blog Header */}
      <section className="pt-32 pb-12 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">{t('blog.title')}</h1>

          {/* Category Filter */}
          <div className="flex items-center space-x-3 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-black border border-gray-300 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {getCategoryTranslation(category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to={`/blog/${featuredPost.id}`}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div className="lg:col-span-3 h-96 lg:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit whitespace-nowrap">
                {getCategoryTranslation(featuredPost.category)}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors duration-200">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span className="font-semibold text-black">{featuredPost.author}</span>
                <span className="mx-2">•</span>
                <span>{new Date(featuredPost.date).toLocaleDateString(i18n.language === 'ar' ? 'ar-DZ' : i18n.language === 'en' ? 'en-US' : 'fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <span className="inline-flex items-center bg-red-600 text-white font-semibold px-8 py-3 rounded-full w-fit group-hover:bg-red-700 transition-colors duration-200 whitespace-nowrap">
                {t('blog.readMore')}
                <i className="ri-arrow-right-line ml-2"></i>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {getCategoryTranslation(post.category)}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <span className="font-semibold text-black">{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(post.date).toLocaleDateString(i18n.language === 'ar' ? 'ar-DZ' : i18n.language === 'en' ? 'en-US' : 'fr-FR', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
