import React from "react";
import Menu from "../Menu/Menu";
import Preview from "../Preview/Preview";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import { LanguageContext, translation } from "../../context/languageContext";

function App() {
  const [lang, setLang] = React.useState("en");
  return (
    <LanguageContext.Provider value={ translation[lang] }>
      <div className="page">
        <Preview />
        <Menu
          currentLang={lang}
          switchLang={setLang}
        />
        <Skills />
        <Portfolio />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
