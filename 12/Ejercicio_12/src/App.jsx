import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <Counter initialValue={0} increment={1} decrement={1} />
    </div>
  );
}
