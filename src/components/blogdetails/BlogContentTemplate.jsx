import { colors, typography } from '../../lib/designTokens';
import ReactMarkdown from 'react-markdown';
import PrimaryButton from '../basic/PrimaryButton';
import { Link } from 'react-router-dom';
import grainImg from '../../assets/images/common/grain.png';

function BlogContentTemplate({ post, relatedPosts = [] }) {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: colors.background.isabelline }}>
      {/* Global Background grain texture */}
      <img
        src={grainImg}
        alt=""
        className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, opacity: 0.03 }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Category and Date */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span
              className="text-sm font-medium"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.primary,
              }}
            >
              {post.category}
            </span>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }}></div>
            <span
              className="text-sm font-medium"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.primary,
              }}
            >
              {post.date}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl px-4"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.primary,
              lineHeight: '1.1',
              letterSpacing: typography.letterSpacing.tight,
            }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pb-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto object-cover rounded-xl"
            style={{ maxHeight: '700px' }}
            loading="lazy"
          />
        </div>
      </section>

      {/* Article Content Section */}
      <section className="relative py-0 px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-5xl mx-auto relative z-10">
          <div
            className="prose prose-lg max-w-none"
            style={{
              fontFamily: typography.fontFamily.body,
              color: colors.text.primary,
            }}
          >
            <ReactMarkdown
              components={{
                h2: ({node, ...props}) => (
                  <h2
                    style={{
                      fontFamily: typography.fontFamily.heading,
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      marginTop: '3rem',
                      marginBottom: '1.5rem',
                      color: colors.text.primary,
                    }}
                    {...props}
                  />
                ),
                h3: ({node, ...props}) => (
                  <h3
                    style={{
                      fontFamily: typography.fontFamily.heading,
                      fontSize: '1.75rem',
                      fontWeight: 'bold',
                      marginTop: '2.5rem',
                      marginBottom: '1rem',
                      color: colors.text.primary,
                    }}
                    {...props}
                  />
                ),
                p: ({node, ...props}) => (
                  <p
                    style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: '1.125rem',
                      lineHeight: '1.9',
                      marginBottom: '2rem',
                      color: colors.text.secondary,
                    }}
                    {...props}
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl"
              style={{
                fontFamily: typography.fontFamily.heading,
                color: colors.text.primary,
              }}
            >
              Related Article
            </h2>
            <Link to="/blog">
              <PrimaryButton>View All Article</PrimaryButton>
            </Link>
          </div>

          {/* Related Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((article, index) => (
              <Link
                key={index}
                to={`/blog/${article.slug}`}
                className="group block transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="mb-5 overflow-hidden rounded-2xl" style={{ backgroundColor: '#e8e1d6' }}>
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div>
                  <div
                    className="text-sm mb-4"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.secondary,
                    }}
                  >
                    {article.date}
                  </div>

                  <h3
                    className="text-2xl md:text-3xl mb-4"
                    style={{
                      fontFamily: typography.fontFamily.heading,
                      color: colors.text.primary,
                      lineHeight: '1.2',
                    }}
                  >
                    {article.title}
                  </h3>

                  <p
                    className="text-base"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.secondary,
                      lineHeight: '1.7',
                    }}
                  >
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogContentTemplate;
