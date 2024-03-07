import { Age } from "./age";

export function Welcome(prop) {
  return (
    <div>
      <strong> Welcome, {prop.name}!</strong>;
      <Age age={prop.age} />
    </div>
  );
}
