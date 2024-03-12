export function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => {
        return <li key={color.id}> {color.name} </li>;
      })}
    </ul>
  );
}
