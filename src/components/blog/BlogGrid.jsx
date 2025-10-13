import BlogCard from './BlogCard';
import { colors, typography } from '../../lib/designTokens';
import { getAllPosts } from '../../lib/blogUtils';

function BlogGrid() {
  // Get all posts from markdown files
  const allPosts = getAllPosts();

  // Split into trending and popular (for now, just use all posts)
  const trendingArticles = allPosts.slice(0, 4).map(post => ({
    slug: post.slug,
    title: post.title,
    description: post.excerpt,
    date: post.date,
    image: post.featuredImage
  }));

  const popularArticles = allPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    description: post.excerpt,
    date: post.date,
    image: post.featuredImage
  }));

  return (
    <div style={{ backgroundColor: colors.background.primary }}>
      {/* Trending Articles */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-12"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.primary,
              lineHeight: typography.lineHeight.tight,
              letterSpacing: typography.letterSpacing.tight,
            }}
          >
            Trending Articles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {trendingArticles.map((article, index) => (
              <BlogCard
                key={index}
                article={article}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section
        className="py-20 px-6 md:px-12 lg:px-24"
        style={{ backgroundColor: colors.background.isabelline }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-12"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.primary,
              lineHeight: typography.lineHeight.tight,
              letterSpacing: typography.letterSpacing.tight,
            }}
          >
            Popular Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <BlogCard key={index} article={article} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <button
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.button.primary,
                color: colors.text.light,
                fontFamily: typography.fontFamily.body,
              }}
            >
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogGrid;
