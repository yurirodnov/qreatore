import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StateProvider } from "./context/state-provider/StateProvider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>,
);
