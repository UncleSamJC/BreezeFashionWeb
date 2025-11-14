import { colors, typography } from '../../lib/designTokens';

function WhyChooseUs() {
  const attributes = [
    {
      icon: 'https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2a1adf84997b44f076803_08dbb3cd-14d4-4ae5-8212-44c0247b164f.png',
      title: '15+ Years of Expertise',
      description: 'Since 2009, we’ve evolved from a designer kimono specialist to a full-range fashion manufacturer, delivering seasonal styles that keep your collections ahead of trends.'
    },
    {
      icon: 'https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2a1ada682f9bde562529f_08dbb3cd-14d4-4ae5-8212-44c0247b164f-1.png',
      title: 'End-to-End Quality Assurance',
      description: 'We control every step—from premium yarn selection to weaving, dyeing, and finishing. Our in-house printing expertise and SA8000-certified quality checks ensure vibrant, durable products.'
    },
    {
      icon: 'https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2a1ada8e69583e96e0887_08dbb3cd-14d4-4ae5-8212-44c0247b164f-2.png',
      title: 'Dual-Factory Global Production',
      description: 'Our China (Suzhou) and Vietnam (Ho Chi Minh City) facilities produce ​10,000+ units/day (4,810/day in China + 3,500/day in Vietnam), offering flexible scalability for both small-batch fast fashion and large-volume orders.'
    },
    {
      icon: 'https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2a1ad0d3994b9838a79dd_08dbb3cd-14d4-4ae5-8212-44c0247b164f-3.png',
      title: 'Trusted by 86,000+ Global Buyers',
      description: 'Serving ​86,000+ international clients (brands/retailers), our products are stocked in major department stores and boutiques worldwide—proven by repeat orders and long-term partnerships.'
    },
    {
      icon: 'https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2a1ad0d3994b9838a79d9_08dbb3cd-14d4-4ae5-8212-44c0247b164f-4.png',
      title: 'Complete Fashion Category Coverage',
      description: 'One-stop sourcing for scarves, beachwear, cover-ups, dresses, knits/wovens accessories, outwears plus pet tees and face masks—curated to meet diverse buyer needs.'
    },
    {
      icon: 'https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2a1adca60daab55e6cbb7_08dbb3cd-14d4-4ae5-8212-44c0247b164f-5.png',
      title: 'Flexible MOQ & Lightning-Fast Delivery',
      description: 'We understand the diverse needs of global buyers. That’s why we offer ​flexible minimum order quantities (MOQs)—from small-batch samples to large-volume production—and deliver with ​industry-leading speed. Whether you need a quick-turn prototype or a fast-fashion collection, our streamlined processes ensure your orders arrive on time, every time.'
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#F7F4EE' }}>
      {/* Background grain texture - 最底层 */}
      <img
        src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, opacity: 0.01 }}
      />

      {/* Background overlay - 第二层 */}
      <img
        src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67aeed40622e86f203929989_image-overlay.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 1, opacity: 0.05 }}
      />

      {/* 渐变遮罩 */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(26,61,92,0.1) 0%, rgba(26,61,92,0.5) 100%)',
          zIndex: 2,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge - 仿照 FinalCTA 的样式 */}
          <div className="inline-block mb-6">
            <div
              className="uppercase text-sm tracking-wider pb-2 border-b-2"
              style={{
                color: colors.text.light,
                borderColor: colors.text.light,
                fontFamily: typography.fontFamily.body,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              Why Choose Us
            </div>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.light,
              lineHeight: typography.lineHeight.tight,
              letterSpacing: typography.letterSpacing.tight,
            }}
          >
            Trusted Manufacturing Excellence for Your
            <br />
             <span style={{ color: '#c9a668' }}>Brand Success</span>
          </h2>
        </div>

        {/* Attributes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {attributes.map((attr, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(47, 79, 107, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <img
                  src={attr.icon}
                  alt=""
                  className="w-14 h-14 object-contain"
                  loading="lazy"
                />
              </div>

              <h3
                className="text-xl md:text-2xl mb-2"
                style={{
                  fontFamily: typography.fontFamily.heading,
                  color: colors.text.light,
                  fontWeight: 600,
                }}
              >
                {attr.title}
              </h3>

              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.7',
                }}
              >
                {attr.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
