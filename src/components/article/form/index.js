import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Button, Grid, Typography, useTheme} from "@material-ui/core";
import renderField from "../../redux-form/aritcles";
import articles from "../../../redux/slices/articles";
import useStyles from "./style";
import {useRouter} from "next/router";

function Form(props) {
  const {handleSubmit, pristine, reset, submitting} = props;
  const route = useRouter();
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container justifyContent='center'>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Typography align="center" variant="h4" component="h2">
          Form
        </Typography>
        <Field
          name="name"
          component={renderField}
          label="Name"
          variant="outlined"
        />
        <Field
          name="title"
          component={renderField}
          label="Title"
          variant="outlined"
        />
        <Field
          name="description"
          label="Description"
          variant="outlined"
          rows={4}
          component={renderField}
        />
        <Grid container className={classes.containerButton}>
          <Button type="submit" variant="contained"color="primary" disabled={pristine || submitting}>
            Submit
          </Button>
          <Button variant="contained" color="secondary" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </Button>
        </Grid>
      </form>
    </Grid>
  )
}

Form = reduxForm({
  form: 'articles',
})(Form);

export default Form;
