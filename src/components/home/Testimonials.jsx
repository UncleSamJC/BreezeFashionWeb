import { colors, typography } from '../../lib/designTokens';
import grainImg from '../../assets/images/common/grain.png';
import c1 from '../../assets/images/clients/c1.png';
import c2 from '../../assets/images/clients/c2.png';
import c3 from '../../assets/images/clients/c3.png';
import c4 from '../../assets/images/clients/c4.png';
import c5 from '../../assets/images/clients/c5.png';
import c6 from '../../assets/images/clients/c6.png';
import c7 from '../../assets/images/clients/c7.png';
import c8 from '../../assets/images/clients/c8.png';
import c9 from '../../assets/images/clients/c9.png';

function Testimonials() {
  const clients = [
    { image: c1, name: 'Client 1' },
    { image: c2, name: 'Client 2' },
    { image: c3, name: 'Client 3' },
    { image: c4, name: 'Client 4' },
    { image: c5, name: 'Client 5' },
    { image: c6, name: 'Client 6' },
    { image: c7, name: 'Client 7' },
    { image: c8, name: 'Client 8' },
    { image: c9, name: 'Client 9' },
  ];

  return (
    <section
      className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: colors.background.isabelline }}
    >
      {/* 背景纹理图片 */}
      <img
        src={grainImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.5, zIndex: 0 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* 标签 */}
          <div className="inline-block mb-6">
            <div
              className="uppercase text-sm tracking-wider pb-2 border-b-2"
              style={{
                color: colors.primary,
                borderColor: colors.primary,
                fontFamily: typography.fontFamily.body,
                fontWeight: typography.fontWeight.medium,
              }}
            >
              Our Partners
            </div>
          </div>

          {/* 标题 */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: typography.fontFamily.heading,
              lineHeight: typography.lineHeight.tight,
              letterSpacing: typography.letterSpacing.tight,
            }}
          >
            <span style={{ color: colors.text.primary }}>
              Trusted by Leading Brands{' '}
            </span>
            <br />
            <span style={{ color: colors.primary }}>Worldwide</span>
          </h2>
        </div>

        {/* Clients Carousel - 走马灯 */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 items-center animate-scroll"
            style={{
              animation: 'scroll 30s linear infinite',
            }}
          >
            {/* 渲染两次以实现无缝循环 */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center p-6 rounded-xl"
                style={{
                  width: '200px',
                  height: '120px',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 添加 CSS 动画 */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}

export default Testimonials;