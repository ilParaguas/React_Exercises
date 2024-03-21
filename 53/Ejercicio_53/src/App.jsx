import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Not found!</p>
              <Link to="/users/"> Home </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
