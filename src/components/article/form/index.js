import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Button, Grid} from "@material-ui/core";
import {renderFieldName, renderFieldTextArea, renderFieldTitle} from "../../redux-form/aritcles";
import articles from "../../../redux/slices/articles";

function Form(props) {
  const {handleSubmit, pristine, reset, submitting} = props;

  return (
    <Grid container justifyContent='center'>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field
              name="name"
              component={renderFieldName}
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div>
          <div>
            <Field
              name="title"
              component={renderFieldTitle}
              type="text"
              placeholder="title"
            />
          </div>
        </div>
        <div>
          <div>
            <Field name="description" placeholder="description" component={renderFieldTextArea}/>
          </div>
        </div>
        <div>
          <Button type="submit" disabled={pristine || submitting}>
            Submit
          </Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </Button>
        </div>
      </form>
    </Grid>
  )
}

Form = reduxForm({
  form: 'articles',
})(Form);

export default Form;
