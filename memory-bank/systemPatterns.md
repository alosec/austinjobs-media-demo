# System Patterns: Austin Media Co. Website

## Architecture Overview

### Astro Static Site Architecture
- **Framework**: Astro 5.10.1 with React islands for interactivity
- **Build Pattern**: Static Site Generation (SSG) with selective hydration
- **Component Strategy**: HTML-first with React components for interactive elements only

### File Structure
```
astro-site/
├── src/
│   ├── components/          # React components for interactive elements
│   │   ├── Navigation.tsx   # Main navigation with mobile toggle
│   │   ├── MobileSidebar.tsx # Mobile navigation drawer
│   │   ├── ContactForm.tsx  # Contact form with validation
│   │   └── PortfolioFilter.tsx # Project filtering interface
│   ├── config/             # Configuration files
│   │   └── navigation.ts   # Navigation menu structure
│   ├── data/              # Static data files
│   │   ├── projects.ts    # Portfolio projects data
│   │   └── team.ts        # Team member information
│   ├── layouts/           # Page layout templates
│   │   └── Layout.astro   # Main site layout with SEO
│   ├── pages/            # File-based routing
│   │   ├── index.astro   # Homepage
│   │   ├── portfolio.astro # Portfolio gallery
│   │   ├── services.astro # Services overview
│   │   ├── about.astro   # About page
│   │   ├── contact.astro # Contact page
│   │   └── api/         # API endpoints
│   └── styles/          # Global styles
       └── global.css    # Site-wide CSS variables and base styles
```

## Component Patterns

### Layout Pattern
- **Base Layout** (`Layout.astro`): Provides consistent HTML structure, SEO meta tags, navigation
- **Props Interface**: Typed props for title and description
- **Global Styles**: Imported at layout level for consistency

### React Island Pattern
- **Navigation Components**: Interactive elements using React with `client:load`
- **Form Components**: Contact form with validation and submission handling
- **Filter Components**: Portfolio filtering with state management
- **Hydration Strategy**: Only interactive components are hydrated on client

### Data Management Pattern
- **Static Data Files**: TypeScript interfaces and exported arrays
- **Type Safety**: Strong typing for projects, team members, navigation
- **Content Structure**: Centralized data management for easy updates

## Styling Architecture

### CSS Variable System
```css
:root {
  --primary-color: #ff6b35;
  --text-color: #ffffff;
  --background-color: #1a1a1a;
  --accent-color: #f8f8f8;
}
```

### Component-Level Styling
- **Scoped Styles**: Each Astro component can have `<style>` blocks
- **Global Styles**: Shared via `global.css` import in layout
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## Routing Pattern

### File-Based Routing
- **Pages Directory**: Each `.astro` file becomes a route
- **Index Routes**: `index.astro` serves as default page
- **API Routes**: `/api/` directory for server-side endpoints

### Navigation Structure
```typescript
// src/config/navigation.ts
export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];
```

## Data Flow Patterns

### Static Data Integration
1. **Data Definition**: TypeScript interfaces in `/data/` files
2. **Component Import**: Import data directly in Astro components
3. **Template Rendering**: Use in component templates with type safety
4. **Build-Time Rendering**: All data processed at build time

### Portfolio System
```typescript
export interface Project {
  id: string;
  title: string;
  type: 'commercial' | 'music-video' | 'documentary' | 'short-film';
  client: string;
  year: number;
  thumbnail: string;
  video_url?: string;
  description: string;
  tags: string[];
}
```

## Performance Patterns

### Build Optimization
- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Astro's built-in image optimization
- **CSS Optimization**: Automatic CSS bundling and minification
- **JavaScript Minimization**: Only necessary JS shipped to client

### Loading Strategy
- **Critical CSS**: Inlined in `<head>` for above-fold content
- **Font Loading**: Preconnect to Google Fonts for performance
- **Progressive Enhancement**: Core functionality works without JavaScript

## SEO and Meta Patterns

### Meta Tag Management
- **Dynamic Titles**: Page-specific titles via props
- **Descriptions**: Default fallback with page-specific overrides
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Ready for JSON-LD implementation

### URL Structure
```
/                    # Homepage
/portfolio          # Project gallery
/services           # Service offerings
/about             # Company information
/contact           # Contact form
```

## Development Patterns

### TypeScript Integration
- **Strict Typing**: Enabled for all `.ts` and `.tsx` files
- **Interface Definitions**: Shared types for data structures
- **Component Props**: Typed props for all React components

### Hot Module Replacement
- **Development Server**: `npm run dev` provides instant updates
- **Component Updates**: React components update without page refresh
- **Style Updates**: CSS changes reflect immediately

This architecture provides a solid foundation for a production-ready website while maintaining simplicity and performance.