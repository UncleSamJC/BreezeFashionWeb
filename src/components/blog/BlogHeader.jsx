import { colors, typography } from '../../lib/designTokens';

function BlogHeader() {
  return (
    <section
      className="pt-32 pb-20 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: colors.background.isabelline }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl mb-6"
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.primary,
            lineHeight: typography.lineHeight.tight,
            letterSpacing: typography.letterSpacing.tight,
          }}
        >
          Insights & Articles
        </h1>

        <p
          className="text-base md:text-lg max-w-2xl mx-auto"
          style={{
            fontFamily: typography.fontFamily.body,
            color: colors.text.secondary,
            lineHeight: typography.lineHeight.normal,
          }}
        >
          Stay informed with the latest legal insights, industry trends, and expert analysis
          from our team of professionals.
        </p>
      </div>
    </section>
  );
}

export default BlogHeader;
