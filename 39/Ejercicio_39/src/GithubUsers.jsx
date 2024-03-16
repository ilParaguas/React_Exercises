import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [userList, setList] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setList((userList) => [...userList, event.target.elements.userInput.value]);

    event.target.elements.userInput.value = "";
  }

  return (
    <div>
      <form name="usersInput" onSubmit={handleSubmit}>
        <input type="text" name="userInput"></input>
        <button type="submit" value="Submit">
          {" "}
          Submit
        </button>
      </form>
      <ul>
        {userList.map((el, index) => (
          <li key={index}>
            <GithubUser username={el} />
          </li>
        ))}
      </ul>
    </div>
  );
}
