import { useState } from 'react';

export const useForm = () => {
  const [state, setState] = useState({});

  const handleChanges = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    this.setState({});
  }

  return [state, clearForm, handleChanges];
}