import { colors, typography } from '../../lib/designTokens';

function Testimonials() {
  const testimonials = [
    {
      name: 'Alecia Höpker',
      location: 'Kyoto Japan',
      quote: 'From the very beginning, NobleLaw demonstrated a clear commitment to understanding our needs. Their legal advice and solutions were instrumental in driving our success and protecting our interests.',
      image: '/placeholder-client-1.jpg'
    },
    {
      name: 'Artur Kopp',
      location: 'Kyoto Japan',
      quote: 'From the very beginning, NobleLaw demonstrated a clear commitment to understanding our needs. Their legal advice and solutions were instrumental in driving our success and protecting our interests.',
      image: '/placeholder-client-2.jpg'
    },
    {
      name: 'Alecia Höpker',
      location: 'Kyoto Japan',
      quote: 'From the very beginning, NobleLaw demonstrated a clear commitment to understanding our needs. Their legal advice and solutions were instrumental in driving our success and protecting our interests.',
      image: '/placeholder-client-1.jpg'
    },
    {
      name: 'Artur Kopp',
      location: 'Kyoto Japan',
      quote: 'From the very beginning, NobleLaw demonstrated a clear commitment to understanding our needs. Their legal advice and solutions were instrumental in driving our success and protecting our interests.',
      image: '/placeholder-client-2.jpg'
    },
    {
      name: 'Alecia Höpker',
      location: 'Kyoto Japan',
      quote: 'From the very beginning, NobleLaw demonstrated a clear commitment to understanding our needs. Their legal advice and solutions were instrumental in driving our success and protecting our interests.',
      image: '/placeholder-client-1.jpg'
    },
    {
      name: 'Artur Kopp',
      location: 'Kyoto Japan',
      quote: 'From the very beginning, NobleLaw demonstrated a clear commitment to understanding our needs. Their legal advice and solutions were instrumental in driving our success and protecting our interests.',
      image: '/placeholder-client-2.jpg'
    },
  ];

  return (
    <section
      className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: colors.background.isabelline }}
    >
      {/* 背景纹理图片 */}
      <img
        src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.5, zIndex: 0 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* TESTIMONIAL 标签 */}
          <div className="inline-block mb-6">
            <div
              className="uppercase text-sm tracking-wider pb-2 border-b-2"
              style={{
                color: colors.primary,
                borderColor: colors.primary,
                fontFamily: typography.fontFamily.body,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              testimonial
            </div>
          </div>

          {/* 标题 */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: typography.fontFamily.heading,
              lineHeight: typography.lineHeight.tight,
              letterSpacing: typography.letterSpacing.tight,
            }}
          >
            <span style={{ color: colors.text.primary }}>
              Hear Directly from Our Valued{' '}
            </span>
            <br />
            <span style={{ color: colors.primary }}>Clients and Partners</span>
          </h2>
        </div>

        {/* Testimonials Carousel - 走马灯 */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 animate-scroll"
            style={{
              animation: 'scroll 40s linear infinite',
            }}
          >
            {/* 渲染两次以实现无缝循环 */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl flex flex-col justify-between flex-shrink-0"
                style={{
                  backgroundColor: colors.background.primary,
                  minHeight: '320px',
                  width: '450px',
                }}
              >
                {/* Quote */}
                <p
                  className="text-lg mb-8"
                  style={{
                    fontFamily: typography.fontFamily.body,
                    color: colors.text.primary,
                    lineHeight: typography.lineHeight.normal,
                  }}
                >
                  {testimonial.quote}
                </p>

                {/* Client Info - 底部对齐 */}
                <div className="flex items-center gap-4 mt-auto">
                  {/* Avatar */}
                  <div
                    className="w-14 h-14 rounded-full flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
                    }}
                  />

                  <div>
                    <div
                      className="font-semibold text-lg"
                      style={{
                        fontFamily: typography.fontFamily.heading,
                        color: colors.text.primary,
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className="text-sm"
                      style={{
                        fontFamily: typography.fontFamily.body,
                        color: colors.text.secondary,
                      }}
                    >
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 添加 CSS 动画 */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}

export default Testimonials;
