import React from "react";
import { LanguageContext } from "../../context/languageContext";

function Sidebar({ isMenuOpen, toggleMenu, currentLang, handleLangChange }) {
  const translation = React.useContext(LanguageContext);

  return (
    <div className={`sidebar${isMenuOpen ? " sidebar_is-opening" : ""}`}>
      <ul className="sidebar__menu">
        <li className="sidebar__links"><a href="#home" className="sidebar__link" onClick={toggleMenu}>{ translation.menubar.home }</a></li>
        <li className="sidebar__links"><a href="#skills" className="sidebar__link" onClick={toggleMenu}>{ translation.menubar.skills }</a></li>
        <li className="sidebar__links"><a href="#portfolio" className="sidebar__link" onClick={toggleMenu}>{ translation.menubar.portfolio }</a></li>
        <li className="sidebar__links"><a href="#contact" className="sidebar__link" onClick={toggleMenu}>{ translation.menubar.contact }</a></li>
        <li className="sidebar__links">
          <button type="button" className="sidebar__button" onClick={() => currentLang === "ru" ? handleLangChange("en") : currentLang === "en" && handleLangChange("ru")}>
            {`${currentLang === "ru" ? "Английский" :
            currentLang === "en" ? "Russian" : ""}`}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;