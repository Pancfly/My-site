import React from "react";
import LogoVK from "../../images/logo-vk.svg";
import LogoFB from "../../images/logo-facebook.svg";
import LogoGH from "../../images/logo-github.svg";
import { LanguageContext } from "../../context/languageContext";

function Socials() {
  const translation = React.useContext(LanguageContext);

  return (
    <ul className="socials">
      <li className="socials__links">
        <a href="https://vk.com/pancfly" rel="noreferrer" target="_blank" title={ translation.social.vk } className="socials__link">
          <img src={LogoVK} alt={ translation.social.vk } className="socials__img" />
        </a>
      </li>
      <li className="socials__links">
        <a href="https://www.facebook.com/profile.php?id=100001626261744" rel="noreferrer" target="_blank" title={ translation.social.fb } className="socials__link">
          <img src={LogoFB} alt={ translation.social.fb } className="socials__img" />
        </a>
      </li>
      <li className="socials__links">
        <a href="https://github.com/Pancfly" rel="noreferrer" target="_blank" title={ translation.social.gh } className="socials__link">
          <img src={LogoGH} alt={ translation.social.gh } className="socials__img" />
        </a>
      </li>
    </ul>
  );
}

export default Socials;