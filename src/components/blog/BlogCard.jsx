import { Link } from 'react-router-dom';
import { colors, typography } from '../../lib/designTokens';

function BlogCard({ article, featured = false }) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className={`block rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 ${
        featured ? 'md:col-span-2' : ''
      }`}
      style={{ backgroundColor: colors.background.primary }}
    >
      {/* Image */}
      <div
        className={`bg-gradient-to-br ${featured ? 'h-64 md:h-96' : 'h-48'}`}
        style={{
          background: article.image
            ? `url(${article.image}) center/cover`
            : `linear-gradient(135deg, ${colors.background.darkVanilla}, ${colors.primary})`
        }}
      />

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div
          className="text-sm mb-3"
          style={{
            fontFamily: typography.fontFamily.body,
            color: colors.text.secondary,
          }}
        >
          {article.date}
        </div>

        {/* Title */}
        <h3
          className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} mb-3`}
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.primary,
            lineHeight: typography.lineHeight.tight,
          }}
        >
          {article.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm md:text-base mb-4"
          style={{
            fontFamily: typography.fontFamily.body,
            color: colors.text.secondary,
            lineHeight: typography.lineHeight.normal,
          }}
        >
          {article.description}
        </p>

        {/* Read More Link */}
        <span
          className="inline-block font-medium hover:underline"
          style={{
            color: colors.primary,
            fontFamily: typography.fontFamily.body,
          }}
        >
          Read More →
        </span>
      </div>
    </Link>
  );
}

export default BlogCard;
