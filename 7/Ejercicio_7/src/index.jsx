import { App } from "./app";
import { createRoot } from "react-dom/client";

const app = <App />;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(app);
