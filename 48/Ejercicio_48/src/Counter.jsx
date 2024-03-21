import { useState } from "react";

export function Counter({ initialValue = 0, increment = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((x) => x + increment);
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Plus</button>
    </div>
  );
}
