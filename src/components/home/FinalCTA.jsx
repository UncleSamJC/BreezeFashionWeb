import { Link } from 'react-router-dom';
import { colors, typography } from '../../lib/designTokens';
import PrimaryButton from '../basic/PrimaryButton';
import SecondaryButton from '../basic/SecondaryButton';


function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center px-6 md:px-12 lg:px-24"
      style={{
        backgroundColor: colors.background.isabelline,
        height: '599px',
      }}
    >
      {/* 背景纹理 */}
      <img
        src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, opacity: 0.03 }}
      />

      {/* 内容区域 */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* GET STARTED TODAY 标签 */}
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
            get started today
          </div>
        </div>

        {/* 标题 */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl mb-8"
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.primary,
            lineHeight: typography.lineHeight.tight,
            letterSpacing: typography.letterSpacing.tight,
          }}
        >
          Let Breeze Fashion Be Your<br />
          <span style={{ color: '#A97B54' }}>Trusted Manufacturing Partner</span>
        </h2>

        {/* 按钮组 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <PrimaryButton>Request Quote</PrimaryButton>
          </Link>
          <a href="/#our-services">
            <SecondaryButton>Our Services</SecondaryButton>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
