import { useState, useCallback } from 'react';

/**
 * Custom hook for managing form with validation.
 * 
 * @param {object} initialValues Initial values of the form fields.
 * @param {object} validators Validators for each form field.
 * @param {function} onSubmit Callback for form submission.
 * @returns {object} Form utilities.
 */
const useForm = (initialValues, validators, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change event.
  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  }, []);

  // Handle form submission.
  const handleSubmit = useCallback(async (event) => {
    if (event) event.preventDefault();

    // Validate form data.
    const newErrors = validate(values, validators);
    setErrors(newErrors);

    // Check if errors are empty and submit.
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      await onSubmit(values);
      setIsSubmitting(false);
    }
  }, [values, onSubmit, validators]);

  // Validate form data against validators.
  const validate = (values, validators) => {
    let errors = {};

    for (let key in validators) {
      const value = values[key];
      const validator = validators[key];
      const errorMessage = validator(value, values); // second arg is the whole values object in case cross-field validation is needed.
      if (errorMessage) {
        errors[key] = errorMessage;
      }
    }

    return errors;
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};

export default useForm;
