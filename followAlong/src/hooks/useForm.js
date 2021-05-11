import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValues, cb) => {
  // const [state, setState] = useState(initialValues);
  const [state, setState] = useLocalStorage(key, initialValues);

  const handleChanges = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = e => {
    e.preventDefault();
    setState(initialValues);
  }

  const handleSubmit = e => {
    e.preventDefault();
    cb();
  }

  return [state, clearForm, handleSubmit, handleChanges];
}