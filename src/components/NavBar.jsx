import { useState } from "react";
import { Link } from "react-router-dom";
import { colors, typography } from "../lib/designTokens";
import webLogo from "../assets/images/web-logo-v2.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/products", text: "Products" },
    { to: "/downloads", text: "Downloads" },
    { to: "/blog", text: "Blog" }
  ];

  return (
    <nav
      style={{ backgroundColor: 'rgba(250, 250, 250, 0.7)' }}
      className="fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-sm"
    >
      {/* 主容器 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo 组 */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={webLogo}
              alt="Breeze Fashion Logo"
              className="h-10 w-10"
            />
            <span
              style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: '32px',
                fontWeight: typography.fontWeight.normal,
                color: colors.text.primary,
              }}
            >
              Breeze Fashion
            </span>
          </Link>

          {/* 中间菜单组 - 桌面端 */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.to}
                style={{ color: colors.text.secondary }}
                className="text-base font-medium whitespace-nowrap relative group transition-colors hover:!text-[#CBB092]"
              >
                {item.text}
                <span
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: colors.text.primary }}
                ></span>
              </Link>
            ))}
          </div>

          {/* 右侧按钮组 */}
          <div className="flex items-center gap-4">
            {/* Contact Us 按钮 - 桌面端 */}
            <Link
              to="/contact"
              style={{
                backgroundColor: colors.background.darkVanilla,
                color: colors.text.primary,
              }}
              className="hidden lg:block rounded-full px-8 py-3 text-base font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Contact Us
            </Link>

            {/* 汉堡菜单按钮 - 移动端 */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ backgroundColor: colors.primary }}
              className="lg:hidden p-3 rounded-md transition-opacity hover:opacity-90"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                style={{ color: colors.text.primary }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端展开菜单 */}
      <div
        style={{ backgroundColor: 'rgba(250, 250, 250, 0.95)' }}
        className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 border-t border-gray-200' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              to={item.to}
              style={{ color: colors.text.primary }}
              className="block py-3 text-base font-medium hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
          {/* Contact Us 按钮 - 移动端 */}
          <Link
            to="/contact"
            style={{
              backgroundColor: colors.background.primary,
              color: colors.text.primary,
            }}
            className="block text-center rounded-full px-8 py-3 text-base font-medium hover:opacity-90 transition-opacity mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
