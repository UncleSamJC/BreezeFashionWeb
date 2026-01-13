# Breeze Fashion - 项目交付文件清单

**项目名称**: Breeze Fashion 官网前端
**版本**: 0.0.1
**交付日期**: 2025年12月29日
**技术栈**: React 19 + Vite 7 + TailwindCSS 3.4 + Supabase

---

## 一、项目概述

Breeze Fashion 是一个面向 B2B 客户的服装制造企业官网，包含企业展示、产品介绍、博客系统、文件下载中心和后台管理系统。

---

## 二、目录结构

```
BreezeFashionFE/
├── public/                    # 静态资源
│   ├── templates/             # 下载模板
│   │   └── blog-template.md   # 博客文章模板
│   └── vite.svg
├── src/
│   ├── assets/               # 项目资源文件
│   │   ├── images/           # 图片资源 (约200+文件)
│   │   └── videos/           # 视频资源
│   ├── components/           # React 组件
│   ├── hooks/                # 自定义 Hooks
│   ├── lib/                  # 工具库
│   ├── pages/                # 页面组件
│   ├── App.jsx               # 应用主入口
│   └── main.jsx              # React 入口
├── .env                      # 环境变量 (需配置)
├── package.json              # 项目依赖
├── tailwind.config.js        # TailwindCSS 配置
├── vite.config.js            # Vite 配置
├── vercel.json               # Vercel 部署配置
└── CLAUDE.md                 # 项目说明文档
```

---

## 三、页面清单 (共10个页面)

| 路由 | 文件路径 | 功能描述 |
|------|----------|----------|
| `/` | `src/pages/Home.jsx` | 首页 - 企业介绍、服务展示、FAQ等 |
| `/about` | `src/pages/AboutUs.jsx` | 关于我们 - 企业介绍 |
| `/products` | `src/pages/Products.jsx` | 产品展示 - 产品分类列表 |
| `/blog` | `src/pages/Blog.jsx` | 博客列表 - 文章列表展示 |
| `/blog/:slug` | `src/pages/BlogPost.jsx` | 博客详情 - 文章详情页 |
| `/contact` | `src/pages/Contact.jsx` | 联系我们 - 联系表单 |
| `/downloads` | `src/pages/Downloads.jsx` | 下载中心 - PDF文件下载 |
| `/privacy-policy` | `src/pages/PrivacyPolicy.jsx` | 隐私政策页面 |
| `/admin/login` | `src/pages/admin/Login.jsx` | 管理员登录 |
| `/admin/dashboard` | `src/pages/admin/Dashboard.jsx` | 管理后台 |

---

## 四、组件清单

### 4.1 基础组件 (`src/components/basic/`)

| 组件 | 功能 |
|------|------|
| `PrimaryButton.jsx` | 主要按钮 |
| `SecondaryButton.jsx` | 次要按钮 |
| `SubPageHero.jsx` | 子页面顶部横幅 (含视差效果) |
| `SectionBadge.jsx` | 区块标签 |
| `Arrow45deg.jsx` | 45度箭头图标 |

### 4.2 首页组件 (`src/components/home/`)

| 组件 | 功能 |
|------|------|
| `Hero.jsx` | 首页视频横幅 (含视差效果) |
| `AboutSection.jsx` | 关于我们区块 |
| `OurServices.jsx` | 服务展示区块 |
| `WhyChooseUs.jsx` | 为什么选择我们 |
| `Testimonials.jsx` | 客户评价 |
| `TeamPreview.jsx` | 团队预览 |
| `FAQ.jsx` | 常见问题 |
| `FinalCTA.jsx` | 底部行动号召 |

### 4.3 博客组件 (`src/components/blog/`)

| 组件 | 功能 |
|------|------|
| `BlogHeader.jsx` | 博客页头部 |
| `BlogGrid.jsx` | 博客列表网格 |
| `BlogCard.jsx` | 博客卡片 |

### 4.4 管理后台组件 (`src/components/admin/`)

