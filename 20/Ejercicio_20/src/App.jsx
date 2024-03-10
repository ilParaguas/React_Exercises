import { Login } from "./Login";

function onLogin(data) {
  console.log(data);
}

export function App() {
  return (
    <div>
      <Login onLogin={onLogin} />
    </div>
  );
}
