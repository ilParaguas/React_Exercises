import { FilteredList } from "./FilteredList";

export function App() {
  const itemList = [
    {
      name: "John",
      id: 3,
      age: 19,
    },
    {
      name: "Mike",
      id: 7,
      age: 13,
    },
    {
      name: "Anna",
      id: 1,
      age: 16,
    },
    {
      name: "Laura",
      id: 12,
      age: 33,
    },
    {
      name: "Frank",
      id: 6,
      age: 28,
    },
  ];

  return (
    <div>
      <FilteredList itemList={itemList} />
    </div>
  );
}
