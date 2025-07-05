import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import Retail from "./pages/Retail";
import Wholesale from "./pages/Wholesale";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ServiceAreas from "./pages/ServicesAreas"; // Import the ServicesAreas component

// Spanish pages
import IndexES from "./pages/es/Index";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* English routes */}
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Spanish routes */}
            <Route path="/es" element={<IndexES />} />
            <Route path="/es/" element={<IndexES />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    <PerformanceMonitor />
  </HelmetProvider>
);

export default App;