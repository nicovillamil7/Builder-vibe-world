import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import Products from "./pages/Products";
import NaturalStone from "@/pages/NaturalStone";
import LaminateFlooring from "@/pages/LaminateFlooring";
import PorcelainTile from "@/pages/PorcelainTile";
import ProductCategory from "@/pages/ProductCategory";
import Retail from "./pages/Retail";
import Wholesale from "./pages/Wholesale";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServicesAreas";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import Analytics from "@/components/Analytics";

// Spanish pages
import IndexES from "./pages/es/Index";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App: React.FC = () => {
  // Debug React state in App component
  console.log("App component - React object:", React);
  console.log("App component - createContext available:", !!React.createContext);
  
  // Ensure React is properly loaded
  if (!React || typeof React.createElement === "undefined") {
    return <div>React not properly initialized. Please refresh.</div>;
  }

  if (!React.createContext) {
    console.error("React.createContext is undefined in App component");
    return <div>React Context error. Please refresh the page.</div>;
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Analytics />
              <Routes>
                {/* English routes */}
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/products/natural-stone"
                  element={<NaturalStone />}
                />
                <Route
                  path="/products/laminate-flooring"
                  element={<LaminateFlooring />}
                />
                <Route path="/products/porcelain" element={<PorcelainTile />} />
                <Route
                  path="/products/:category"
                  element={<ProductCategory />}
                />
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
              <Toaster />
              <Sonner />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
        <PerformanceMonitor />
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;