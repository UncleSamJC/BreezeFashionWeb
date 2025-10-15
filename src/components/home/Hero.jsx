import { colors, typography } from '../../lib/designTokens';
import PrimaryButton from '../basic/PrimaryButton';
import SecondaryButton from '../basic/SecondaryButton';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        poster="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f%2F67bd727dafd0640ee5593426_freepik__push-in-on-a-group-of-figures-walking-down-a-corri__23943%20%281%29-poster-00001.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f%2F67bd727dafd0640ee5593426_freepik__push-in-on-a-group-of-figures-walking-down-a-corri__23943%20%281%29-transcode.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f%2F67bd727dafd0640ee5593426_freepik__push-in-on-a-group-of-figures-walking-down-a-corri__23943%20%281%29-transcode.webm"
          type="video/webm"
        />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(0,29,61,0.4) 0%, rgba(0,29,61,0.8) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-7xl mb-6 px-4"
          style={{
            fontFamily: typography.fontFamily.heading,
            color: colors.text.light,
            lineHeight: typography.lineHeight.tight,
            letterSpacing: typography.letterSpacing.tight,
          }}
        >
          Quality, Innovation, Excellence in Apparel Manufacturing
        </h1>

        <p
          className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 px-4"
          style={{
            fontFamily: typography.fontFamily.body,
            color: colors.text.light,
            lineHeight: '1.7',
          }}
        >
          With proven expertise and advanced manufacturing capabilities, we stand as your trusted apparel partner to bring your designs to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PrimaryButton>Request Quote</PrimaryButton>
          <SecondaryButton>Our Services</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;
