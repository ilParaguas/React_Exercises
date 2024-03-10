export function MouseClicker() {
  function handleClick(event) {
    console.log(event.target.src);
  }

  return (
    <div>
      <button onClick={handleClick} name="one">
        <img width={64} height={64} src={"./img/pikachu.png"} />
        Click me!
      </button>
    </div>
  );
}
