/**
 Create a GithubUser component that receives a username prop 
 and fetches the data of the corresponding Github user from the Github API.
 The component should render the user's name, login and avatar.
 */

import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((json) => setUser(json))
      .catch((error) => setError(error));
  }, [username]);

  return (
    <div>
      {error && <div>There has been an error</div>}
      {user && (
        <div>
          <img src={user.avatar_url} />
          <div>{user.login}</div>
          <div>{user.name}</div>
        </div>
      )}
    </div>
  );
}
