
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    clarity: (...args: any[]) => void;
  }
}

const Analytics = () => {
  // Get tracking IDs from environment variables or use defaults
  const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-5DTNSBTY8Z';
  const ADS_ID = import.meta.env.VITE_AW_CONVERSION_ID;

  useEffect(() => {
    // Track page views for SPA navigation
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('config', GA_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Listen for route changes
    const handleRouteChange = () => {
      setTimeout(trackPageView, 100);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [GA_ID]);

  return (
    <Helmet>
      {/* Google Ads Conversion Tracking - Only if ADS_ID is provided */}
      {ADS_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
          />
          
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ADS_ID}');
            `}
          </script>
        </>
      )}

      {/* Enhanced Ecommerce and Event Tracking Setup */}
      <script>
        {`
          // Custom event tracking functions
          window.trackEvent = function(eventName, parameters) {
            if (window.gtag) {
              gtag('event', eventName, parameters);
            }
          };

          // Track form submissions
          window.trackFormSubmission = function(formName) {
            if (window.gtag) {
              gtag('event', 'form_submit', {
                event_category: 'engagement',
                event_label: formName,
                value: 1
              });
            }
          };

          // Track phone calls
          window.trackPhoneCall = function() {
            if (window.gtag) {
              gtag('event', 'phone_call', {
                event_category: 'contact',
                event_label: 'header_phone',
                value: 1
              });
            }
          };

          // Track product interest
          window.trackProductInterest = function(productCategory) {
            if (window.gtag) {
              gtag('event', 'product_interest', {
                event_category: 'engagement',
                event_label: productCategory,
                value: 1
              });
            }
          };
        `}
      </script>
    </Helmet>
  );
};

export default Analytics;
