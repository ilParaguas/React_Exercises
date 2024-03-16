import { useState } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";

export function App() {
  const [lang, setLang] = useState("en");

  function handleSetLang(language) {
    setLang(language);
  }

  return (
    <div>
      <label> Language </label>
      <select
        name="languageSelect"
        defaultValue={lang}
        onChange={(e) => handleSetLang(e.target.value)}
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <LanguageContext.Provider value={lang}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}
