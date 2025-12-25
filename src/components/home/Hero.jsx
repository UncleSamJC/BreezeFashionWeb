import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { colors, typography } from '../../lib/designTokens';
import PrimaryButton from '../basic/PrimaryButton';
import SecondaryButton from '../basic/SecondaryButton';
import heroVideo from '../../assets/videos/hero-bg-22e74ef19.mp4';

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 尝试播放视频
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // 如果自动播放失败，监听用户交互后再播放
        const handleInteraction = () => {
          video.play();
          document.removeEventListener('touchstart', handleInteraction);
          document.removeEventListener('click', handleInteraction);
        };
        document.addEventListener('touchstart', handleInteraction, { once: true });
        document.addEventListener('click', handleInteraction, { once: true });
      }
    };

    // 视频准备好后播放
    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src={heroVideo}
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(254,238,145,0.1) 0%, rgba(256,162,57,0.2) 100%)',
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

export default Hero;
