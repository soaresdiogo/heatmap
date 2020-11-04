import { useState, useEffect } from 'react';

import { houseService } from '../services/houseService';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    zipCode: '',
    number: '',
    latitude: '',
    longitude: '',
    residentNumber: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    if (isSubmitting) {
      houseService.create(values).then(() => {
        setValues({
          zipCode: '',
          number: '',
          latitude: '',
          longitude: '',
          residentNumber: '',
        });
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
