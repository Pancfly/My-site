import React from "react";
import { Link } from "react-router-dom";
import PreviewImage from "../../images/portfolio.jpg";
import { LanguageContext } from "../../context/languageContext";

function Preview() {
  const translation = React.useContext(LanguageContext);

  return (
    <section className="preview">
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
          <Link to="/" className="preview__btn"> { translation.menubar.about }</Link>
        </div>
      </div>
    </section>
  );
}

export default Preview;