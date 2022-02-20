import React from "react";
import { LanguageContext } from "../../context/languageContext";

function Footer() {
  const translation = React.useContext(LanguageContext);
  const date = new Date();

  return (
    <section className="footer">
      <p className="footer__copyright">
        { translation.copyright } { date.getFullYear() } { translation.name }
      </p>
    </section>    
  );
}

export default Footer;