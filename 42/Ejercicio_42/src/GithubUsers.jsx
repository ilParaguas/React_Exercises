import { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUsers() {
  const [userList, setList] = useState([]);
  const { user, error, onFetchUser } = useGithubUser();

  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.userInput.value;
    onFetchUser(username);

    event.target.elements.userInput.value = "";
  }

  useEffect(() => {
    if (error || user) {
      setList((userList) => [...userList, user ? user : error]);
    }
  }, [user, error]);

  return (
    <div>
      <form name="usersInput" onSubmit={handleSubmit}>
        <input type="text" name="userInput"></input>
        <button type="submit" value="Submit">
          {" "}
          Submit
        </button>
      </form>
      <ul key={"list"}>
        {userList.map((element, index) =>
          typeof element === "string" ? (
            error && <li key={index}>{element}</li>
          ) : (
            <li key={index}>
              <img src={element.avatar_url} width={64} />
              {"  "}
              <div>
                {element.login} {"  "}
              </div>
              <div>{element.name}</div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
