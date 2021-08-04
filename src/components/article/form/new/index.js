import React, {useState} from "react";
import Form from "../";
import {db} from "../../../../../firebase";
import {useRouter} from "next/router";

function NewForm() {

  const router = useRouter();

  const onSubmit = (values) => {
    console.log('EDIT values', values);
    // Add a new document with a generated id.
    db.collection("articles").add({
      name: values.name,
      title: values.title,
      description: values.description
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return router.push(`articles/${docRef.id}`);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <Form onSubmit={onSubmit}/>
  )
}

export default NewForm;
