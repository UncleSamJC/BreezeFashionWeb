import { Link } from "react-router-dom";
import { colors, typography } from "../lib/designTokens";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: colors.secondary }}
      className="w-full px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* 顶部区域：Motto + Contact us（左右两列）*/}
        <div className="flex flex-col mb-20 border-b border-white/20">
          {/* Motto 部分 */}
          <div className="flex flex-col py-12 md:flex-row items-start md:justify-between w-full border-b border-white/20 gap-4">
            {/* Title */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <img
                src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67b2d3b9ba3c1102f786a87d_Ellipse-1.svg"
                alt=""
                className="w-2 h-2"
              />
              <h3
                style={{
                  fontFamily: typography.fontFamily.heading,
                  color: colors.text.light,
                }}
                className="text-4xl lg:text-5xl font-normal whitespace-nowrap"
              >
                Motto
              </h3>
            </div>
            {/* Content */}
            <div className="max-w-[675px] md:ml-12">
              <p
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.light,
                  fontSize: '16px',
                }}
                className="font-normal leading-relaxed"
              >
                "Navigating Complex Legal Challenges with Integrity, Expertise, and a Commitment to Delivering Exceptional Solutions."
              </p>
            </div>
          </div>

          {/* Contact us 部分 */}
          <div className="flex flex-col py-12 md:flex-row items-start md:justify-between w-full border-b border-white/20 gap-4">
            {/* Title */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <img
                src="https://cdn.prod.website-files.com/677df2203175761c2bf874cb/67b2d3b9ba3c1102f786a87d_Ellipse-1.svg"
                alt=""
                className="w-2 h-2"
              />
              <h3
                style={{
                  fontFamily: typography.fontFamily.heading,
                  color: colors.text.light,
                }}
                className="text-4xl lg:text-5xl font-normal whitespace-nowrap"
              >
                Contact us
              </h3>
            </div>
            {/* Content */}
            <div className="max-w-[675px] md:ml-12">
              <div
                style={{
                  fontFamily: typography.fontFamily.body,
                  color: colors.text.light,
                  fontSize: '16px',
                }}
                className="space-y-2 font-normal"
              >
                <p>Phone: +1 (123) 456-7890</p>
                <p>Email: info@Breeze.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* 中间区域：大标题 BREEZE FA */}
        <div className="mb-10 pb-16 border-b border-white/10">
          <h2
            style={{
              fontFamily: typography.fontFamily.heading,
              color: colors.text.light,
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              lineHeight: '1',
            }}
            className="font-normal text-center tracking-wider"
          >
            BREEZE FA
          </h2>
        </div>

        {/* 底部区域 版权 */}
        <div className="flex items-center justify-center pb-8">
          {/* 版权 */}
          <p
            style={{
              fontFamily: typography.fontFamily.body,
              color: colors.text.light,
            }}
            className="text-base"
          >
            2025 Breeze Fashion. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
