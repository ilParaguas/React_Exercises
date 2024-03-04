import { Hello } from "./hello";
import { Message } from "./message";

export function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Hello />
    </div>
  );
}

/* I can use any component as many times as i want.
I can't use the message component directly, i need to import it first.*/
