import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleName}></input>
      <Welcome name={name} />
    </div>
  );
}
