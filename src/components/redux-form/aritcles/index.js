import {TextField} from "@material-ui/core";
import React from "react";

function renderFieldName({input, placeholder, type, meta: {touched, error}}) {
  return (
    <div>
      <div>
        <TextField
          {...input}
          id="standard-multiline-flexible"
          label={`${placeholder}`}
          multiline
          maxRows={4}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>);
}

const renderFieldTitle = ({input, placeholder, type, meta: {touched, error}}) => (
  <div>
    <div>
      <TextField
        {...input}
        id="standard-multiline-flexible"
        label={`${placeholder}`}
        multiline
        maxRows={4}
        // defaultValue={initialValues.title}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderFieldTextArea = ({input, placeholder, type, meta: {touched, error}}) => (
  <div>
    <div>
      <TextField
        {...input}
        id="standard-multiline-flexible"
        label={`${placeholder}`}
        multiline
        maxRows={4}
        // defaultValue={initialValues.title}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export {renderFieldName, renderFieldTitle, renderFieldTextArea}
