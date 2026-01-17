import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { blogPosts } from '../../mocks/blogPosts';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-red-600 hover:text-red-700 cursor-pointer whitespace-nowrap">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Article Header */}
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-red-600 cursor-pointer">
              Home
            </Link>
            <i className="ri-arrow-right-s-line mx-2"></i>
            <Link to="/blog" className="hover:text-red-600 cursor-pointer">
              Blog
            </Link>
            <i className="ri-arrow-right-s-line mx-2"></i>
            <span className="text-red-600">{post.title}</span>
          </div>

          {/* Category Badge */}
          <div className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 whitespace-nowrap">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <span className="font-semibold text-black">{post.author}</span>
            <span className="mx-3">•</span>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="mx-3">•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-base leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-black">Share this article:</span>
              <div className="flex items-center space-x-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label="Share on LinkedIn"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label="Share on Facebook"
                >
                  <i className="ri-facebook-line"></i>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-200 cursor-pointer"
                  aria-label="Share on Twitter"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-black mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 whitespace-nowrap">
                        {relatedPost.category}
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
