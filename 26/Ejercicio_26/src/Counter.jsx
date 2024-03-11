import { useState, useRef } from "react";

export function Counter({ initialValue = 0, increment = 1, decrement = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const counterDirection = useRef("");

  function handleIncrement() {
    setCounter((x) => x + increment);
    if (counterDirection.current !== "up") {
      counterDirection.current = "up";
      console.log(counterDirection.current);
    }
  }
  function handleDecrement() {
    setCounter((x) => x - decrement);
    if (counterDirection.current !== "down") {
      counterDirection.current = "down";
      console.log(counterDirection.current);
    }
  }

  function handleReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <div>Counter: {counter}</div>
      <button ref={counterDirection} onClick={handleIncrement}>
        Plus
      </button>
      <button ref={counterDirection} onClick={handleDecrement}>
        Minus
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
