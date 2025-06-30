# Memory Bank Documentation

## What This Is

This memory bank contains comprehensive documentation for your Austin Media Co. website, specifically designed to work with AI coding assistants like Claude Code, GitHub Copilot, or similar tools.

**Purpose**: When you or your team use AI assistants to work on this website, the AI can read these documentation files to understand your project completely - as if it had been working on the project from day one.

## How It Works

AI assistants have no memory between sessions. Every time you start a new coding session, the AI starts fresh. This memory bank solves that problem by providing:

- **Complete Project Context**: What your business does and why the website exists
- **Technical Documentation**: How the code is organized and how to work with it
- **Current Status**: What's been built and what still needs work
- **Development Setup**: How to run and deploy the website

## File Structure

```
memory-bank/
├── README.md           # This file - explains the memory bank system
├── projectbrief.md     # Project scope and business overview
├── productContext.md   # Business goals and user experience strategy
├── systemPatterns.md   # Code architecture and component patterns
├── techContext.md      # Development setup and deployment guide
├── activeContext.md    # Current work status and recent changes
└── progress.md         # What's complete and what's left to build
```

## Reading Order for AI Assistants

When using an AI coding assistant, ask it to read these files in this specific order:

1. **projectbrief.md** - Start here for project foundation
2. **productContext.md** - Understand business goals and user needs
3. **systemPatterns.md** - Learn the code architecture
4. **techContext.md** - Understand the technology and setup
5. **activeContext.md** - Get current status and recent work
6. **progress.md** - See what's done and what's left

## Using With AI Assistants

### Getting Started
When you start a new coding session with an AI assistant:

```
Please read all the memory bank files in the memory-bank/ directory 
to understand this Austin Media Co. website project. Start with 
projectbrief.md and read through progress.md.
```

### For Specific Tasks
When working on specific features:

```
I want to update the portfolio section. Please first read the memory 
bank files to understand the project, then help me add a new project 
to the portfolio.
```

### For Updates
When adding new features or making changes:

```
Please read the memory bank to understand the project, then update 
the activeContext.md and progress.md files to reflect the changes 
we're making.
```

## Benefits for Your Team

### Consistency
- Every AI session starts with complete project understanding
- New team members get full context immediately
- Code changes follow established patterns and conventions

### Efficiency
- No need to explain the project repeatedly
- AI makes better suggestions because it understands your goals
- Faster development with fewer mistakes

### Documentation
- Always up-to-date project documentation
- Clear record of technical decisions and patterns
- Easy onboarding for new developers (human or AI)

## Maintaining the Memory Bank

### When to Update
Update the memory bank files when:
- Adding new features or pages
- Changing the technology stack
- Modifying business requirements
- Completing major milestones

### Which Files to Update
- **activeContext.md**: Update after every significant work session
- **progress.md**: Update when completing features or tasks
- **systemPatterns.md**: Update when adding new code patterns
- **techContext.md**: Update when changing dependencies or setup
- **productContext.md**: Update only if business goals change
- **projectbrief.md**: Rarely changes unless project scope shifts

## Your Website Details

### Austin Media Co.
Your website showcases a video production company specializing in authentic Austin storytelling. The site includes:

- **Portfolio**: Filterable gallery of video projects
- **Services**: Commercial production, music videos, documentaries, event coverage
- **About**: Company story and team profiles
- **Contact**: Professional contact form

### Technology
- **Astro + React**: Modern, fast-loading website
- **TypeScript**: Type-safe code for reliability
- **Responsive Design**: Works perfectly on all devices
- **Static Hosting**: Can be deployed anywhere

### Development
```bash
cd astro-site
npm install
npm run dev    # Start development server at http://localhost:4321
npm run build  # Build for production
```

## Support

This memory bank system ensures that any AI coding assistant can help you maintain and improve your website effectively. The documentation is designed to be comprehensive yet focused, giving AI assistants exactly what they need to work on your project successfully.

For best results, always ask your AI assistant to read the memory bank files before starting any coding work on your website.