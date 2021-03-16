import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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

export default function SignupForm() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState('');


  const handleChanges = e => {
    setFirstName(e.target.value);
  };

  const handleEmailChanges = e => {
    setEmail(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert(firstName);
  };

  const clearForm = e => {
    e.preventDefault();
    setFirstName("");
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
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
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
    </div >
  );
}