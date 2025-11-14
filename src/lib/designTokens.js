/**
 * Design Tokens - 设计系统变量
 * 统一管理整个应用的颜色、间距、字体等设计规范
 */

export const colors = {
  // 主色调
  primary: '#CBB092',         // 主色 - 金棕色 '#A97B54',  
  secondary: '#FAFAFA',         // 深蓝色 '#001D3D', 

  // 背景色
  background: {
    primary: '#FFFFFF',         // 白色
    isabelline: '#F7F4EE',      // 象牙白
    whiteChocolate: '#EDE7DA',  // 白巧克力色
    darkVanilla: '#D4C7A6',     // 深香草色
  },

  // 按钮色
  button: {
    primary: '#A97B54',         // 主按钮
    secondary: '#001D3D',       // 次要按钮
    hover: {
      primary: '#8F6644',       // 主按钮悬停
      secondary: '#002952',     // 次要按钮悬停
    },
  },

  // 文字色
  text: {
    primary: '#0E0E0E',         // 主要文字 - 烟黑色
    secondary: '#827F7F',       // 次要文字 - 灰色
    light: '#FFFFFF',           // 浅色文字
    accent: '#A97B54',          // 强调文字
  },

  // 边框色
  border: {
    light: '#EDE7DA',           // 浅色边框
    medium: '#D4C7A6',          // 中等边框
    dark: '#827F7F',            // 深色边框
  },
};

export const spacing = {
  // Navbar 间距
  navbar: {
    top: '10px',                    // Navbar 距顶部距离
    paddingX: {
      expanded: {
        mobile: '1.5rem',           // 移动端展开时左右边距
        tablet: '3rem',             // 平板展开时左右边距
        desktop: '6rem',            // 桌面展开时左右边距
      },
      collapsed: {
        mobile: '1rem',             // 移动端收缩时左右边距
        tablet: '1.5rem',           // 平板收缩时左右边距
        desktop: '2rem',            // 桌面收缩时左右边距
      },
    },
    paddingY: {
      expanded: '1rem',             // 展开时上下边距
      collapsed: '0.75rem',         // 收缩时上下边距
    },
    scrollThreshold: 50,            // 触发收缩的滚动距离（px）
  },
};

export const typography = {
  // 字体家族
  fontFamily: {
    heading: '"Instrument Serif", Georgia, serif',  // 标题字体 - 优雅衬线
    body: '"Inter", -apple-system, sans-serif',     // 正文字体 - 现代无衬线
  },

  // 字体大小
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px - 段落文字
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px - H7
    '3xl': '2rem',      // 32px - H6
    '4xl': '2.75rem',   // 44px - H5
    '5xl': '3rem',      // 48px - H4
    '6xl': '3.25rem',   // 52px - H3
    '7xl': '4.5rem',    // 72px - H2
    '8xl': '5.5rem',    // 88px - H1
  },

  // 字重
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // 行高
  lineHeight: {
    tight: '120%',      // 标题行高
    normal: '150%',     // 段落行高
    relaxed: '160%',
  },

  // 字间距
  letterSpacing: {
    tight: '-0.02em',   // -2%
    normal: '0',
    wide: '0.02em',
  },
};

export const borderRadius = {
  sm: '0.5rem',         // 8px
  md: '1rem',           // 16px
  lg: '1.5rem',         // 24px
  full: '9999px',       // 完全圆角
};

export const transitions = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
};

// 断点（与 Tailwind 默认断点保持一致）
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
