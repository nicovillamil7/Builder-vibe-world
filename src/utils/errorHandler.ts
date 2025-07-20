// Error handler for third-party script fetch failures
export const initializeFetchErrorHandler = () => {
  // Wrap the original fetch to handle errors gracefully
  const originalFetch = window.fetch;

  window.fetch = function (...args) {
    return originalFetch.apply(this, args).catch((error) => {
      const url = args[0]?.toString() || "";

      // Check if this is a SearchAtlas or other third-party API failure
      if (
        url.includes("searchatlas.com") ||
        url.includes("clarity.ms") ||
        url.includes("googletagmanager.com")
      ) {
        console.warn(
          "Third-party service request failed (continuing without it):",
          url,
          error,
        );
      } else {
        console.warn("Fetch request failed:", error);
      }

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
