import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/counter"
          element={<Counter increment={1} initialValue={0} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
