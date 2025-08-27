# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 3007)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Project Architecture

This is a Next.js 15 application using the App Router pattern with TypeScript and Tailwind CSS. The project is a business website for Technology Alliance Solutions (TAS), a technology consulting company.

### Core Technologies
- **Framework**: Next.js 15.2.4 with App Router
- **Styling**: Tailwind CSS with custom dark mode implementation
- **Animations**: Framer Motion
- **Icons**: React Icons
- **3D Models**: Spline (via @splinetool/react-spline)
- **Forms**: @headlessui/react and @tailwindcss/forms

### Project Structure

#### `/src/app/` - App Router Pages
All pages follow Next.js 13+ app directory structure with `page.tsx` files. Key pages include:
- Business services (`/services/*`)
- Blog system (`/blog/*`)
- Career listings (`/careers/*`)
- Case studies (`/case-studies/*`)
- Technology comparisons (`/services/technologies/*`)

#### `/src/components/` - Reusable Components
- **`layout/`**: Core layout components (Navbar, Footer, PageLayout)
- **`ui/`**: Reusable UI components with animations (AnimatedButton, AnimatedText, etc.)
- **Multiple dark mode toggles**: Various implementations of dark mode switching

#### `/src/data/` - Static Data
- **`seoMetadata.ts`**: Centralized SEO configuration and metadata generation functions
- **`technologiesData.ts`**: Technology platform data for comparison pages
- **`jobListings.ts`**: Career/job listing data

**Note**: Currently uses static content management through TypeScript data files. A CMS integration is planned for future implementation to enable dynamic content management.

### Key Features

#### SEO & Metadata System
The site uses a centralized SEO system in `src/data/seoMetadata.ts`:
- `generateMetadata()`: Creates consistent page metadata
- `generateStructuredData()`: Generates Schema.org JSON-LD
- `generateServiceSchema()` and `generateArticleSchema()`: Specialized schema generators

#### Dark Mode Implementation
Multiple dark mode implementations exist (likely due to development iteration):
- Uses Tailwind's `dark:` classes with `class` strategy
- Custom theme colors defined in `tailwind.config.ts`
- Dynamic logo switching based on theme

#### Layout System
- Fixed navbar with dropdown menus and mobile responsiveness
- Footer with company information
- Consistent page layout wrapper in `PageLayout.tsx`

### Important Configuration Files

#### `next.config.js`
- Image domains configured for localhost and Unsplash
- Standard Next.js configuration

#### `tailwind.config.ts`
- Custom color palette with `primary` and `dark` color schemes
- Custom animations (pulse, float)
- Form plugin integration
- Custom font families (Roobert, Avenir)

### Content Management
Currently uses static content with TypeScript data files. **CMS integration is planned** to replace static content management with dynamic content capabilities for:
- Blog posts and articles
- Service pages
- Case studies
- Job listings
- Technology data

When implementing CMS, consider maintaining the existing SEO metadata system and ensuring compatibility with the current component structure.

### Business Context
Technology Alliance Solutions provides:
- CRM implementation and integration
- Marketing automation
- Technology consulting
- System optimization
- Custom business solutions

The website emphasizes enterprise-level services and technology partnerships with major platforms like Salesforce, HubSpot, Microsoft Dynamics, etc.