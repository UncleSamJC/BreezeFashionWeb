import { colors, typography } from '../../lib/designTokens';

function TeamPreview() {
  const teamMembers = [
    { name: 'Emily Carter', role: 'Operations Director', image: '/placeholder-team-1.jpg' },
    { name: 'James Wilson', role: 'Production Manager', image: '/placeholder-team-2.jpg' },
    { name: 'Sophia Anderson', role: 'Quality Director', image: '/placeholder-team-3.jpg' },
    { name: 'Daniel Martinez', role: 'Business Advisor', image: '/placeholder-team-4.jpg' },
    { name: 'Olivia Brown', role: 'Design Coordinator', image: '/placeholder-team-5.jpg' },
    { name: 'William Davis', role: 'Supply Chain Manager', image: '/placeholder-team-6.jpg' },
    { name: 'Ava Johnson', role: 'Client Relations', image: '/placeholder-team-7.jpg' },
    { name: 'Robert Smith', role: 'Technical Director', image: '/placeholder-team-8.jpg' },
  ];

  return (
    <section
      className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: colors.secondary }}
    >
      {/* 背景纹理图片 */}
      <img
        src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67b29f23c5b3038c9ea552cd_grain.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.5, zIndex: 0 }}
      />

      {/* 背景遮罩图片 */}
      <img
        src="https://cdn.prod.website-files.com/67aec585824eadef2eebc54f/67aeed40622e86f203929989_image-overlay.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.3, zIndex: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* OUR TEAM 标签 */}
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
              our team
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
            <span style={{ color: colors.text.light }}>
              Introducing Our Experienced<br />
              Team of{' '}
            </span>
            <span style={{ color: colors.primary }}>Industry Professionals</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div
                className="aspect-square rounded-2xl mb-4 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.background.darkVanilla}, ${colors.primary})`
                }}
              />

              {/* Info */}
              <h3
                className="text-lg md:text-xl font-semibold mb-1"
                style={{
                  fontFamily: typography.fontFamily.heading,
                  color: colors.text.light,
                }}
              >
                {member.name}
              </h3>

              <p
                className="text-sm md:text-base mb-3"
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.secondary,
                }}
              >
                {member.role}
              </p>

              <button
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: colors.button.primary,
                  color: colors.text.light,
                  fontFamily: typography.fontFamily.body,
                }}
              >
                Contact Specialist
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamPreview;
