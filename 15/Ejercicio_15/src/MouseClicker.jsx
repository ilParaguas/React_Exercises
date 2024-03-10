export function MouseClicker() {
  function handleClickName(event) {
    console.log(event.target.name);
  }

  return (
    <div>
      <button onClick={handleClickName} name="one">
        Click me!
      </button>
    </div>
  );
}
