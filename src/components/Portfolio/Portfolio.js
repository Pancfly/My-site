import React from "react";
import Mesto from "../../images/mesto.png";
import Movie from "../../images/movie.png";
import Clerksy from "../../images/clerksy.png";
import RussianTravel from "../../images/russian-travel.png";
import ListDesign from "../../images/list-design.png";
import { LanguageContext } from "../../context/languageContext";

function Portfolio() {
  const translation = React.useContext(LanguageContext);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__info">
        <h2 className="portfolio__title">{ translation.work }</h2>
        <p className="portfolio__subtitle">{ translation.portfolioInfo }</p>
      </div>
      <div className="portfolio__content">
        <div className="portfolio__box">
          <div className="portfolio__image-box">
            <img src={Clerksy} alt={ translation.portfolio.clerksy } className="portfolio__img"/>
          </div>
          <div className="portfolio__text-box">
            <a href="https://pancfly.github.io/Clerksy/" rel="noreferrer" target="_blank" className="portfolio__link">
              <h3 className="portfolio__text">{ translation.portfolio.clerksy }</h3>
            </a>
          </div>
        </div>
        <div className="portfolio__box">
          <div className="portfolio__image-box">
            <img src={RussianTravel} alt={ translation.portfolio.russianTravel } className="portfolio__img"/>
          </div>
          <div className="portfolio__text-box">
            <a href="https://pancfly.github.io/russian-travel/" rel="noreferrer" target="_blank" className="portfolio__link">
              <h3 className="portfolio__text">{ translation.portfolio.russianTravel }</h3>
            </a>
          </div>
        </div>
        <div className="portfolio__box">
          <div className="portfolio__image-box">
            <img src={Mesto} alt={ translation.portfolio.mesto } className="portfolio__img"/>
          </div>
          <div className="portfolio__text-box">
            <a href="https://pancfly.github.io/mesto/" rel="noreferrer" target="_blank" className="portfolio__link">
              <h3 className="portfolio__text">{ translation.portfolio.mesto }</h3>
            </a>
          </div>
        </div>
        <div className="portfolio__box">
          <div className="portfolio__image-box">
            <img src={Movie} alt={ translation.portfolio.movie } className="portfolio__img"/>
          </div>
          <div className="portfolio__text-box">
            <a href="https://pancfly.movies.nomoredomains.rocks/movies" rel="noreferrer" target="_blank" className="portfolio__link">
              <h3 className="portfolio__text">{ translation.portfolio.movie }</h3>
            </a>
          </div>
        </div>
        <div className="portfolio__box">
          <div className="portfolio__image-box">
            <img src={ListDesign} alt={ translation.portfolio.listDesign } className="portfolio__img"/>
          </div>
          <div className="portfolio__text-box">
            <a href="https://pancfly.github.io/list-design/" rel="noreferrer" target="_blank" className="portfolio__link">
              <h3 className="portfolio__text">{ translation.portfolio.listDesign }</h3>
            </a>
          </div>
        </div>
      </div>
    </section>    
  );
}

export default Portfolio;