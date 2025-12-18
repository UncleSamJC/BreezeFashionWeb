import { useState } from "react";
import { colors, typography } from "../../lib/designTokens";
import s1Image from "../../assets/images/service/bs1.png";
import s2Image from "../../assets/images/service/bs2.png";
import s3Image from "../../assets/images/service/bs3.png";
import s4Image from "../../assets/images/service/bs4.png";

function OurServices() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const services = [
    {
      title: "Custom Apparel Manufacturing",
      description:
        "Offering expert garment production from concept to completion, helping brands create high-quality clothing lines that meet market demands, maintain consistency, and achieve sustainable growth for lasting success.",
      image: s1Image
    },
    {
      title: "Quality Control & Inspection",
      description:
        "Comprehensive quality assurance throughout the production process, ensuring every garment meets your specifications and industry standards, protecting your brand reputation and customer satisfaction.",
      image:
        s2Image
    },
    {
      title: "Pattern Making & Sampling",
      description:
        "Professional pattern development and sample creation services, transforming your designs into production-ready templates with precision measurements, fit optimization, and material selection guidance.",
      image:
        s3Image
    },
    {
      title: "Fabric Sourcing & Development",
      description:
        "Strategic fabric sourcing and custom textile development services, connecting you with quality suppliers, managing material procurement, and ensuring cost-effective solutions for your production needs.",
      image:
        s4Image
    },
  ];

  const toggleService = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="our-services"
      className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: colors.background.slightWhite }}
    >
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
            Expertly Tailored Manufacturing Solutions for <br />
            <span style={{ color: "#c9a668" }}>Your Brand Vision</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b overflow-hidden transition-all duration-500"
              style={{ borderColor: "rgba(0, 0, 0, 0.15)" }}
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
                        maxHeight: expandedIndex === index ? "800px" : "0px",
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                    >
                      <p
                        className="text-base md:text-lg mt-6 mb-6 pr-8"
                        style={{
                          fontFamily: typography.fontFamily.body,
                          color: colors.text.secondary,
                          lineHeight: "1.7",
                        }}
                      >
                        {service.description}
                      </p>

                      {/* Image Section */}
                      <div className="mt-8 pr-12">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-auto rounded-2xl object-cover"
                          style={{
                            maxHeight: "500px",
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
                      transform:
                        expandedIndex === index
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
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
