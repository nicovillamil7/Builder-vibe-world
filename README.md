# Genesis Stone & More - Website

A modern, responsive website for Genesis Stone & More, a premium flooring and materials supplier serving South Florida contractors, designers, and homeowners.

## 🚀 Project Overview

Genesis Stone & More specializes in high-quality flooring materials including:

- Porcelain tiles
- Natural stone
- Laminates and LVP
- Mosaics
- Wall panels
- Metal trims and installation materials

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── ContactForm.tsx # Contact form component
│   ├── GoogleReviews.tsx # Google Reviews integration
│   ├── Hero.tsx        # Hero section component
│   ├── Layout.tsx      # Main layout wrapper
│   ├���─ ProductGrid.tsx # Product carousel component
│   └── WhatsAppButton.tsx # WhatsApp contact button
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── Products.tsx    # Products/Collections page
│   ├── Retail.tsx      # For homeowners
│   ├── Wholesale.tsx   # For contractors
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── utils/              # Utility functions
│   └── imageUtils.ts   # Image management system
├── App.tsx             # Main app component
└── main.tsx           # App entry point
```

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **State Management**: React Query
- **Image Optimization**: Builder.io CDN

## 🎨 Design System

### Colors

- **Primary Red**: `rgb(138,0,0)` - Genesis Stone brand color
- **Secondary Gold**: `rgb(251,189,35)` - Accent color for CTAs
- **Neutral Grays**: For text and backgrounds

### Typography

- **Headings**: Bold, responsive sizing (text-3xl to text-7xl)
- **Body**: Clean, readable typography with proper line heights

### Components

- Consistent button styles (Primary, Gold, Outline variants)
- Card-based layouts with hover effects
- Responsive grid systems

## 🚦 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📱 Key Features

### 🏠 Homepage (Index.tsx)

- Hero section with company overview
- Product grid carousel
- Why choose us section
- Portfolio showcase
- Google Reviews integration
- FAQ section

### 🏢 Products Page

- Clean collections grid inspired by industry leaders
- 8 product categories with detailed descriptions
- Professional imagery and CTAs
- Dealer program information

### 🏡 Retail Page (For Homeowners)

- Home transformation focus
- Interior design consultation
- Material selection guidance
- Project showcase
- Customer testimonials

### 🔧 Wholesale Page (For Contractors)

- Volume pricing structure
- Trade account benefits
- Project management tools
- Contractor testimonials
- Account management features

### 📞 Contact Page

- Multiple contact methods
- Interactive Google Maps
- Showroom information
- Contact form integration

## 🖼 Image Management

The project uses a sophisticated image management system (`imageUtils.ts`) that provides:

- Reliable image loading with fallbacks
- Optimized Builder.io CDN integration
- Consistent image IDs across components
- Error handling and health checking

## 🎯 Target Audiences

1. **Contractors & Builders**: Volume pricing, trade accounts, project management
2. **Homeowners**: Design consultation, material selection, project guidance
3. **Interior Designers**: Premium materials, professional support

## 📊 Performance

- Optimized images with WebP format
- Lazy loading for better performance
- Responsive design for all devices
- Fast loading with Vite build system

## 🔧 Configuration

Key configuration files:

- `tailwind.config.ts` - Tailwind CSS configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration

## 📝 Contributing

When working on this project:

1. Follow the existing code structure and naming conventions
2. Use TypeScript for type safety
3. Maintain responsive design principles
4. Test across different screen sizes
5. Keep components modular and reusable

## 📞 Contact Information

**Genesis Stone & More**

- Address: 3399 NW 72nd Ave #109, Miami, FL 33122
- Phone: Contact via website form
- Service Area: South Florida

---

This codebase is clean, well-organized, and ready for AI collaboration and future development.
