# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NorthfieldFashionFE is a React-based frontend application for a fashion e-commerce website. The project uses Vite as the build tool, React Router for navigation, TailwindCSS for styling, and Supabase for backend services.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Building for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues. The project uses ESLint v9 with flat config format.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing before deployment.

## Architecture

### Application Entry Point
- **main.jsx**: Renders the app with React 19 StrictMode and BrowserRouter
- **App.jsx**: Main routing container that includes Google Analytics tracking (via `lib/analytics.js`). The app tracks page views on route changes and scrolls to top on navigation.

### Routing Structure
The application uses React Router v7 with the following main routes:
- `/` - Home page
- `/about` - About page
- `/products` - Products listing
- `/services` - Services page
- `/blog` - Blog listing
- `/blog/:id` - Individual blog posts
- `/contact` - Contact form
- `/admin/*` - Admin dashboard and management pages (Login, Dashboard, BlogEditor, ProductEditor, ReviewMessages)

### Component Organization

**Core Layout Components** (`src/components/`):
- `Navbar.jsx` - Fixed navigation bar with mobile menu support and route tracking
- `Footer.jsx` - Site footer
- `Hero.jsx` - Hero section component

**Feature Components** (organized by domain):
- `components/about/` - About page sections (WhoWeAre, ServiceWeOffer)
- `components/basic/` - Reusable UI components (PrimaryButton, SecondaryButton, ThirdButton, Arrow45deg, SectionBadge)
- `components/blog/` - Blog-related components
- `components/contact/` - Contact form (ContactForm.jsx)
- `components/home/` - Home page sections
- `components/products/` - Product display components

**Pages** (`src/pages/`):
- Currently minimal stub implementations (Home, About)
- Admin pages referenced in App.jsx but not yet created

### Custom Hooks

**useAnimateBottomToUp.js**:
- Provides Intersection Observer-based scroll animations
- `useSectionAnimation(delay, threshold)` - Returns `[ref, isVisible]` for element animation
- `getSectionAnimationClasses(isVisible)` - Returns Tailwind classes for bottom-to-up animation with 1800ms duration

**useAnimateBigToSmall.js**:
- Custom animation hook for scaling effects

### Third-Party Integrations

**Supabase** (`src/lib/supabase.js`):
- Client initialized with environment variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Used for backend data persistence

**Google Analytics** (`src/lib/analytics.js`):
- Integration via react-ga4
- Automatic page view tracking on route changes
- Button click tracking available via `trackButtonClick()`

**Email** (@emailjs/browser):
- Used for contact form submissions

**Rich Text Editor** (Quill):
- Integrated for blog post editing in admin

### Styling

- **TailwindCSS v3.4**: Primary styling framework
- **Custom animations**: Defined using Tailwind transition utilities
- **Responsive design**: Mobile-first with breakpoints (sm, md, lg)

## Environment Setup

Required environment variables (create `.env` file):
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment

The project is configured for Vercel deployment with `vercel.json` that rewrites all routes to `/index.html` for client-side routing support.

## Code Quality

**ESLint Configuration** (eslint.config.js):
- Uses ESLint v9 flat config format
- React hooks plugin with recommended rules
- React refresh plugin for Vite
- Custom rule: `no-unused-vars` allows uppercase/underscore variable patterns
- Ignores `dist/` directory

**React Version**: 19.1.0 (latest)
- Uses new StrictMode and createRoot APIs
