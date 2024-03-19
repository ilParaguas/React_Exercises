import { createRoot } from "react-dom/client";
import { App } from "./App";

const app = <App />;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(app);
