# Tech Context: Austin Media Co. Website

## Technology Stack

### Core Framework
- **Astro 5.10.1**: Modern static site generator with island architecture
- **React 19.1.0**: Interactive components with minimal JavaScript footprint
- **TypeScript**: Full type safety across components and data structures

### Development Setup

#### Prerequisites
- **Node.js**: Version 18+ required
- **npm**: Package manager (included with Node.js)
- **Git**: Version control (for future updates)

#### Installation & Development
```bash
cd astro-site
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

#### Development Server
- **Local URL**: http://localhost:4321 (or http://localhost:4322 if port occupied)
- **Hot Reload**: Automatic browser refresh on file changes
- **Fast Refresh**: React components update without page reload

## Dependencies

### Production Dependencies
```json
{
  "@astrojs/react": "^4.3.0",    // React integration for Astro
  "@types/react": "^19.1.8",     // React TypeScript types
  "@types/react-dom": "^19.1.6", // React DOM TypeScript types
  "astro": "^5.10.1",            // Core Astro framework
  "react": "^19.1.0",            // React library
  "react-dom": "^19.1.0"         // React DOM for browser rendering
}
```

### No Build Dependencies
- **Zero Configuration**: Astro handles bundling, optimization, and deployment prep
- **Built-in TypeScript**: No additional setup required
- **Automatic Optimization**: Image optimization, CSS bundling, JavaScript minification included

## File Structure & Configuration

### Configuration Files
- **`astro.config.mjs`**: Astro framework configuration
- **`tsconfig.json`**: TypeScript compiler settings
- **`package.json`**: Project metadata and scripts

### Source Organization
```
src/
├── components/     # React components (.tsx files)
├── config/        # Configuration and constants (.ts files)
├── data/          # Static data files (.ts files)
├── layouts/       # Astro layout templates (.astro files)
├── pages/         # File-based routes (.astro files)
├── lib/           # Utility functions (unused but available)
└── styles/        # Global CSS files
```

## Build & Deployment

### Build Process
1. **Static Generation**: All pages pre-rendered at build time
2. **Asset Optimization**: Images, CSS, and JavaScript automatically optimized
3. **Output**: Static files ready for any web server or CDN

### Build Output
```
dist/                # Generated build output
├── index.html      # Homepage
├── portfolio/      # Portfolio page directory
├── services/       # Services page directory
├── about/          # About page directory
├── contact/        # Contact page directory
├── _astro/         # Optimized assets (CSS, JS, images)
└── favicon.svg     # Site favicon
```

### Deployment Options
- **Static Hosting**: Vercel, Netlify, Cloudflare Pages
- **Traditional Hosting**: Any web server supporting static files
- **CDN**: Can be deployed to any CDN for global distribution

## Development Workflow

### Local Development
1. **Start Server**: `npm run dev` - launches development server
2. **Edit Files**: Changes automatically reflect in browser
3. **TypeScript**: Errors shown in terminal and editor
4. **Hot Reload**: Page updates without losing state

### Production Testing
```bash
npm run build       # Build production version
npm run preview     # Test production build locally
```

### File Watching
- **Astro Files**: `.astro` files trigger full page reload
- **React Components**: `.tsx` files use Fast Refresh
- **CSS Files**: Style changes reflect immediately
- **Data Files**: Changes trigger page regeneration

## Performance Characteristics

### Build Performance
- **Fast Builds**: Astro optimizes for quick build times
- **Incremental**: Only changed files rebuilt during development
- **TypeScript**: Compiled during build process

### Runtime Performance
- **Minimal JavaScript**: Only interactive components ship JS to browser
- **CSS Optimization**: Automatic minification and bundling
- **Image Optimization**: Responsive images with modern formats
- **Caching**: Built-in cache headers for static assets

## Browser Support

### Target Browsers
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Core functionality works without JavaScript

### Polyfills
- **Not Required**: Astro outputs modern code with automatic fallbacks
- **CSS Variables**: Supported in all target browsers
- **ES6+ Features**: Transpiled automatically during build

## Maintenance & Updates

### Dependency Updates
```bash
npm update          # Update to latest compatible versions
npm audit           # Check for security vulnerabilities
```

### Framework Updates
- **Astro**: Regular updates with new features and optimizations
- **React**: Stable release cycle, easy to upgrade
- **TypeScript**: Automatic type checking and IntelliSense

### Monitoring
- **Build Success**: Check build process completes without errors
- **TypeScript**: Monitor for type errors during development
- **Performance**: Use Lighthouse for performance auditing