import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter((x) => x + 1);
  }

  function handleDecrement() {
    setCounter((x) => x - 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <div>
      <h2>I have counted to {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
