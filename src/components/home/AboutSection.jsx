import { colors, typography } from '../../lib/designTokens';

function AboutSection() {
  const metrics = [
    { value: '15+', label: 'Year Experience' },
    { value: '86k', label: 'Client Worldwide' },
    { value: '28', label: 'Awards & Honor' },
    { value: '98%', label: 'Happy Client' },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden" style={{ backgroundColor: colors.background.whiteChocolate }}>
      {/* Background grain texture */}
      <img
        src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, opacity: 0.03 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section: Content + Image */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-6">
              <div
                className="uppercase text-sm tracking-wider pb-2 border-b-2 inline-block"
                style={{
                  color: colors.text.secondary,
                  borderColor: colors.text.secondary,
                  fontFamily: typography.fontFamily.body,
                  fontWeight: typography.fontWeight.medium,
                }}
              >
                About us
              </div>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              style={{
                fontFamily: typography.fontFamily.heading,
                color: colors.text.primary,
                lineHeight: typography.lineHeight.tight,
                letterSpacing: typography.letterSpacing.tight,
              }}
            >
              Your Trusted Partner for Reliable{' '}
              <span style={{ color: '#c9a668' }}>Legal Solutions</span>
            </h2>

            <p
              className="text-base md:text-lg mb-8"
              style={{
                fontFamily: typography.fontFamily.body,
                color: colors.text.secondary,
                lineHeight: '1.7',
              }}
            >
              As a law firm with a solid reputation, we are committed to providing reliable and solution-oriented legal services. Focused on our clients' needs, we ensure that every solution is crafted to safeguard both business and personal interests.
            </p>

            <button
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: colors.button.primary,
                color: colors.text.light,
                fontFamily: typography.fontFamily.body,
              }}
            >
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67aeed40002c626c25144224_image-1.png"
              alt="Legal services"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Section: Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center py-8 px-6"
              style={{
                borderLeft: index > 0 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
              }}
            >
              <div
                className="text-5xl md:text-6xl lg:text-7xl mb-3"
                style={{
                  fontFamily: typography.fontFamily.heading,
                  color: colors.text.primary,
                  fontWeight: typography.fontWeight.normal,
                }}
              >
                {metric.value}
              </div>
              <div
                className="text-sm md:text-base"
                style={{
                  fontFamily: typography.fontFamily.heading,
                  color: colors.text.secondary,
                  fontWeight: typography.fontWeight.normal,
                }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
