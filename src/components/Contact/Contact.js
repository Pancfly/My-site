import React from "react";
import { LanguageContext } from "../../context/languageContext";

function Contact() {
  const translation = React.useContext(LanguageContext);

  return (
    <section className="contact" id="contact">
      <div className="contact__info">
        <h2 className="contact__title">{ translation.menubar.contact }</h2>
        <p className="contact__subtitle">{ translation.contactInfo }</p>
      </div>
      <div className="contact__form">
        <div className="contact__row">
          <div className="contact__col">
            <input type="text" name="" placeholder={ translation.form.firstName } className="contact__input"/>
          </div>
          <div className="contact__col">
            <input type="text" name="" placeholder={ translation.form.lastName } className="contact__input"/>
          </div>
        </div>
        <div className="contact__row">
          <div className="contact__col">
            <input type="email" name="" pattern="^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$" placeholder={ translation.form.email } className="contact__input"/>
          </div>
          <div className="contact__col">
            <input type="text" name="" placeholder={ translation.form.mobile } className="contact__input"/>
          </div>
        </div>
        <div className="contact__row">
          <div className="contact__text-box">
            <textarea placeholder={ translation.form.message } className="contact__text"></textarea>
          </div>
        </div>
        <div className="contact__row">
          <div className="contact__text-box">
            <input type="submit" value={ translation.form.send } className="contact__button"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;