| 组件 | 功能 |
|------|------|
| `Sidebar.jsx` | 侧边栏导航 |
| `CustomerMessages.jsx` | 客户消息管理 |
| `UploadFiles.jsx` | 文件上传管理 |
| `PostBlog.jsx` | 博客发布 |
| `SendEmail.jsx` | 邮件发送 (待实现) |

### 4.5 其他组件

| 组件 | 功能 |
|------|------|
| `NavBar.jsx` | 顶部导航栏 |
| `Footer.jsx` | 页脚 |
| `PageTransition.jsx` | 页面切换过渡动画 |
| `FileDownloadGrid.jsx` | 文件下载列表 |
| `ContactFormNew.jsx` | 联系表单 |
| `ProductCategories.jsx` | 产品分类 |

---

## 五、自定义 Hooks (`src/hooks/`)

| Hook | 功能 |
|------|------|
| `useParallax.js` | 视差滚动效果 |
| `useAnimateBottomToUp.js` | 从下到上滚动动画 |
| `useAnimateBigToSmall.js` | 缩放动画 |

---

## 六、工具库 (`src/lib/`)

| 文件 | 功能 |
|------|------|
| `designTokens.js` | 设计系统 (颜色、字体、间距等) |
| `supabase.js` | Supabase 客户端初始化 |
| `supabaseStorage.js` | Supabase 存储操作封装 |
| `blogUtils.js` | 博客工具函数 |

---

## 七、第三方依赖

### 7.1 核心依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| `react` | 19.1.0 | UI框架 |
| `react-dom` | 19.1.0 | React DOM |
| `react-router-dom` | 7.6.3 | 路由管理 |
| `@supabase/supabase-js` | 2.50.2 | 后端服务 |
| `tailwindcss` | 3.4.17 | CSS框架 |

### 7.2 功能依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| `react-ga4` | 2.1.0 | Google Analytics |
| `@emailjs/browser` | 4.4.1 | 邮件发送 |
| `react-hook-form` | 7.59.0 | 表单处理 |
| `react-markdown` | 10.1.0 | Markdown渲染 |
| `gray-matter` | 4.0.3 | Markdown frontmatter解析 |
| `quill` | 2.0.3 | 富文本编辑器 |

---

## 八、Supabase 数据库表结构

| 表名 | 用途 |
|------|------|
| `downloadable_pdfs_info` | 可下载PDF文件信息 |
| `email_subscribers` | 邮件订阅者 |
| `pdf_download_logs` | PDF下载记录 |
| `contact_messages` | 联系表单消息 |

### Storage Buckets

| Bucket | 用途 |
|--------|------|
| `product_pdfs` | 产品PDF文件存储 |
| `blog_images` | 博客图片存储 |
| `blog_markdowns` | 博客Markdown文件存储 |

---

## 九、环境变量配置

创建 `.env` 文件，配置以下变量：

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 十、部署说明

### 10.1 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:4000
```

### 10.2 生产构建

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### 10.3 Vercel 部署

项目已配置 `vercel.json`，支持一键部署到 Vercel。

---

## 十一、功能特性

### 已实现功能

- [x] 响应式设计 (移动端/平板/桌面)
- [x] 视差滚动效果
- [x] 页面切换过渡动画
- [x] 博客系统 (Markdown支持)
- [x] 文件下载中心 (邮箱收集)
- [x] 联系表单
- [x] 管理后台 (登录/文件上传/博客发布)
- [x] Google Analytics 集成
- [x] 隐私政策页面 (PIPEDA合规)

### 待完成功能

- [ ] 邮件发送功能 (SendEmail组件)
- [ ] 博客评论系统
- [ ] 多语言支持

---

## 十二、资源文件统计

| 类型 | 数量 |
|------|------|
| React 组件 (.jsx) | 49个 |
| JavaScript 文件 (.js) | 7个 |
| 图片资源 | 200+ 个 |
| 视频资源 | 1个 |

---

## 十三、联系方式

**Breeze Fashion**
地址: 4800 N Island Hwy, Nanaimo, BC V9T 1W6, Canada
邮箱: info@breezefashion.ca

---

*本文档由开发团队生成，如有疑问请联系技术支持。*
