import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";
import { useForm } from "../hooks/useForm";

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
  // const [lastName, setLastName] = useState("");
  const [state, clearForm, handleChanges] = useForm();

  // const handleChanges = e => {
  //   setState({ ...state, firstName: e.target.value });
  // };

  // const handleLastNameChanges = e => {
  //   setState({ ...state, lastName: e.target.value });
  // }

  const handleSubmit = e => {
    e.preventDefault();
    alert(state.firstName + ' ' + state.lastName);
  };

  // const clearForm = e => {
  //   e.preventDefault();
  //   setState({ ...state, firstName: '', lastName: '' })
  // };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            name="firstName"
            value={state.firstName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-lastname"
            label="Last Name"
            className={classes.textField}
            name="lastName"
            value={state.lastName}
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