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
          <img src={user.avatar_url} width={64} />
          <div>{user.login}</div>
          <div>{user.name}</div>
        </div>
      )}
    </div>
  );
}
