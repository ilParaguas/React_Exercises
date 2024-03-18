import { LanguageContext } from "./LanguageContext";
import { useEffect, useState, useContext } from "react";

export function Clock() {
  const lang = useContext(LanguageContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>
        {lang === "es" ? "Hora actual:" : "Current time:"}
        {"  "}
        {date.toLocaleTimeString()}
      </h2>
    </div>
  );
}
