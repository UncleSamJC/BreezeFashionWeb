import { colors, typography } from '../../lib/designTokens';

function SecondaryButton({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:!bg-black border-2 hover:scale-105 ${className}`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.098)',
        borderColor: colors.text.light,
        color: colors.text.light,
        fontFamily: typography.fontFamily.body,
      }}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
