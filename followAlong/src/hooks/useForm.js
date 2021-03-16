import { useState } from 'react';

export const useForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState('');

  // const handleChanges = e => {
  //   setFirstName(e.target.value);
  // };

  // const handleEmailChanges = e => {
  //   setEmail(e.target.value);
  // }

  const handleChanges = e => {

  }

  const clearForm = e => {
    e.preventDefault();
    setFirstName("");
    setEmail("");
  };

  return [firstName, email, handleChanges, clearForm];
}