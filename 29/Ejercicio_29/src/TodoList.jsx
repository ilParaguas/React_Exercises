import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleClick(event) {
    event.preventDefault();

    const newTodo = event.target.elements.todo.value;

    setTodos((todos) => [...todos, newTodo]);

    event.target.elements.todo.value = "";
  }

  function handleReset() {
    setTodos([]);
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input name="todo"></input>
        <button type="submit">Add item</button>
      </form>

      <button onClick={handleReset}>Reset</button>

      <ul>
        {todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
