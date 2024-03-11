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
    if (counter < 0) {
      counterDirection.current = "up";
      console.log(counterDirection.current);
    } else if (counter > 0) {
      counterDirection.current = "down";
      console.log(counterDirection.current);
    } else {
      counterDirection.current = "";
    }
    setCounter(initialValue);
  }

  /*To further improve your solution, consider leveraging the useEffect hook to monitor the counter state changes.
  This would allow for a more precise update and logging of the counter's direction relative to its previous state or the initialValue.
  This approach is more aligned with React’s principles of data flow and state management. */

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={handleIncrement}>Plus</button>
      <button onClick={handleDecrement}>Minus</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
