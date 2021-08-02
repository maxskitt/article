import React from "react";
import Form from "../index";

function NewForm() {
  const onSubmit = (values) => {
    console.log('EDIT values', values)

  }

  return(
    <Form onSubmit={onSubmit} />
  )
}
export default NewForm
