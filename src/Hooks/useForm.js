import { useState } from 'react'
import { helpHttp } from '../Helpers/helpHttp';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    const fieldErrors = validateForm({ ...form, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldErrors[name]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(form);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      helpHttp()
        .post('https://formsubmit.co/ajax/lucasestebanlps@gmail.com', {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 3000);
        });
    } else {
      setErrors(formErrors);
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit
  };
};





