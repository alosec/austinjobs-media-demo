# Austin Media Co. Website

A professional website for Austin Media Co., a video production company specializing in authentic Austin storytelling. This project demonstrates modern web development using Astro + React with comprehensive AI assistant documentation.

## Quick Start

```bash
cd astro-site
npm install
npm run dev
```

Visit http://localhost:4321 to see your website.

## What You Get

### Professional Website
- **Homepage**: Compelling hero section with featured work
- **Portfolio**: Filterable gallery of video projects (6 sample projects included)
- **Services**: Clear presentation of video production offerings
- **About**: Company story and team profiles
- **Contact**: Working contact form with API endpoint

### Modern Technology
- **Astro 5.10.1**: Fast static site generation
- **React 19.1.0**: Interactive components where needed
- **TypeScript**: Type-safe code for reliability
- **Responsive Design**: Perfect on all devices
- **SEO Optimized**: Meta tags and social media ready

### AI Assistant Ready
This project includes a complete **Memory Bank** documentation system in the `/memory-bank/` folder. This allows AI coding assistants (like Claude Code, GitHub Copilot, etc.) to understand your project immediately and help with future development.

## Project Structure

```
├── astro-site/          # Your website files
│   ├── src/
│   │   ├── components/  # Interactive React components
│   │   ├── pages/       # Website pages (Home, Portfolio, etc.)
│   │   ├── data/        # Content (projects, team info)
│   │   └── styles/      # CSS styling
│   └── package.json
├── memory-bank/         # AI assistant documentation
│   ├── README.md        # How to use with AI assistants
│   ├── projectbrief.md  # Project overview
│   ├── systemPatterns.md # Code architecture
│   └── [other docs...]
└── README.md           # This file
```

## Development

### Local Development
```bash
cd astro-site
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

### Making Changes
- **Add Projects**: Edit `astro-site/src/data/projects.ts`
- **Update Team**: Edit `astro-site/src/data/team.ts`
- **Modify Pages**: Edit files in `astro-site/src/pages/`
- **Change Styling**: Edit `astro-site/src/styles/global.css`

## Deployment

Your website builds to static files, so it can be deployed anywhere:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder after running `npm run build`
- **Cloudflare Pages**: Connect your repo for global CDN hosting
- **Any Web Host**: Upload the contents of `dist/` folder

## Working with AI Assistants

### First Time Setup
When starting a new AI coding session, say:

> "Please read all the memory bank files in the memory-bank/ directory to understand this Austin Media Co. website project. Start with projectbrief.md and read through progress.md."

### For Ongoing Work
The AI will then fully understand your project and can help with:
- Adding new portfolio projects
- Updating content and styling
- Adding new features
- Fixing bugs
- Optimizing performance

### Keeping Documentation Updated
After making significant changes, ask your AI assistant to update the memory bank files to reflect the new state of the project.

## Sample Content

The website includes realistic sample content for a video production company:
- **6 Portfolio Projects**: Austin City Limits, Torchy's Tacos, SXSW, etc.
- **Service Offerings**: Commercial production, music videos, documentaries
- **Austin Focus**: Local businesses and cultural references
- **Professional Tone**: Balances creativity with business credibility

## Support

- **Memory Bank**: Full documentation for AI assistants in `/memory-bank/README.md`
- **Technical Details**: Architecture and patterns in `/memory-bank/systemPatterns.md`
- **Development Setup**: Complete guide in `/memory-bank/techContext.md`

This website is production-ready and designed for easy maintenance with or without AI assistance.