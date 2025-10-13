import { useState } from 'react';
import { colors, typography } from '../../lib/designTokens';

function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    {
      question: 'What services does NobleLaw offer?',
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      question: 'How can I schedule a consultation with NobleLaw?',
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      question: 'What industries does NobleLaw specialize in?',
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      question: 'Why should I choose NobleLaw?',
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      question: 'How much do your legal services cost?',
      answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
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
