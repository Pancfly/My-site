import React from "react";
import Sidebar from "../Sidebar/Sidebar";

function Menu({ currentLang, switchLang }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLangChange(lang) {
    if(!lang) {
      console.log("Not valid data")
      return;
    }
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
        currentLang={currentLang}
        handleLangChange={handleLangChange}
      />
    </>
  );
}

export default Menu;