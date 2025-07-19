import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    clarity: (...args: any[]) => void;
  }
}

const Analytics = () => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-5DTNSBTY8Z", {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Initialize Microsoft Clarity
    const initClarity = () => {
      window.clarity =
        window.clarity ||
        function () {
          (window.clarity.q = window.clarity.q || []).push(arguments);
        };
    };

    // Initialize tracking when component mounts
    initGA();
    initClarity();

    // Track page views for SPA navigation
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag("config", "G-5DTNSBTY8Z", {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Listen for route changes
    const handleRouteChange = () => {
      setTimeout(trackPageView, 100);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <Helmet>
      {/* Google Analytics 4 - commented out to remove API call */}
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      /> */}

      {/* Google Analytics Configuration - commented out to remove API call */}
      {/* <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </script> */}

      {/* Microsoft Clarity - commented out to remove API call */}
      {/* <script>
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
        `}
      </script> */}

      {/* Google Ads Conversion Tracking - commented out to remove API call */}
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"
      /> */}

      {/* <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-CONVERSION_ID');
        `}
      </script> */}

      {/* Enhanced Ecommerce and Event Tracking Setup - commented out to remove API call */}
      {/* <script>
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
      </script> */}
    </Helmet>
  );
};

export default Analytics;
