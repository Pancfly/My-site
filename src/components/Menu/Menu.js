import React from "react";
import Sidebar from "../Sidebar/Sidebar";

function Menu({ currentLang, switchLang }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLangChange(lang) {
    if(lang === "ru") {
      switchLang("ru")
    }
    if(lang === "en") {
      switchLang("en")
    }
  }

  return (
    <>
      <div className={`menu${isMenuOpen ? " menu_is-opening" : ""}`} onClick={toggleMenu}></div>
    
      <Sidebar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        currentLang={currentLang}
        handleLangChange={handleLangChange}
      />
    </>
  );
}

export default Menu;