import { colors, typography } from '../../lib/designTokens';
import icon1 from '../../assets/images/common/icon-1.png';
import icon2 from '../../assets/images/common/icon-2.png';
import icon3 from '../../assets/images/common/icon-3.png';
import icon4 from '../../assets/images/common/icon-4.png';
import icon5 from '../../assets/images/common/icon-5.png';
import icon6 from '../../assets/images/common/icon-6.png';

function WhyChooseUs() {
  const attributes = [
    {
      icon: icon1,
      title: '15+ Years of Expertise',
      description: 'Since 2009, we have evolved from a designer kimono specialist to a full-range fashion manufacturer, delivering seasonal styles that keep your collections ahead of trends.'
    },
    {
      icon: icon2,
      title: 'End-to-End Quality Assurance',
      description: 'We control every step—from premium yarn selection to weaving, dyeing, and finishing. Our in-house printing expertise and SA8000-certified quality checks ensure vibrant, durable products.'
    },
    {
      icon: icon3,
      title: 'Dual-Factory Global Production',
      description: 'Our China (Suzhou) and Vietnam (Ho Chi Minh City) facilities produce ​10,000+ units/day (4,810/day in China + 3,500/day in Vietnam), offering flexible scalability for both small-batch fast fashion and large-volume orders.'
    },
    {
      icon: icon4,
      title: 'Trusted by 86,000+ Global Buyers',
      description: 'Serving ​86,000+ international clients (brands/retailers), our products are stocked in major department stores and boutiques worldwide—proven by repeat orders and long-term partnerships.'
    },
    {
      icon: icon5,
      title: 'Complete Fashion Category Coverage',
      description: 'One-stop sourcing for scarves, beachwear, cover-ups, dresses, knits/wovens accessories, outwears plus pet tees and face masks—curated to meet diverse buyer needs.'
    },
    {
      icon: icon6,
      title: 'Flexible MOQ & Lightning-Fast Delivery',
      description: "We understand the diverse needs of global buyers. That's why we offer flexible minimum order quantities (MOQs)—from small-batch samples to large-volume production—and deliver with industry-leading speed. Whether you need a quick-turn prototype or a fast-fashion collection, our streamlined processes ensure your orders arrive on time, every time."
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#F7F4EE' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block mb-6">
            <div
              className="uppercase text-sm tracking-wider pb-2 border-b-2"
              style={{
                color: colors.text.secondary,
                borderColor: colors.text.secondary,
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
              color: colors.text.primary,
              lineHeight: typography.lineHeight.tight,
              letterSpacing: typography.letterSpacing.tight,
            }}
          >
            Trusted Manufacturing Excellence for Your
            <br />
             <span style={{ color: '#A97B54' }}>Brand Success</span>
          </h2>
        </div>

        {/* Attributes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {attributes.map((attr, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: colors.background.whiteChocolate,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(212, 199, 166, 0.3)',
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
                  color: colors.text.primary,
                  fontWeight: 600,
                }}
              >
                {attr.title}
              </h3>

              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.secondary,
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
