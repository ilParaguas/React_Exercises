import { Route, Routes } from "react-router-dom";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Routes>
        <Route path="/" element={<Welcome name={"Javi"} />} />
      </Routes>
    </div>
  );
}
