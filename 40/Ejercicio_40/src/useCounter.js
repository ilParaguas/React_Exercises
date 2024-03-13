import { useState } from "react";

export function useCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((x) => x + 1);
  }
  function handleDecrement() {
    setCounter((x) => x - 1);
  }

  function handleReset() {
    setCounter(initialValue);
  }

  return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}
