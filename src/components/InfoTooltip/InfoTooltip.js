import React from "react";
import { LanguageContext } from "../../context/languageContext";

function InfoTooltip({ isSubmit, setIsSubmit }) {
  const translation = React.useContext(LanguageContext);

  function handleClose() {
    setIsSubmit(false);
  }

  return (
    <div className={`popup ${isSubmit ? "popup_is-opening" : ""}`}>
      <div className="popup__overlay"></div>
      <div className="popup__form">
        <button className="popup__close-button" type="button" onClick={handleClose}/>
        <h2 className="popup__bold-text">
          {isSubmit ? `${ translation.message }` : ""}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;