import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useForm = (initialValues, cb) => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState('');
  const [values, setValues] = useLocalStorage(initialValues);

  // const handleChanges = e => {
  //   setFirstName(e.target.value);
  // };

  // const handleEmailChanges = e => {
  //   setEmail(e.target.value);
  // }

  const handleChanges = e => {
    // if (e.target.name === 'firstName') {
    //   setFirstName(e.target.value);
    // } else if (e.target.name === 'email') {
    //   setEmail(e.target.value);
    // }
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    // do something!
    cb(values);
  }

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChanges, clearForm, handleSubmit];
}