import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./assets/APP/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
