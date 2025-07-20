import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initMobileOptimizations } from "./utils/mobileOptimizations.ts";
import {
  initializeFetchErrorHandler,
  initializeNavigationErrorHandler,
} from "./utils/errorHandler.ts";

// Debug React import to ensure it's properly loaded
console.log("React object:", React);
console.log("React.createContext:", React.createContext);
console.log("React.StrictMode:", React.StrictMode);

// Initialize error handlers to prevent third-party script failures
initializeFetchErrorHandler();
initializeNavigationErrorHandler();

// Initialize mobile optimizations
initMobileOptimizations();

// Ensure React is fully loaded before rendering
if (!React || !React.createContext || !React.StrictMode) {
  console.error("React is not properly loaded!");
  document.getElementById("root")!.innerHTML = '<div>React loading error. Please refresh the page.</div>';
} else {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
