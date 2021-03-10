import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    //when we create state, check if value is in localStorage.
    //if it is in localStorage, make the db value our initialstate.
    //if it is not in localStorage, use initialValue and put that in localStorage
    //if we modify our state, we sent those same changes to localstorage
  
    const [ value, setValue ] = useState(()=> {
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
      }
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    });
  
    const setLSValue = value => {
      setValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    return [value, setLSValue]
  }

  export default useLocalStorage;