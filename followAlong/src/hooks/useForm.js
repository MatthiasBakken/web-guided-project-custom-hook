import useLocalStorage from './useLocalStorage';

const useForm = (initialValues) => {
    //get our initial state definition
    //pass in our initialValues
    //define all functions using stateful logic
    //return all values needed by our component
    const [ values, setValues ] = useLocalStorage("form", initialValues);
    // const [values, setValues] = useState(initialValues);
  
    const handleChanges = e => {
      setValues({
        ...values,
        [e.target.name] : e.target.value
      });
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValues(initialValues);
    };
  
    return [clearForm, handleChanges, values];
}

export default useForm;