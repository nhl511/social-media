import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import DialogProvier from "./context/DialogContext.tsx";

async function deferRender() {
  const { worker } = await import("./mocks/browser.ts");
  return worker.start();
}
console.log("hi");
deferRender().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <DialogProvier>
          <Navbar />
          <div className="container mx-auto mt-10">
            <App />
          </div>
        </DialogProvier>
      </BrowserRouter>
    </StrictMode>
  );
});
