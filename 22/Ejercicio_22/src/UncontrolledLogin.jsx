export function UncontrolledLogin() {
  function handleLogin(event) {
    event.preventDefault();

    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const checked = event.target.elements.namedItem("checked").checked;

    const data = {
      username,
      password,
      checked,
    };

    console.log(data);
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="username" />
      <input name="password" type="password" />
      <input name="checked" type="checkbox" />
      <button type="submit"> Login </button>
      <button type="reset">Reset</button>
    </form>
  );
}
