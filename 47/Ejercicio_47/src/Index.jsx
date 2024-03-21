import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(app);
