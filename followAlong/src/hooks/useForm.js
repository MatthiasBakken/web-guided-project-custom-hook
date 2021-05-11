import { useState } from 'react';

export const useForm = () => {
  const [state, setState] = useState({});

  const handleChanges = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = e => {
    e.preventDefault();
    setState({});
  }

  return [state, clearForm, handleChanges];
}