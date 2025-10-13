import { colors, typography } from '../../lib/designTokens';

function PrimaryButton({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:!bg-transparent border-2 hover:scale-105 ${className}`}
      style={{
        backgroundColor: colors.button.primary,
        borderColor: colors.button.primary,
        color: colors.text.light,
        fontFamily: typography.fontFamily.body,
      }}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
