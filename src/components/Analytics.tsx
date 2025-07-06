
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    clarity: (...args: any[]) => void;
    trackEvent: (eventName: string, parameters: any) => void;
    trackFormSubmission: (formName: string) => void;
    trackPhoneCall: () => void;
    trackProductInterest: (productCategory: string) => void;
  }
}

const Analytics = () => {
  // Use the GA ID that's already configured in index.html
  const GA_ID = 'G-5DTNSBTY8Z';
  const ADS_ID = import.meta.env.VITE_AW_CONVERSION_ID;

  useEffect(() => {
    // Initialize custom tracking functions
    const initializeTrackingFunctions = () => {
      // Custom event tracking functions
      window.trackEvent = function(eventName: string, parameters: any) {
        if (window.gtag) {
          window.gtag('event', eventName, parameters);
        }
      };

      // Track form submissions
      window.trackFormSubmission = function(formName: string) {
        if (window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: formName,
            value: 1
          });
        }
      };

      // Track phone calls
      window.trackPhoneCall = function() {
        if (window.gtag) {
          window.gtag('event', 'phone_call', {
            event_category: 'contact',
            event_label: 'header_phone',
            value: 1
          });
        }
      };

      // Track product interest
      window.trackProductInterest = function(productCategory: string) {
        if (window.gtag) {
          window.gtag('event', 'product_interest', {
            event_category: 'engagement',
            event_label: productCategory,
            value: 1
          });
        }
      };
    };

    // Track page views for SPA navigation (without reconfiguring GA)
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Initialize tracking functions
    initializeTrackingFunctions();

    // Listen for route changes
    const handleRouteChange = () => {
      setTimeout(trackPageView, 100);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

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

      {/* Enhanced Ecommerce Event Tracking */}
      <script>
        {`
          // Enhanced ecommerce events for product interactions
          window.trackPurchaseIntent = function(productName, productCategory, value) {
            if (window.gtag) {
              gtag('event', 'purchase_intent', {
                event_category: 'ecommerce',
                event_label: productName,
                product_category: productCategory,
                value: value || 1
              });
            }
          };

          // Track quote requests
          window.trackQuoteRequest = function(productCategory, contactMethod) {
            if (window.gtag) {
              gtag('event', 'quote_request', {
                event_category: 'lead_generation',
                event_label: productCategory,
                contact_method: contactMethod,
                value: 5
              });
            }
          };

          // Track showroom visits (when users get directions)
          window.trackShowroomInterest = function() {
            if (window.gtag) {
              gtag('event', 'showroom_directions', {
                event_category: 'location',
                event_label: 'get_directions',
                value: 3
              });
            }
          };
        `}
      </script>
    </Helmet>
  );
};

export default Analytics;
