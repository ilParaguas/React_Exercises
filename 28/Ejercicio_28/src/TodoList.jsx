import { useState } from "react";

export function TodoList() {
  /*
    Create a TodoList component that renders a ul tag with a
    li tag for each item contained in the todos state variable.
    The todos state variable should be an array of strings.
    The TodoList component should also contain an input tag 
    and a button. When the button is clicked, the event 
    handler should add the value of the input tag to the
    todos array. */

  const [todos, setTodos] = useState([]);

  function handleClick(event) {
    event.preventDefault();

    const newTodo = event.target.elements.todo.value;

    setTodos((todos) => [...todos, newTodo]);
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input name="todo"></input>
        <button type="submit">Add item</button>
      </form>
      <ul>
        {todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
