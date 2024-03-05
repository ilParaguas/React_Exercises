import { Hello } from "./hello";
import { Welcome } from "./welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Javi" age={28} />
    </div>
  );
}
