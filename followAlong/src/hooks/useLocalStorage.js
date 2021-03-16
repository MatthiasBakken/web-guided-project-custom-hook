import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setStoredValue] = useState(initialValue);

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [value, setValue];
}