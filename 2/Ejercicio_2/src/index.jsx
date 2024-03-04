import { createRoot } from "react-dom/client";

export function Hello() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <Message />
    </div>
  );
}

export function Message() {
  return <p> What a beautiful day!</p>;
}

const helloElement = <Hello />;
const root = createRoot(document.getElementById("root"));
root.render(helloElement);
