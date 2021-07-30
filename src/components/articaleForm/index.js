import React from 'react';
import {Field, reduxForm} from "redux-form";

function ArticalForm() {

  const handleSubmit = (event) => {

  };

  return (
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <div><Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
        </div>
        <label>Title</label>
        <div><Field
          name="title"
          component="input"
          type="text"
          placeholder="title"
        />
        </div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </form>
  );
}

export default reduxForm({
  form: 'articles',
})(ArticalForm);;
