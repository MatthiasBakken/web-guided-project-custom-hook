import { useState } from 'react';

export const useLocalStorage = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [value, setValue];
}