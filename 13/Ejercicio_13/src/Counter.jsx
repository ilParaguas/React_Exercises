import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, increment = 1, decrement = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  //Runs the function everytime the counter value changes
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  function handleIncrement() {
    setCounter((x) => x + increment);
  }
  function handleDecrement() {
    setCounter((x) => x - decrement);
  }

  function handleReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Plus</button>
      <button onClick={handleDecrement}>Minus</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
