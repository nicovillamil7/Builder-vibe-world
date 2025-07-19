
// Mobile performance optimizations
export const initMobileOptimizations = () => {
  // Reduce animations on slower devices
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
    document.documentElement.style.setProperty('--transition-duration', '0.1s');
  }
  
  // Optimize images for mobile viewport
  const optimizeImages = () => {
    const images = document.querySelectorAll('img[data-mobile-optimize]');
    images.forEach((img) => {
      if (window.innerWidth <= 768) {
        const currentSrc = img.getAttribute('src');
        if (currentSrc && currentSrc.includes('unsplash.com')) {
          const optimizedSrc = currentSrc.replace(/w=\d+/, 'w=600').replace(/q=\d+/, 'q=75');
          img.setAttribute('src', optimizedSrc);
        }
      }
    });
  };
  
  // Debounced resize handler
  let resizeTimeout: NodeJS.Timeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(optimizeImages, 250);
  });
  
  // Initial optimization
  optimizeImages();
  
  // Preload critical resources
  const preloadCritical = () => {
    const criticalImages = [
      '/genesis-nav-icon.png',
      '/placeholder.svg'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  };
  
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCritical);
  } else {
    preloadCritical();
  }
};

// Lazy load non-critical components
export const lazyLoadComponent = (selector: string, threshold = 0.1) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-loaded', 'true');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );
  
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
};
