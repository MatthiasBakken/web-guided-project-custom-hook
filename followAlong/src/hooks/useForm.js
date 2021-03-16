import { useState } from 'react';

export const useForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState('');

  return [firstName, setFirstName, email, setEmail];
}