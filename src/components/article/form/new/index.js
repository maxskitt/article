import React from "react";
import Form from "../";
import {db} from "../../../../../firebase";

function NewForm() {

  const onSubmit = (values) => {
    console.log('EDIT values', values);

    db.collection("articles").doc('1').set({
      name: values.name,
      tittle: values.tittle,
      description: values.description
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

  }

  return (
    <Form onSubmit={onSubmit}/>
  )
}

export default NewForm
