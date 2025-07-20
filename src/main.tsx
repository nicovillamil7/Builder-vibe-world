import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initMobileOptimizations } from "./utils/mobileOptimizations.ts";
import {
  initializeFetchErrorHandler,
  initializeNavigationErrorHandler,
} from "./utils/errorHandler.ts";

// Initialize error handlers to prevent third-party script failures
initializeFetchErrorHandler();
initializeNavigationErrorHandler();

// Initialize mobile optimizations
initMobileOptimizations();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
