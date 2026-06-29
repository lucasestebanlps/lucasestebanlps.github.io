import React, { useEffect, useState } from 'react';
import { useForm } from '../../../Hooks/useForm.js';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import { useLanguage } from '../../../i18n/LanguageContext';
import Spinner from '../../Spinner/Spinner.jsx';
import './contact-form.css';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const validationsForm = (form, t) => {
  let errors = {};
  const regexName = /^[A-Za-zÀ-ÿ\s]+$/;
  const regexEmail = /^[\w+.-]+@[\w.-]+\.\w{2,}$/;
  const regexMessage = /^.{1,999}$/;

  if (!form.name.trim()) {
    errors.name = t.contact.errors.nameRequired;
  } else if (!regexName.test(form.name.trim())) {
    errors.name = t.contact.errors.nameLetters;
  }

  if (!form.email.trim()) {
    errors.email = t.contact.errors.emailRequired;
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = t.contact.errors.emailInvalid;
  }

  if (!form.message.trim()) {
    errors.message = t.contact.errors.messageRequired;
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = t.contact.errors.messageLength;
  }

  return errors;
};

export default function ContactForm() {
  const { t } = useLanguage();
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, (form) => validationsForm(form, t));

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Habilitar el botón solo cuando todos los campos estén completos y no haya errores
  useEffect(() => {
    const isFormComplete = form.name && form.email && form.message;
    const hasErrors = Object.values(errors).some(error => error);
    setIsButtonDisabled(!(isFormComplete && !hasErrors));
  }, [form, errors]);

  const handleInputChange = (e) => {
    handleChange(e);
    const inputElement = e.target;
    const inputValue = inputElement.value.trim();
    inputElement.classList.toggle('form__group-input-filled', inputValue.length >= 1 || inputElement.autocomplete === "on");
  };

  return (
    <motion.form
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="form__group">
        <input
          type="text"
          id="name"
          name="name"
          className={errors.name ? 'form__group-input form__group-input-error' : 'form__group-input'}
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="name">{t.contact.name}</label>
        {errors.name && <p className="message-error">{errors.name}</p>}
      </div>
      <div className="form__group">
        <input
          type="email"
          id="email"
          name="email"
          className={errors.email ? 'form__group-input form__group-input-error' : 'form__group-input'}
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">{t.contact.email}</label>
        {errors.email && <p className="message-error">{errors.email}</p>}
      </div>
      <div className="form__group group-textarea">
        <textarea
          id="message"
          name="message"
          rows="4"
          className={errors.message ? 'form__group-input form__group-textarea form__group-input-error' : 'form__group-input form__group-textarea'}
          value={form.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <label htmlFor="message">{t.contact.message}</label>
        {errors.message && <p className="message-error">{errors.message}</p>}
      </div>
      <input
        type="submit"
        name="submit"
        value={t.contact.submit}
        disabled={isButtonDisabled}
        className={isButtonDisabled ? 'btn btn-lg form__group-submit btn-disabled' : 'btn btn-lg form__group-submit'}
      />
      {loading && <Spinner />}
      {response && <p className="message-success">{t.contact.success}</p>}
    </motion.form>
  );
}