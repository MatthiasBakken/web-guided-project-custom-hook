import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";

import { useForm } from '../hooks/useForm';

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

export default function SignupForm() {
  const classes = useStyles();
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState('');
  // const [] = useForm(); ??
  // const [phone, setPhone] = useState('');
  const [firstName, setFirstName, email.setEmail] = useForm();


  const handleChanges = e => {
    setFirstName(e.target.value);
  };

  const handleEmailChanges = e => {
    setEmail(e.target.value);
  }

  // const handlePhoneChanges = e -> {}

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${firstName} : ${email}`);
  };

  const clearForm = e => {
    e.preventDefault();
    setFirstName("");
    setEmail("");
  };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            value={firstName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email"
            label="Email"
            className={classes.textField}
            value={email}
            onChange={handleEmailChanges}
            margin="normal"
            variant="outlined"
          />
        </fieldset>
        <div className="flexer">
          <Button color="red" onClick={clearForm}>
            Clear
            </Button>
          <Button color="blue" type="submit">
            Submit
            </Button>
        </div>
      </form>
    </div >
  );
}