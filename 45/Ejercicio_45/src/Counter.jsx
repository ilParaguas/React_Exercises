import { useCounter } from "./useCounter.js";

export function Counter({ initialValue = 0}) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onIncrement}>Plus</button>
      <button onClick={onDecrement}>Minus</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
