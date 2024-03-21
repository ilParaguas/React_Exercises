import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route
          index
          element={
            <div>
              <Link to="/"> Link 1</Link>
              <Link to="/users"> Link 2</Link>
              <Link to="/users/ilparaguas"> Link 3</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
