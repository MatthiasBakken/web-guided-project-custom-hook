import { useState } from 'react';

export const useForm = (initialValues) => {
  const [state, setState] = useState(initialValues);

  const handleChanges = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = e => {
    e.preventDefault();
    // setState(initialValues);
  }

  return [state, clearForm, handleChanges];
}