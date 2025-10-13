import { colors, typography } from '../../lib/designTokens';
import PrimaryButton from '../basic/PrimaryButton';
import SecondaryButton from '../basic/SecondaryButton';

function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center px-6 md:px-12 lg:px-24"
      style={{
        backgroundColor: colors.secondary,
        height: '599px',
      }}
    >
      {/* 背景图片 */}
      <img
        src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b2c05a796a335d9cc60ea7_Rectangle%2041.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* 渐变遮罩 */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(0,29,61,0.2) 0%, rgba(0,29,61,0.6) 100%)',
          zIndex: 1,
        }}
      />

      {/* 内容区域 */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* GET STARTED TODAY 标签 */}
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
            get started today
          </div>
        </div>

        {/* 标题 */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl mb-8"
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.light,
            lineHeight: typography.lineHeight.tight,
            letterSpacing: typography.letterSpacing.tight,
          }}
        >
          Let NobleLaw Be Your<br />
          Trusted Legal Partner
        </h2>

        {/* 按钮组 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PrimaryButton>Book Consultant</PrimaryButton>
          <SecondaryButton>Our Services</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
