import { useState } from 'react';

export const useForm = () => {
  const [state, setState] = useState({});

  return [varOne, setVarOne, varTwo, setVarTwo];
}