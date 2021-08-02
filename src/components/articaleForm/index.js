import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {load as loadAccount} from '../../redux/slices/account';
import {db} from "../../../firebase";
import {Button, Grid, TextField} from "@material-ui/core";

var docRef = db.collection("articles").doc("A");
var state;

docRef.get().then((doc) => {
  if (doc.exists) {
    console.log("Document data:", doc.data());
    state = doc.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});


let InitializeFromStateForm = props => {
  const {handleSubmit, load, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid>
          <Button variant="contained" type="button" onClick={() => load(state)}>Load Account</Button>
        </Grid>
        <Grid>
          <Grid>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name"
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Field
              name="tittle"
              component="input"
              type="text"
              placeholder="Tittle"
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Field name="description" label="description" component="textarea"/>
          </Grid>
        </Grid>
        <Grid>
          <Button variant="contained" color="primary" type="submit" disabled={pristine || submitting}>Submit</Button>
          <Button variant="contained" color="secondary" type="button" disabled={pristine || submitting} onClick={reset}>
            Undo Changes
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState' // a unique identifier for this form
})(InitializeFromStateForm)

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  state => ({
    initialValues: state.account.data, // pull initial values from account reducer
  }),
  {load: loadAccount}, // bind account loading action creator
)(InitializeFromStateForm)

export default InitializeFromStateForm
