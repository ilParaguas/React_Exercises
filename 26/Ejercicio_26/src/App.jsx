import { StrictMode } from "react";
import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <StrictMode>
        <Counter />
      </StrictMode>
    </div>
  );
}
