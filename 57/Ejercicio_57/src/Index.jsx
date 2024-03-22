import { createRoot } from "react-dom/client";
import { App } from "./App";
import { SWRConfig } from "swr";

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) {
      return response
        .text()
        .then((responseText) => Promise.reject(responseText));
    }
    return response.json();
  });

createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher }}>
    <App />
  </SWRConfig>
);
