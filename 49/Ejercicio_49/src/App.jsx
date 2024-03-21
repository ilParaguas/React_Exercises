import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </BrowserRouter>
  );
}
