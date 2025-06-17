# Genesis Stone Website - Project Structure

## 📁 Core File Organization

### Essential Production Files

```
src/
├── components/               # Core UI Components
│   ├── ui/                  # Shadcn/ui component library (51 files)
│   ├── ContactForm.tsx      # Contact form with validation
│   ├── GoogleReviews.tsx    # Google Reviews integration
│   ├── Hero.tsx             # Homepage hero section
│   ├── Layout.tsx           # Main layout wrapper
│   ├── ProductGrid.tsx      # Product carousel component
│   └── WhatsAppButton.tsx   # WhatsApp contact widget
│
├── hooks/                   # Custom React Hooks
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
│
├���─ lib/                     # Core Utilities
│   ├── utils.ts             # Tailwind/shadcn utilities
│   └── utils.spec.ts        # Utils test file
│
├── pages/                   # Main Page Components
│   ├── Index.tsx            # Homepage
│   ├── Products.tsx         # Products/Collections page
│   ├── Retail.tsx           # For homeowners
│   ├── Wholesale.tsx        # For contractors
│   ├── About.tsx            # Company information
│   ├── Contact.tsx          # Contact page with map
│   └── NotFound.tsx         # 404 error page
│
├── utils/                   # Business Logic Utilities
│   └── imageUtils.ts        # Image management system
│
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
├── App.css                  # Global styles
├── index.css               # Tailwind imports
└── vite-env.d.ts           # TypeScript environment types
```

## 🎯 Key Components Explained

### Layout.tsx

- Main navigation header with logo
- Responsive design wrapper
- Footer with company information
- Consistent across all pages

### Hero.tsx

- Homepage hero with company messaging
- Trust indicators (years experience, etc.)
- Call-to-action buttons
- Background image with overlay

### ProductGrid.tsx

- Horizontal scrolling product carousel
- 8 product categories
- Navigation arrows
- Responsive grid layout

### GoogleReviews.tsx

- Integration with Google Places API
- Review display with ratings
- Customer testimonials
- Star rating system

### ContactForm.tsx

- Contact form with validation
- Email integration
- Form field validation
- Success/error handling

## 🖼 Image Management (imageUtils.ts)

Centralized image management system with:

- **Reliable URLs**: Primary and fallback URLs for each image
- **Categories**: Organized by product type and usage
- **Health Checking**: Automatic image availability testing
- **Error Handling**: Graceful fallbacks for broken images
- **Builder.io Integration**: Optimized CDN delivery

### Image Categories:

- Porcelain tiles
- Natural stone
- Laminates/LVP
- Mosaics
- Wall panels
- Metal trims/accessories
- Showroom/business images
- Project galleries

## 🎨 Design System Components

### Button Variants (ui/custom-buttons.tsx):

- `PrimaryButton` - Main action buttons
- `GoldButton` - Premium accent actions
- `OutlineButton` - Secondary actions
- `WhiteOutlineButton` - For dark backgrounds

### Card Components:

- Product showcase cards
- Testimonial cards
- Feature highlight cards
- Project portfolio cards

## 📱 Pages Structure

### Index.tsx (Homepage)

1. Hero section with company overview
2. Product grid carousel
3. Why choose us features
4. Portfolio showcase
5. Google Reviews
6. FAQ section
7. Final CTA

### Products.tsx (Collections)

Clean grid layout with:

- 8 product categories
- Professional imagery
- Detailed descriptions
- Dealer program CTA

### Retail.tsx (Homeowners)

- Home transformation focus
- Interior design consultation
- Material selection guidance
- Project showcase
- Customer testimonials

### Wholesale.tsx (Contractors)

- Volume pricing information
- Trade account benefits
- Project management tools
- Contractor testimonials
- Account management

### Contact.tsx

- Multiple contact methods
- Interactive Google Maps
- Showroom information
- Contact form

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## 🚀 Development Workflow

1. **Local Development**: `npm run dev`
2. **Production Build**: `npm run build`
3. **Type Checking**: `npm run typecheck`
4. **Linting**: Standard ESLint configuration

## 📋 Code Standards

- **TypeScript**: Strict typing throughout
- **Component Structure**: Functional components with hooks
- **Styling**: Tailwind CSS with consistent design tokens
- **Naming**: Clear, descriptive component and file names
- **Organization**: Logical file grouping and imports

## 🔄 State Management

- **React Query**: Server state management
- **React Hooks**: Local state management
- **Context**: Minimal global state (toast, tooltip providers)

This structure ensures the codebase is clean, maintainable, and ready for AI collaboration.
