import { Link } from "react-router-dom";
import { colors, typography } from "../lib/designTokens";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: colors.secondary }}
      className="w-full px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* 中间区域：大标题 BREEZE FA */}
        <div className="mb-10 pb-16 pt-16 border-b border-gray-200">
          <h2
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.secondary,
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              lineHeight: '1',

            }}
            className="font-normal text-center tracking-wider"
          >
            LET'S BREEZE
          </h2>
        </div>

        {/* 底部区域 版权 */}
        <div className="flex items-center justify-center pb-8">
          {/* 版权 */}
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              color: colors.text.secondary,
            }}
            className="text-base"
          >
            2024-{currentYear} Breeze Fashion. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
