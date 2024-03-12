import { Color } from "./Color";
import { Colors } from "./Colors";

export function App() {
  return (
    <div>
      <Color color={{ name: "red", id: 1 }} />
      <Colors
        colors={[
          { id: "3", name: "blue" },
          { id: "5", name: "green" },
          { id: "4", name: "yellow" },
          { id: "9", name: "purple" },
        ]}
      />{" "}
    </div>
  );
}
