import { useState } from 'react';

export const useForm = () => {
  const [varOne, setVarOne] = useState("");
  const [varTwo, setVarTwo] = useState("");

  return [varOne, setVarOne, varTwo, setVarTwo];
}