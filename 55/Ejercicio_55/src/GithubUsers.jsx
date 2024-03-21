import { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [userList, setList] = useState([]);
  const { user, error } = useGithubUser(username);

  function handleSubmit(event) {
    event.preventDefault();
    setUsername(event.target.elements.userInput.value);

    event.target.elements.userInput.value = "";
  }

  useEffect(() => {
    if (error && error != null) {
      setList((userList) => [...userList, error]);
    } else if (user && user != null) {
      setList((userList) => [...userList, user]);
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
            <li key={index}>{element}</li>
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
