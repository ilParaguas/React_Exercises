export function AlertClock({ prop }) {
  return (
    <div>
      <p>Click the button below to show the current time</p>
      <button onClick={prop}>Click me!</button>
    </div>
  );
}
