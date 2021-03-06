import React from "react";
import Socials from "../Socials/Socials";
import PreviewImage from "../../images/portfolio.jpg";
import { LanguageContext } from "../../context/languageContext";

function Preview() {
  const translation = React.useContext(LanguageContext);

  return (
    <section className="preview" id="home">
      <div className="preview__imgSidebar">
        <img src={PreviewImage} alt="Portfolio" className="preview__img"/>
      </div>
      <div className="preview__content-box">
        <h1 className="preview__title">{ translation.title }</h1>
        <div>
          <h4 className="preview__greeting"><span className="preview__greete">{ translation.greete }</span>{ translation.me }</h4>
          <h2 className="preview__subtitle">{ translation.name }</h2>
          <h4 className="preview__profession">{ translation.profession }</h4>
          <p className="preview__about">{ translation.about }</p>
          <a href="#contact" className="preview__btn"> { translation.menubar.contact }</a>
        </div>
        <Socials />
      </div>
    </section>
  );
}

export default Preview;