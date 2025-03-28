import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import DialogProvier from "./context/DialogContext.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import TriggerReloadProvider from "./context/TriggerReloadContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TriggerReloadProvider>
          <DialogProvier>
            <Navbar />
            <div className="container mx-auto mt-10">
              <App />
            </div>
          </DialogProvier>
        </TriggerReloadProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
