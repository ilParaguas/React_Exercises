import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users`)
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {users.length && (
        <ul data-testid="users">
          <Link to="/users/"> Home </Link>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
      {error && <div>{error.message}</div>}
      {loading && <div>Loading...</div>}

      <Outlet />
    </div>
  );
}
