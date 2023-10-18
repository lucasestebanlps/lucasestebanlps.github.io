import { useForm } from '../../../Hooks/useForm.js';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants.js';
import Spinner from '../../Spinner/Spinner.jsx';
import './contact-form.css';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

const validationsForm = (form) => {
  let errors = {};
  const regexName = /^[A-Za-z\s]+$/;
  const regexEmail = /^[\w+.-]+@[\w.-]+\.\w{2,}$/;
  const regexMessage = /^.{1,999}$/;

  if (!form.name.trim()) {
    errors.name = 'The name field is required.';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'The name field only accepts letters.';
  }

  if (!form.email.trim()) {
    errors.email = 'The email field is required.';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'Please enter a valid email.';
  }

  if (!form.message.trim()) {
    errors.message = 'The message field is required.';
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = 'The message field must not exceed 999 characters.';
  }

  return errors;
};

export default function ContactForm() {
    const {
      form,
      errors,
      loading,
      response,
      handleChange,
      handleSubmit,
    } = useForm(initialForm, validationsForm);
  
    // handle css .form__group-input-filled
    const handleInputChange = (e) => {
        const inputElement = e.target;
        const inputValue = inputElement.value.trim();
        if (inputValue.length >= 1 || inputElement.autocomplete === "on") {
          inputElement.classList.add('form__group-input-filled');
        } else {
          inputElement.classList.remove('form__group-input-filled');
        }
      };

    return (
      <motion.form
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="form__group">
          <input
            type="text"
            id="name"
            name="name"
            className={
              errors.name
                ? 'form__group-input form__group-input-error'
                : 'form__group-input'
            }
            value={form.name}
            onChange={(e) => {
              handleChange(e);
              handleInputChange(e);
            }}
            required
          />
          <label htmlFor="name">Name</label>
          {errors.name && <p className="message-error">{errors.name}</p>}
        </div>
        <div className="form__group">
          <input
            type="email"
            id="email"
            name="email"
            className={
              errors.email
                ? 'form__group-input form__group-input-error'
                : 'form__group-input'
            }
            value={form.email}
            onChange={(e) => {
              handleChange(e);
              handleInputChange(e);
            }}
            required
          />
          <label htmlFor="email">Email</label>
          {errors.email && <p className="message-error">{errors.email}</p>}
        </div>
        <div className="form__group group-textarea">
          <textarea
            id="message"
            name="message"
            rows="4"
            className={
              errors.message
                ? 'form__group-input form__group-textarea form__group-input-error'
                : 'form__group-input form__group-textarea'
            }
            value={form.message}
            onChange={(e) => {
              handleChange(e);
              handleInputChange(e);
            }}
            required
          ></textarea>
          <label htmlFor="message">Message</label>
          {errors.message && <p className="message-error">{errors.message}</p>}
        </div>
        <input
          type="submit"
          name="submit"
          value="Submit"
          onClick={handleSubmit}
          className={
            errors.name || errors.email || errors.message
              ? 'btn btn-lg form__group-submit btn-disabled'
              : 'btn btn-lg form__group-submit'
          }
        />
        {loading && <Spinner />}
        {response && <p className="message-success">Sent successfully!</p>}
      </motion.form>
    );
  }