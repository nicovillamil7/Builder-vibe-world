import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Retail from "./pages/Retail";
import Wholesale from "./pages/Wholesale";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ImageDiagnostic } from "./components/ImageDiagnostic";
import { ImageIntelligenceDashboard } from "@/components/ImageIntelligenceDashboard";
import { EnhancedImageIntelligenceDashboard } from "@/components/EnhancedImageIntelligenceDashboard";
import { ImageSystemTestRunner } from "@/components/ImageSystemTestRunner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/image-diagnostic" element={<ImageDiagnostic />} />
          <Route
            path="/image-intelligence"
            element={<EnhancedImageIntelligenceDashboard />}
          />
          <Route
            path="/legacy-image-intelligence"
            element={<ImageIntelligenceDashboard />}
          />
          <Route
            path="/image-system-tests"
            element={<ImageSystemTestRunner />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
