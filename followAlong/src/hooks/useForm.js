import { useState } from 'react';

export const useForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return [firstName, setFirstName, lastName, setLastName];
}