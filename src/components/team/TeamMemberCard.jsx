import { colors, typography } from '../../lib/designTokens';

function TeamMemberCard({ member }) {
  return (
    <div className="group">
      {/* Image */}
      <div
        className="aspect-square rounded-2xl mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-105"
        style={{
          background: member.image
            ? `url(${member.image}) center/cover`
            : `linear-gradient(135deg, ${colors.background.darkVanilla}, ${colors.primary})`
        }}
      />

      {/* Info */}
      <h3
        className="text-xl md:text-2xl font-semibold mb-2"
        style={{
          fontFamily: typography.fontFamily.heading,
          color: colors.text.primary,
        }}
      >
        {member.name}
      </h3>

      <p
        className="text-base md:text-lg mb-4"
        style={{
          fontFamily: typography.fontFamily.body,
          color: colors.text.secondary,
        }}
      >
        {member.role}
      </p>

      {member.description && (
        <p
          className="text-sm md:text-base mb-4"
          style={{
            fontFamily: typography.fontFamily.body,
            color: colors.text.secondary,
            lineHeight: typography.lineHeight.normal,
          }}
        >
          {member.description}
        </p>
      )}

      <button
        className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: colors.button.primary,
          color: colors.text.light,
          fontFamily: typography.fontFamily.body,
        }}
      >
        Book Consultant
      </button>
    </div>
  );
}

export default TeamMemberCard;
