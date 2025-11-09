import { Link } from 'react-router-dom';
import { colors, typography } from '../../lib/designTokens';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

function SubPageHero({
  backgroundImage,
  title,
  description,
  showButtons = true
}) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(0,29,61,0.4) 0%, rgba(0,29,61,0.8) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl mb-6 px-4"
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.light,
            lineHeight: typography.lineHeight.tight,
            letterSpacing: typography.letterSpacing.tight,
          }}
        >
          {title}
        </h1>

        <p
          className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 px-4"
          style={{
            fontFamily: typography.fontFamily.body,
            color: colors.text.light,
            lineHeight: '1.7',
          }}
        >
          {description}
        </p>

        {/* Buttons */}
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <PrimaryButton>Book Consultant</PrimaryButton>
            </Link>
            <Link to="/#our-services">
              <SecondaryButton>Our Services</SecondaryButton>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default SubPageHero;
