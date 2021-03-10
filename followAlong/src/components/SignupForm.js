import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import useForm from './../hooks/useForm';
import Button from "../theme/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));


const initialState = {
  firstName: "",
  lastName: ""
}

const useLocalStorage = (key, initialValue) => {
  //when we create state, check if value is in localStorage.
  //if it is in localStorage, make the db value our initialstate.
  //if it is not in localStorage, use initialValue and put that in localStorage
  //if we modify our state, we sent those same changes to localstorage

  const [ value, setValue ] = useState(initialValue);
}

export default function SignupForm() {
  const classes = useStyles();
  const [name, setName ] = useState("");


  const [clearForm, handleChanges, values] = useForm(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${values.firstName} ${values.lastName}` );
  };

  return (
    <div p={2} className="form">
      <h1>{name}</h1>
      <button onClick={()=>{
        setName("Allison");
      }}>press</button>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />

          <TextField    
            id="outlined-name"
            label="Last Name"
            className={classes.textField}
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}