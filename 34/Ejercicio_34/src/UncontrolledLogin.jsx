import "./TodoList.css";

export function UncontrolledLogin() {
  function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      checked: formData.get("checked") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <form onSubmit={handleLogin} className="text-3xl uppercase bg-gray-400">
      <input name="username" />
      <input name="password" type="password" />
      <input name="checked" type="checkbox" />
      <button type="submit"> Login </button>
      <button type="reset">Reset</button>
    </form>
  );
}
