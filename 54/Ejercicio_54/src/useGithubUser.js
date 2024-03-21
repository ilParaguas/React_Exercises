import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) {
      return response
        .text()
        .then((responseText) => Promise.reject(responseText));
    }
    return response.json();
  });

export function useGithubUser(username) {
  const { user, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return { user, error };
}
