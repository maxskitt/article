import React, {useState} from "react";
import {Field, reduxForm} from 'redux-form';
import {Grid, Input, TextField} from "@material-ui/core";

function Form(props) {
  const {handleSubmit, pristine, reset, submitting, initialValues} = props;
  console.log(props);

  const [value, setValue] = useState({initialValues});

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div>
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        {/*<Input {...input} type={type} placeholder={label} />*/}
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

  return (
    <Grid container justify='center'>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field
              name="name"
              component={renderField}
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div>
          <div>
            <Field
              name="title"
              component={renderField}
              type="text"
              placeholder="Tittle"
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <Field name="description" component="textarea"/>
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </Grid>
  )
}

Form = reduxForm({
  form: 'articles',
})(Form);


export default Form;
