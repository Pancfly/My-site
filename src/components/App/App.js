import React from "react";
import Menu from "../Menu/Menu";
import Preview from "../Preview/Preview";
import { LanguageContext, translation } from "../../context/languageContext";

function App() {
  const [lang, setLang] = React.useState("en");
  return (
    <LanguageContext.Provider value={ translation[lang] }>
      <div className="page">
        <Menu
          currentLang={lang}
          switchLang={setLang}
        />
        <Preview />
      
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
