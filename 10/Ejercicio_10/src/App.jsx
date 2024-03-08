import { AlertClock } from "./AlertClock";

export function App() {
  function handleShowtime() {
    const hour = new Date();
    alert(`The current time is ${hour.toLocaleTimeString()}`);
  }
  return (
    <div>
      <AlertClock prop={handleShowtime} />
    </div>
  );
}
