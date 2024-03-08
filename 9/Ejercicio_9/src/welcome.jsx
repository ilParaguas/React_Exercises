import { Age } from "./age";

export function Welcome(prop) {
  return (
    <div>
      <strong> Welcome, {prop.name}!</strong>;
      <Age age={prop.age} />
      {prop.age > 18 && <Age age={prop.age} />}
      {prop.age && <Age age={prop.age} />}
      {prop.age > 18 && prop.age < 65 && <Age age={prop.age} />}
      {prop.age > 18 && prop.age < 65 && prop.name === "John" && (
        <Age age={prop.age} />
      )}
    </div>
  );
}
