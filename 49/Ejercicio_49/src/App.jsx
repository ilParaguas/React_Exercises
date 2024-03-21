import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  const username = "ilparaguas";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`users/:${username}`}
          element={<ShowGithubUser username={username} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
