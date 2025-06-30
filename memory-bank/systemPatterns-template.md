# System Patterns: {BUSINESS_NAME}

## Architecture Overview

### Component-Level Styling Approach
All styles live with their respective components following the pedicalendar_v2 pattern:
```
Component/
├── Component.tsx    # React component logic
├── Component.css    # Component-specific styles  
├── types.ts         # TypeScript interfaces
└── index.ts         # Clean exports
```

**Benefits**:
- Colocation of styles with components
- Easy maintenance and debugging
- Prevents CSS conflicts and cascading issues
- Enables component-level theming

### Database Patterns

#### Row-Level Security (RLS)
All tables implement business-scoped data isolation:
```sql
-- Example RLS policy
CREATE POLICY "business_isolation" ON events
  FOR ALL USING (business_id = auth.jwt() ->> 'business_id');
```

#### Multi-Tenant Architecture
- Each business operates independently
- Data isolation through `business_id` foreign keys
- Configurable business settings and preferences

### API Route Patterns

#### RESTful Design
```
pages/api/
├── auth/              # Authentication endpoints
├── {resource}/        # Resource CRUD operations
│   ├── index.ts      # GET /api/{resource} (list)
│   ├── [id].ts       # GET/PUT/DELETE /api/{resource}/[id]
│   └── create.ts     # POST /api/{resource}/create
```

#### Server-Side Security
- All database queries happen on server
- User authentication verified per request
- Input validation and sanitization
- Consistent error handling

### Component Architecture

#### Astro + React Integration
- **Astro Components (.astro)**: Static layout and structure
- **React Components (.tsx)**: Interactive features with `client:load`
- **Progressive Enhancement**: Start static, add interactivity selectively

#### State Management
- Local component state for UI interactions
- Server state through API calls
- No global state management (Redux/Zustand)
- Props drilling for shared data

### Authentication Flow

#### Supabase Auth Integration
1. User registration/login through Supabase
2. JWT tokens stored in HTTP-only cookies
3. Server-side session validation
4. Automatic business association

#### Role-Based Access
- **Admin**: Full business management
- **Manager**: Feature management and reporting  
- **Staff**: Basic feature access and usage

## Development Patterns

### File Organization
```
src/
├── components/        # Reusable UI components
├── layouts/          # Page layout templates
├── pages/            # Route handlers and pages
│   ├── api/         # Server-side API endpoints
│   └── dashboard/   # Protected dashboard pages
├── lib/             # Utility functions and configs
├── styles/          # Global styles only
└── types/           # Shared TypeScript definitions
```

### Styling Conventions

#### CSS Variables for Theming
```css
:root {
  --primary-color: #3B82F6;
  --secondary-color: #64748B;
  --spacing-unit: 1rem;
  --border-radius: 0.5rem;
}
```

#### Component-Specific Variables
```css
.component {
  --component-bg: var(--primary-color);
  --component-text: white;
  --component-spacing: var(--spacing-unit);
}
```

### Performance Optimization

#### Static Generation
- Astro builds to static HTML by default
- JavaScript hydration only for interactive components
- Optimal Core Web Vitals scores

#### Image Optimization
- Use Astro's built-in image optimization
- Lazy loading for below-the-fold content
- WebP format with fallbacks

### Testing Strategy

#### Component Testing
- Jest + React Testing Library for React components
- Astro test utils for .astro components
- Focus on user interactions and business logic

#### API Testing
- Integration tests for API endpoints
- Database transaction testing
- Authentication flow validation

## Deployment Patterns

### Cloudflare Pages Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [react()]
});
```

### Environment Variables
- `SUPABASE_URL`: Database connection
- `SUPABASE_ANON_KEY`: Public API key
- `SUPABASE_SERVICE_ROLE_KEY`: Server-side operations (server only)

### Build Process
1. `npm run build` - Generate static site
2. Automatic deployment on git push to main
3. Environment variables configured in Cloudflare dashboard
4. Custom domain configuration post-deployment

## Business-Specific Patterns

### {BUSINESS_TYPE} Requirements
- {PATTERN_1}: {PATTERN_1_DESCRIPTION}
- {PATTERN_2}: {PATTERN_2_DESCRIPTION}
- {PATTERN_3}: {PATTERN_3_DESCRIPTION}

### Data Models
Key entities specific to this business:
- {ENTITY_1}: {ENTITY_1_PURPOSE}
- {ENTITY_2}: {ENTITY_2_PURPOSE}
- {ENTITY_3}: {ENTITY_3_PURPOSE}

### Integration Points
- {INTEGRATION_1}: {INTEGRATION_1_PURPOSE}
- {INTEGRATION_2}: {INTEGRATION_2_PURPOSE}

## Best Practices

### Code Quality
- TypeScript throughout for type safety
- ESLint and Prettier for code formatting
- Comprehensive error handling
- Performance monitoring

### Security
- Input validation on all user data
- SQL injection prevention through Supabase
- XSS protection via proper escaping
- CORS configuration for API endpoints

### Maintainability
- Clear component boundaries
- Consistent naming conventions
- Documentation for complex business logic
- Regular dependency updates