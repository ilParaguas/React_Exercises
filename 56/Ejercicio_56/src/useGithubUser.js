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
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  function handleRefresh() {
    mutate();
  }

  return { user: data, error, handleRefresh };
}
