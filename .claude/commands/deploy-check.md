# Deploy Check and Production Readiness

Verify project is ready for production deployment to Cloudflare Pages.

## Usage
```
/deploy-check
```

## What This Command Does

1. **Code Quality**: Run linting, type checking, and build verification
2. **Security Audit**: Check for security vulnerabilities and best practices
3. **Performance Test**: Verify Lighthouse scores and Core Web Vitals
4. **Environment Check**: Validate all environment variables are set
5. **Deployment Config**: Verify Cloudflare Pages configuration
6. **Final Build**: Create production build and prepare for deployment

## Pre-Deployment Checklist

### Code Quality ✅
- [ ] TypeScript compilation passes without errors
- [ ] ESLint passes with no violations
- [ ] Prettier formatting is consistent
- [ ] All imports resolve correctly
- [ ] No console.log statements in production code

### Security ✅
- [ ] Environment variables properly configured
- [ ] No secrets committed to repository
- [ ] Supabase RLS policies implemented
- [ ] Input validation on all forms
- [ ] CORS properly configured for API routes

### Performance ✅
- [ ] Lighthouse Performance Score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Images optimized and lazy loaded

### Functionality ✅
- [ ] Authentication flow works end-to-end
- [ ] All core business features functional
- [ ] Mobile responsiveness verified
- [ ] Error handling implemented
- [ ] Loading states provide user feedback

### Database ✅
- [ ] All required tables created
- [ ] RLS policies tested and working
- [ ] Database migrations applied
- [ ] Test data cleaned up
- [ ] Connection limits appropriate for production

## Automated Checks

### Build Verification
```bash
# Run complete build process
npm run build

# Check build output
ls -la dist/
du -sh dist/

# Verify all assets compiled correctly
npm run build:verify
```

### Type Safety
```bash
# TypeScript compilation
npx tsc --noEmit

# Check for any TypeScript errors
npm run type-check
```

### Linting and Formatting
```bash
# ESLint check
npm run lint

# Prettier check
npm run format:check

# Fix any auto-fixable issues
npm run lint:fix
npm run format:write
```

### Security Scan
```bash
# Check for known vulnerabilities
npm audit

# Check for high-severity issues
npm audit --audit-level high

# Fix automatically fixable issues
npm audit fix
```

## Environment Configuration

### Required Environment Variables
```bash
# Supabase Configuration
SUPABASE_URL=https://project-id.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Optional: Analytics and Monitoring
ANALYTICS_ID=G-XXXXXXXXXX
SENTRY_DSN=https://...

# Business-Specific Configuration
BUSINESS_NAME="Client Business Name"
BUSINESS_DOMAIN="clientbusiness.com"
```

### Cloudflare Pages Settings
```bash
# Build Configuration
Build command: npm run build
Build output directory: dist
Root directory: astro-site

# Environment Variables (set in CF dashboard)
NODE_VERSION=18
SUPABASE_URL=[from Supabase dashboard]
SUPABASE_ANON_KEY=[from Supabase dashboard]
```

## Performance Optimization

### Bundle Analysis
```bash
# Analyze bundle size
npm run build:analyze

# Check for large dependencies
npx webpack-bundle-analyzer dist/

# Verify code splitting works correctly
```

### Image Optimization
- All images under 500KB
- WebP format used where supported
- Lazy loading implemented for below-fold images
- Responsive image sizes configured

### Caching Strategy
- Static assets cached for 1 year
- HTML cached for 1 hour
- API responses cached appropriately
- Service worker configured for offline functionality

## Deployment Process

### Git Repository Setup
```bash
# Ensure all changes committed
git status
git add .
git commit -m "Production ready: all checks passed"

# Push to main branch
git push origin main
```

### Cloudflare Pages Deployment
1. **Connect Repository**: Link GitHub/GitLab repo to CF Pages
2. **Configure Build**: Set build command and output directory
3. **Set Environment Variables**: Add all required env vars
4. **Deploy**: Trigger initial deployment
5. **Custom Domain**: Configure custom domain if provided

### Post-Deployment Verification
```bash
# Test live site functionality
curl -I https://project-name.pages.dev

# Verify authentication works
# Test all core business features
# Check mobile responsiveness
# Validate performance scores
```

## Monitoring and Alerts

### Setup Monitoring
- **Uptime Monitoring**: Configure alerts for downtime
- **Performance Monitoring**: Track Core Web Vitals
- **Error Tracking**: Set up Sentry or similar service
- **Analytics**: Configure Google Analytics or alternative

### Health Checks
```javascript
// pages/api/health.ts
export const GET = () => {
  return new Response(JSON.stringify({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
```

## Rollback Plan

### Deployment Rollback
- Cloudflare Pages allows instant rollback to previous deployment
- Keep previous git commit available for quick revert
- Database migrations should be backwards compatible

### Emergency Contacts
- Client contact information for deployment issues
- Cloudflare support for infrastructure problems
- Supabase support for database issues

## Success Criteria

- ✅ All automated checks pass
- ✅ Production build completes successfully
- ✅ Live site loads and functions correctly
- ✅ Performance scores meet targets
- ✅ Authentication and core features work
- ✅ Mobile responsiveness verified
- ✅ Custom domain configured (if applicable)

## Post-Deployment Tasks

### Immediate (Within 24 hours)
- [ ] Monitor error rates and performance
- [ ] Test all critical user flows
- [ ] Verify analytics are working
- [ ] Document any issues found

### First Week
- [ ] Monitor user feedback and usage patterns
- [ ] Check performance metrics trends
- [ ] Address any minor issues discovered
- [ ] Plan next iteration based on user feedback

### Client Handoff
- [ ] Provide access credentials and documentation
- [ ] Schedule training session for client staff
- [ ] Set up ongoing support and maintenance plan
- [ ] Transfer relevant accounts to client control