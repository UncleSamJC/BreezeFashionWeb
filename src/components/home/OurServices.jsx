import { useState } from 'react';
import { colors, typography } from '../../lib/designTokens';

function OurServices() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const services = [
    {

      title: 'Business Legal Consultation',
      description: 'Offering expert legal guidance in corporate regulations and investment matters, helping businesses achieve compliance, mitigate risks, protect assets, and foster sustainable growth for lasting success.',
      image: 'https://cdn.prod.website-files.com/67b4265e6628451a28bef3a9/67ca7547e76f54417170af76_image%2015.png',
      link: '/service/business-legal-consultation'
    },
    {

      title: 'Dispute Resolution',
      description: 'Offering expert legal guidance in corporate regulations and investment matters, helping businesses achieve compliance, mitigate risks, protect assets, and foster sustainable growth for lasting success.',
      image: 'https://cdn.prod.website-files.com/67b4265e6628451a28bef3a9/67b550c07974e3eba43da26b_image%20(7).png',
      link: '/service/dispute-resolution'
    },
    {

      title: 'Licensing and Contracts',
      description: 'Offering expert legal guidance in corporate regulations and investment matters, helping businesses achieve compliance, mitigate risks, protect assets, and foster sustainable growth for lasting success.',
      image: 'https://cdn.prod.website-files.com/67b4265e6628451a28bef3a9/67be8baf13bb4679af4a2de6_Rectangle%2045.png',
      link: '/service/licensing-and-contracts'
    },
    {

      title: 'Intellectual Property Protection',
      description: 'Offering expert legal guidance in corporate regulations and investment matters, helping businesses achieve compliance, mitigate risks, protect assets, and foster sustainable growth for lasting success.',
      image: 'https://cdn.prod.website-files.com/67b4265e6628451a28bef3a9/67b426bb4b3c88fd7e4117e9_image.png',
      link: '/service/intellectual-property-protection'
    }
  ];

  const toggleService = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden" style={{ backgroundColor: colors.background.isabelline }}>
      {/* Background grain texture */}
      <img
        src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, opacity: 0.03 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - 仿照 WhyChooseUs 的样式 */}
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
              Our Service
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
            Expertly Tailored Legal Solutions for{' '}
            <br />
            <span style={{ color: '#c9a668' }}>Your Every Need</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b overflow-hidden transition-all duration-500"
              style={{ borderColor: 'rgba(0, 0, 0, 0.15)' }}
            >
              {/* Service Header - Always Visible */}
              <div
                onClick={() => toggleService(index)}
                className="flex items-center justify-between py-8 cursor-pointer group"
              >
                <div className="flex items-start gap-8 flex-1">

                  {/* Title and Expanded Content */}
                  <div className="flex-1">
                    <h3
                      className="text-2xl md:text-3xl lg:text-4xl mb-0 group-hover:opacity-70 transition-opacity"
                      style={{
                        fontFamily: typography.fontFamily.heading,
                        color: colors.text.primary,
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Expanded Content */}
                    <div
                      className="transition-all duration-500 overflow-hidden"
                      style={{
                        maxHeight: expandedIndex === index ? '800px' : '0px',
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                    >
                      <p
                        className="text-base md:text-lg mt-6 mb-6 pr-8"
                        style={{
                          fontFamily: typography.fontFamily.body,
                          color: colors.text.secondary,
                          lineHeight: '1.7',
                        }}
                      >
                        {service.description}
                      </p>

                      <button
                        className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-80"
                        style={{
                          backgroundColor: colors.button.primary,
                          color: colors.text.light,
                          fontFamily: typography.fontFamily.body,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle navigation
                          window.location.href = service.link;
                        }}
                      >
                        Learn More
                      </button>

                      {/* Image Section */}
                      <div className="mt-8 pr-12">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-auto rounded-2xl object-cover"
                          style={{
                            maxHeight: '500px',
                          }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="ml-4 flex-shrink-0">
                  <img
                    src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67b695171f9d1f76430668c6_arrow-narrow-right.svg"
                    alt=""
                    className="w-8 h-8 transition-transform duration-300"
                    style={{
                      transform: expandedIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
