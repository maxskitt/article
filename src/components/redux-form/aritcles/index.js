import {TextField} from "@material-ui/core";
import React from "react";

function renderField({input, rows, label, variant, meta: {touched, error}}) {
  return (
    <div>
      <div>
        <TextField
          {...input}
          label={label}
          variant={variant}
          multiline
          rows={rows}
        />
        {touched && error && <span>{error}</span>}
      </div>
    </div>);
}

export default renderField;
