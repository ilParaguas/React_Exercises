import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <Counter increment={1} initialValue={0} />
    </div>
  );
}
