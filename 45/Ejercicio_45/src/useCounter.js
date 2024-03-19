import { useCallback, useState } from "react";

export function useCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCounter((x) => x + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter((x) => x - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}
