# Genesis Stone - Premium Stone & Flooring Website

🏢 **Professional flooring company website built with modern React/Vite stack**

![Genesis Stone](https://img.shields.io/badge/Genesis%20Stone-Premium%20Flooring-red)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.2.2-yellow)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)

## 📋 Project Overview

Genesis Stone is a premium stone and flooring company website featuring:

- **🎯 Target Audiences**: Contractors, Interior Designers, General Customers
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🚀 Modern Stack**: React 18, Vite, TypeScript, Tailwind CSS
- **🎨 UI Components**: Radix UI with custom components
- **📊 Advanced Features**: AI Image Intelligence System, FAQ sections, Contact forms
- **🌐 SEO Optimized**: Fast loading, semantic HTML, proper meta tags

## 🚀 Quick Start for Replit

### Option 1: One-Click Deploy

1. **Import this repository** into Replit
2. **Click "Run"** - Replit will automatically:
   - Install dependencies
   - Build the project
   - Start the development server
3. **View your site** at the provided URL

### Option 2: Manual Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
genesis-stone/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (buttons, cards, etc.)
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── Hero.tsx        # Homepage hero section
│   │   └── ProductGrid.tsx # Product showcase grid
│   ├── pages/              # Main application pages
│   │   ├── Index.tsx       # Homepage
│   │   ├── Products.tsx    # Products catalog
│   │   ├── Contact.tsx     # Contact page
│   │   ├── Retail.tsx      # Interior Design services
│   │   └── Wholesale.tsx   # Contractor services
│   ├── utils/              # Utility functions
│   │   ├── imageUtils.ts   # Image management
│   │   └── imageSystemReset.ts # AI image system
│   └── App.tsx             # Main application component
├── public/                 # Static assets
├── .replit                 # Replit configuration
├── replit.nix             # Replit package management
└── start.sh               # Replit startup script
```

## 🛠️ Available Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start development server (Vite)    |
| `npm run build`     | Build for production               |
| `npm run preview`   | Preview production build locally   |
| `npm start`         | Build and serve (Replit optimized) |
| `npm run test`      | Run test suite                     |
| `npm run typecheck` | TypeScript type checking           |

## 🎨 Key Features

### 📱 Responsive Design

- Mobile-first responsive layout
- Tailwind CSS for styling
- Modern component architecture

### 🏢 Business Pages

- **Homepage**: Hero, features, testimonials, FAQ
- **Products**: Porcelain tiles, natural stone, mosaics
- **Contact**: Contact form, location, business hours
- **Retail**: Interior designer services and pricing
- **Wholesale**: Contractor services and bulk pricing

### 🤖 AI Image Intelligence System

- Automated image quality analysis
- Smart image replacement suggestions
- Comprehensive image management dashboard
- Quality scoring and optimization

### 📋 FAQ System

- **Contractors**: Volume pricing, delivery, payment terms
- **Designers**: Trade programs, samples, custom work
- **General**: Warranties, service areas, installation

## 🌐 Deployment

### Replit Deployment (Recommended)

1. **Import repository** to Replit
2. **Upgrade to Replit Core** ($7/month) for custom domain
3. **Deploy** from the Deployments tab
4. **Configure custom domain** in Replit settings
5. **Update DNS** at your domain provider

### Alternative Deployment Options

- **Vercel**: Connect GitHub repo, automatic deployments
- **Netlify**: Drag & drop or Git integration
- **GitHub Pages**: Free hosting with GitHub Actions

## ⚙️ Configuration

### Environment Variables

Copy `.env.example` to `.env` and update:

```env
VITE_SITE_URL=https://your-domain.com
VITE_SITE_NAME="Genesis Stone"
VITE_PHONE="(305) 477-4402"
VITE_EMAIL="info@genesisstone.com"
VITE_ADDRESS="3399 NW 72nd Ave #109, Miami, FL 33122"
```

### Custom Domain Setup

1. **Purchase domain** from provider (GoDaddy, Namecheap, etc.)
2. **Add CNAME record**:
   - Name: `@` or `www`
   - Value: Your Replit deployment URL
   - TTL: 300
3. **Enable SSL** (automatic with Replit)

## 🎯 Target Audiences

### 👷 Contractors

- Volume pricing and trade accounts
- Job site delivery services
- Net-30 payment terms
- Technical support and specifications

### 🎨 Interior Designers

- Trade discount programs
- Premium sample library
- Custom design consultation
- Luxury residential projects

### 🏠 General Customers

- Residential installation services
- Material selection guidance
- Warranty information
- Showroom visits

## 📞 Business Information

- **Phone**: (305) 477-4402
- **Address**: 3399 NW 72nd Ave #109, Miami, FL 33122
- **Hours**: Monday-Friday, 7:00 AM - 6:00 PM
- **Service Area**: South Florida

## 🛠️ Technical Stack

| Technology   | Version | Purpose       |
| ------------ | ------- | ------------- |
| React        | 18.3.1  | UI Framework  |
| Vite         | 6.2.2   | Build Tool    |
| TypeScript   | 5.5.3   | Type Safety   |
| Tailwind CSS | 3.4.11  | Styling       |
| Radix UI     | Latest  | UI Components |
| React Router | 6.26.2  | Routing       |
| Lucide React | 0.462.0 | Icons         |

## 🚀 Performance Features

- **Fast Loading**: Vite-optimized bundling
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Automatic route-based splitting
- **SEO Optimized**: Semantic HTML and meta tags
- **Mobile Performance**: Touch-friendly interface

## 🔧 Development

### Prerequisites

- Node.js 18+ (automatically handled by Replit)
- NPM or Yarn package manager

### Local Development

```bash
# Clone repository
git clone https://github.com/yourusername/genesis-stone

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Semantic HTML structure

## 📈 SEO & Analytics

- Semantic HTML structure
- Proper heading hierarchy
- Meta descriptions and titles
- Schema.org markup ready
- Google Analytics ready (add tracking ID)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is proprietary software for Genesis Stone.

## 📞 Support

For technical support or questions:

- **Email**: developer@genesisstone.com
- **Phone**: (305) 477-4402
- **Issues**: Create GitHub issue for bugs

---

**🚀 Ready to deploy?** Just click "Run" in Replit and your Genesis Stone website will be live in minutes!

**💡 Need a custom domain?** Upgrade to Replit Core and follow our deployment guide above.

**🎯 Questions?** Check the FAQ section or contact our support team.
