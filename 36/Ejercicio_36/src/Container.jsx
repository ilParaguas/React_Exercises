import { useState } from "react";

export function Container({ title, children }) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((val) => !val);
  }

  return (
    <div className="containerDiv">
      <div>
        {title} <button onClick={handleToggle}> Toggle </button>
      </div>
      <div className={!toggle ? "containerShow" : "containerHidden"}>
        {children}
      </div>
    </div>
  );
}
