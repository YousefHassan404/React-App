import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { EnrollmentProvider } from "./context/EnrollmentContext";
import QueryProvider from './Utils/Query/QueryProvider.jsx'

// import './index.css'

createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <EnrollmentProvider>
      <App />
    </EnrollmentProvider>
    </QueryProvider>
);
