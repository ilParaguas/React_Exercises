import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        } else return res.json();
      })
      .then((json) => setUser(json))
      .catch((error) => setError(error));
  }, [username]);

  return (
    <div>
      {user && !error && (
        <div>
          <img src={user.avatar_url} width={64} />
          <div>{user.login}</div>
          <div>{user.name}</div>
        </div>
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
}
