import { useState } from 'react';

export const useLocalStorage = (initialValue) => {
  const [value, setStoredValue] = useState(initialValue);

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem('loval-storage-item', JSON.stringify(value));
  }

  return [value, setValue];
}