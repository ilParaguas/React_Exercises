import { Container } from "./Container";

export function App() {
  return (
    <Container title={<h1>Container title</h1>}>
      <h2>Container body</h2>
      <div>Hello world</div>
      <ul>
        List of things
        <li>Thing 1</li>
        <li>Thing 2</li>
        <li>Thing 3</li>
        <li>Thing 4</li>
        <li>Thing 5</li>
      </ul>
    </Container>
  );
}
