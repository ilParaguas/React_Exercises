import { useState } from "react";

export function useGithubUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function onFetchUser(username) {
    setUser(null);
    setError(null);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(
          json.message || "There was an error with the HTTP request"
        );
      } else {
        setUser(json);
      }
    } catch (error) {
      setError(error.message || error);
    }
  }

  return { user, error, onFetchUser };
}
