import { useMemo } from "react";

export function FilteredList({ itemList }) {
  const filteredList = useMemo(
    () => itemList.filter((element) => element.age >= 18),
    [itemList]
  );

  return (
    <ul data-testid="list">
      {filteredList.map((element) => (
        <li key={element.id}>{element.name}</li>
      ))}
    </ul>
  );
}
