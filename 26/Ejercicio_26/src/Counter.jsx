import { useState, useRef, useEffect } from "react";

export function Counter({ initialValue = 0, increment = 1, decrement = 1 }) {
  const [counter, setCounter] = useState(initialValue);
  const counterDirection = useRef("");
  const counterRef = useRef(0);
  const previousCounter = useRef(0);

  function valueChange() {
    previousCounter.current = counterRef.current;
  }

  function handleIncrement() {
    valueChange();
    counterRef.current = counterRef.current + increment;
    setCounter(counterRef.current);
  }
  function handleDecrement() {
    valueChange();
    counterRef.current = counterRef.current - decrement;
    setCounter(counterRef.current);
  }

  function handleReset() {
    valueChange();
    counterRef.current = initialValue;
    setCounter(initialValue);
  }

  /*To further improve your solution, consider leveraging the useEffect hook to monitor the counter state changes.
  This would allow for a more precise update and logging of the counter's direction relative to its previous state or the initialValue.
  This approach is more aligned with React’s principles of data flow and state management. */

  useEffect(() => {
    if (previousCounter.current > counterRef.current) {
      if (counterDirection.current !== "down") {
        counterDirection.current = "down";
        console.log(counterDirection.current);
      }
    } else if (counterDirection.current !== "up") {
      counterDirection.current = "up";
      console.log(counterDirection.current);
    }
  }, [counter]);

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={handleIncrement}>Plus</button>
      <button onClick={handleDecrement}>Minus</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
