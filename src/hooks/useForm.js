import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    console.log('inside Hook!');
    console.log(values);
    if (e) e.preventDefault();
    if (e) e.target.reset();

    callback(values);
  };
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [handleSubmit, handleChange, values];
};

export default useForm;
