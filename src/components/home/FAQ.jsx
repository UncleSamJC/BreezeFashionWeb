import { useState } from 'react';
import { colors, typography } from '../../lib/designTokens';

function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    {
      question: 'What services does Breeze Fashion offer?',
      answer: 'Breeze Fashion offers comprehensive apparel manufacturing services including custom production, pattern making, sampling, quality control, and fabric sourcing for brands of all sizes.'
    },
    {
      question: 'How can I request a quote from Breeze Fashion?',
      answer: 'You can request a quote by contacting us through our website contact form, sending an email to our team, or calling our office. We will respond within 24 hours with initial pricing information.'
    },
    {
      question: 'What types of garments does Breeze Fashion specialize in?',
      answer: 'We specialize in a wide range of apparel including casual wear, activewear, formal clothing, and custom designs. Our expertise covers everything from concept to finished product.'
    },
    {
      question: 'Why should I choose Breeze Fashion?',
      answer: 'Breeze Fashion combines proven manufacturing expertise, quality assurance, competitive pricing, and reliable delivery times. We are committed to bringing your design vision to life with excellence.'
    },
    {
      question: 'What are the minimum order quantities?',
      answer: 'Our minimum order quantities vary depending on the garment type and complexity. Please contact us with your specific requirements for detailed MOQ information and pricing.'
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section
      className="relative py-12 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: colors.background.whiteChocolate }}
    >
      {/* 背景纹理图片 */}
      <img
        src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.5, zIndex: 0 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* FAQ 标签 */}
          <div className="inline-block mb-6">
            <div
              className="uppercase text-sm tracking-wider pb-2 border-b-2"
              style={{
                color: colors.text.primary,
                borderColor: colors.text.primary,
                fontFamily: typography.fontFamily.body,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              faq
            </div>
          </div>

          {/* 标题 */}
          <h2
            className="text-7xl md:text-7xl lg:text-6xl"
            style={{
              fontFamily: typography.fontFamily.heading,
              lineHeight: typography.lineHeight.tight,
              letterSpacing: typography.letterSpacing.tight,
            }}
          >
            <span style={{ color: colors.text.primary }}>Frequently </span>
            <span style={{ color: colors.primary }}>Asked Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b"
              style={{ borderColor: colors.border.light }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 flex justify-between items-center hover:opacity-80 transition-opacity"
              >
                <span
                  className="text-3xl md:text-3xl font-normal pr-4"
                  style={{
                    fontFamily: typography.fontFamily.heading,
                    color: colors.text.primary,
                  }}
                >
                  {faq.question}
                </span>
                <span
                  className="text-3xl flex-shrink-0 transition-transform"
                  style={{
                    color: colors.text.primary,
                    transform: openIndexes.includes(index) ? 'rotate(45deg)' : 'rotate(0)',
                    transitionDuration: '800ms',
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all ease-in-out"
                style={{
                  maxHeight: openIndexes.includes(index) ? '500px' : '0',
                  opacity: openIndexes.includes(index) ? '1' : '0',
                  transitionDuration: '800ms',
                  transitionProperty: 'max-height, opacity',
                }}
              >
                <div className="pb-6 pt-2">
                  <p
                    className="text-base"
                    style={{
                      fontFamily: typography.fontFamily.body,
                      color: colors.text.secondary,
                      lineHeight: typography.lineHeight.normal,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
