import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import useFormValidator from "../../hook/useFormValidate";
import { LanguageContext } from "../../context/languageContext";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Contact() {
  const translation = React.useContext(LanguageContext);
  const [state, handleSubmit] = useForm("moqrdpwo");
  const useFormValidation = useFormValidator();
  const { firstName, lastName, email, mobile, message } = useFormValidation.values;
  const { values, errors, isFormValid, resetForm } = useFormValidation;
  const [isSubmit, setIsSubmit] = React.useState(false);

  React.useEffect(() => {
    resetForm()
  }, [resetForm]);
  console.log(state, handleSubmit);

  return (
    <>
    <section className="contact" id="contact">
      <div className="contact__info">
        <h2 className="contact__title">{ translation.menubar.contact }</h2>
        <p className="contact__subtitle">{ translation.contactInfo }</p>
      </div>
      <form className="contact__form" noValidate onSubmit={handleSubmit}>
        <div className="contact__row">
          <div className="contact__col">
            <input type="text" name="firstName" value={values.firstName || ""} onChange={useFormValidation.handleChange} pattern="^[a-zA-Zа-яА-ЯЁё\\s\\-]+$" placeholder={ translation.form.firstName } className="contact__input" minLength="2" maxLenght="30" require/>
            <span className="contact__input-error">
              {errors.firstName}
            </span>
          </div>
          <div className="contact__col">
            <input type="text" name="lastName" value={values.lastName || ""} onChange={useFormValidation.handleChange} pattern="^[a-zA-Zа-яА-ЯЁё\\s\\-]+$" placeholder={ translation.form.lastName } className="contact__input" minLength="2" maxLenght="30" require/>
            <span className="contact__input-error">
              {errors.lastName}
            </span>
          </div>
        </div>
        <div className="contact__row">
          <div className="contact__col">
            <input type="email" name="email" value={values.email || ""} onChange={useFormValidation.handleChange} placeholder={ translation.form.email } className="contact__input" required/>
            <span className="contact__input-error">
              {errors.email}
            </span>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="contact__col">
            <input type="text" name="mobile" value={values.mobile || ""} onChange={useFormValidation.handleChange} placeholder={ translation.form.mobile } className="contact__input" maxLength="12"/>
          </div>
        </div>
        <div className="contact__row">
          <div className="contact__text-box">
            <textarea name="message" id="Message" value={values.message || ""} onChange={useFormValidation.handleChange} placeholder={ translation.form.message } className="contact__text"></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="contact__row">
          <div className="contact__text-box">
            <button type="submit" className={`contact__button ${!isFormValid && " contact__button_disabled"}`} disabled={state.submitting} onClick={() => {setIsSubmit(true); setTimeout(() => resetForm(), 2000)}}>
              { translation.form.send }
            </button>
          </div>
        </div>
      </form>
    </section>
    <InfoTooltip
      isSubmit={isSubmit}
      setIsSubmit={setIsSubmit}
    />
    </>
  );
}

export default Contact;