import { useState } from 'react';

export const useForm = () => {
  const [state, setState] = useState({});

  return [state, setState, handleChanges, clearForm];
}