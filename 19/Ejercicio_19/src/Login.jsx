import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login({ onLogin }) {
  const [data, setData] = useState(createData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return { ...d, [name]: type == "checkbox" ? checked : value };
    });
  }

  function handleLogin() {
    onLogin(data);
  }

  return (
    <div>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={handleInputChange}
      />
      <button disabled={!data.username || !data.password} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
