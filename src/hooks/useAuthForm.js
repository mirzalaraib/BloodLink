// src/hooks/useAuthForm.js
import { useState, useCallback } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validators = {
  fullName: (val) => {
    if (!val.trim()) return 'Full name is required';
    if (val.trim().length < 2) return 'Name must be at least 2 characters';
    return '';
  },
  email: (val) => {
    if (!val.trim()) return 'Email is required';
    if (!EMAIL_REGEX.test(val)) return 'Enter a valid email address';
    return '';
  },
  password: (val) => {
    if (!val) return 'Password is required';
    if (val.length < 6) return 'Password must be at least 6 characters';
    return '';
  },
  confirmPassword: (val, allValues) => {
    if (!val) return 'Please confirm your password';
    if (val !== allValues.password) return 'Passwords do not match';
    return '';
  },
};

/**
 * useAuthForm — custom hook for managing auth form state & validation
 * @param {'login' | 'register'} formType
 */
const useAuthForm = (formType) => {
  const initialValues = formType === 'login'
    ? { email: '', password: '' }
    : { fullName: '', email: '', password: '', confirmPassword: '' };

  const [values, setValues]   = useState(initialValues);
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error on change if field was touched
    if (touched[name]) {
      const err = validators[name]?.(value, { ...values, [name]: value }) || '';
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  }, [values, touched]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validators[name]?.(value, values) || '';
    setErrors((prev) => ({ ...prev, [name]: err }));
  }, [values]);

  const validate = useCallback(() => {
    const fields = Object.keys(initialValues);
    const newErrors = {};
    fields.forEach((field) => {
      const err = validators[field]?.(values[field], values) || '';
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    setTouched(fields.reduce((acc, f) => ({ ...acc, [f]: true }), {}));
    return Object.keys(newErrors).length === 0;
  }, [values]);

  const handleSubmit = useCallback((onSubmit) => async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      // Simulate API call delay — replace with real API call later
      await new Promise((res) => setTimeout(res, 1400));
      await onSubmit?.(values);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  }, [validate, values]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setLoading(false);
    setSuccess(false);
  }, []);

  return {
    values,
    errors,
    touched,
    loading,
    success,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  };
};

export default useAuthForm;
