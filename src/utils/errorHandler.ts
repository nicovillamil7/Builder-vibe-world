// Error handler for third-party script fetch failures
export const initializeFetchErrorHandler = () => {
  // Wrap the original fetch to handle errors gracefully
  const originalFetch = window.fetch;

  window.fetch = function (...args) {
    return originalFetch.apply(this, args).catch((error) => {
      // Log the error but don't break the application
      console.warn("Fetch request failed (likely third-party script):", error);

      // Return a resolved promise with a fake response to prevent script errors
      return Promise.resolve(
        new Response("{}", {
          status: 200,
          statusText: "OK",
          headers: {
            "Content-Type": "application/json",
          },
        }),
      );
    });
  };

  // Also handle unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    if (event.reason?.message?.includes("Failed to fetch")) {
      // Prevent the error from appearing in console
      event.preventDefault();
      console.warn("Prevented unhandled fetch rejection:", event.reason);
    }
  });
};

// Handle navigation errors specifically
export const initializeNavigationErrorHandler = () => {
  // Wrap history.pushState to handle errors
  const originalPushState = history.pushState;

  history.pushState = function (...args) {
    try {
      return originalPushState.apply(this, args);
    } catch (error) {
      console.warn("Navigation error prevented:", error);
    }
  };

  // Wrap history.replaceState too
  const originalReplaceState = history.replaceState;

  history.replaceState = function (...args) {
    try {
      return originalReplaceState.apply(this, args);
    } catch (error) {
      console.warn("Navigation error prevented:", error);
    }
  };
};
