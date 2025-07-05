import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { getAllSiteUrls } from "@/utils/urlUtils";

const NotFound = () => {
  const siteUrls = getAllSiteUrls();

  useEffect(() => {
    // Track 404s for SEO monitoring
    console.warn('404 Page Not Found:', window.location.pathname);

    // Optional: Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_not_found', {
        page_path: window.location.pathname,
        page_title: '404 - Page Not Found'
      });
    }
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Page Not Found - Genesis Stone"
        description="The page you're looking for couldn't be found. Explore our flooring products, services, and resources."
        canonicalUrl={`https://genesisstoneusa.com${window.location.pathname}`}
      />
      <Helmet>
        {/* Only noindex if this is actually a 404, not a valid route */}
        {window.location.pathname === '/404' && <meta name="robots" content="noindex, follow" />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Page Not Found",
            "description": "The requested page could not be found",
            "url": `https://genesisstoneusa.com${window.location.pathname}`,
            "isPartOf": {
              "@type": "WebSite",
              "name": "Genesis Stone & More",
              "url": "https://genesisstoneusa.com/"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center py-12">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or doesn't exist. Explore our popular pages below.
          </p>

          {/* Popular pages for better UX and internal linking */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link
              to="/products"
              className="p-4 border border-gray-200 rounded-lg hover:border-red-300 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Products</h3>
              <p className="text-sm text-gray-600">Browse our flooring collection</p>
            </Link>
            <Link
              to="/blog"
              className="p-4 border border-gray-200 rounded-lg hover:border-red-300 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Blog</h3>
              <p className="text-sm text-gray-600">Flooring tips and guides</p>
            </Link>
            <Link
              to="/contact"
              className="p-4 border border-gray-200 rounded-lg hover:border-red-300 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Contact</h3>
              <p className="text-sm text-gray-600">Get in touch with us</p>
            </Link>
          </div>

          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;