import { useForm } from "./useForm";

export function Form() {
  const { data, handleInputChange } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);

    event.target.elements.usernameInput.value = "";
    event.target.elements.passwordInput.value = "";
  }

  return (
    <form onSubmit={handleSubmit} id="formData">
      <input
        type="text"
        placeholder="username"
        name="usernameInput"
        onChange={handleInputChange}
      ></input>
      <input
        type="password"
        placeholder="password"
        name="passwordInput"
        onChange={handleInputChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
