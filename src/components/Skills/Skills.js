import React from "react";
import LogoHTML from "../../images/logo-html5.svg";
import LogoCSS from "../../images/logo-css3.svg";
import LogoJS from "../../images/logo-javascript.svg";
import LogoReact from "../../images/logo-react.svg";
import LogoFigma from "../../images/logo-figma.svg";
import LogoWebpack from "../../images/logo-webpack.svg";
import LogoNode from "../../images/nodejs-new-white.svg";
import { LanguageContext } from "../../context/languageContext";

function Skills() {
  const translation = React.useContext(LanguageContext);

  return (
    <section className="skills" id="skills">
      <div className="skills__info">
        <h2 className="skills__title">{ translation.menubar.skills }</h2>
        <p className="skills__subtitle">{ translation.skillsInfo }</p>
      </div>
      <div className="skills__content">
        <ul className="skills__lists">
          <li className="skills__list-item">
            <img src={LogoHTML} alt="HTML" className="skills__img"></img>
          </li>
          <li className="skills__list-item">
            <img src={LogoCSS} alt="CSS" className="skills__img"></img>
          </li>
          <li className="skills__list-item">
            <img src={LogoJS} alt="JavaScript" className="skills__img"></img>
          </li>
          <li className="skills__list-item">
            <img src={LogoReact} alt="React" className="skills__img"></img>
          </li>
          <li className="skills__list-item">
            <img src={LogoFigma} alt="Figma" className="skills__img"></img>
          </li>
          <li className="skills__list-item">
            <img src={LogoWebpack} alt="Webpack" className="skills__img"></img>
          </li>
          <li className="skills__list-item">
            <img src={LogoNode} alt="Node" className="skills__img"></img>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;