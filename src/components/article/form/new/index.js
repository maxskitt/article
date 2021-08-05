import React from "react";
import Form from "../";
import {useRouter} from "next/router";
import {pushArticles} from "../../../../saga/articles/api";

function NewForm() {

  const router = useRouter();

  const onSubmit = (values) => {
    console.log('EDIT values', values);
    pushArticles(values);
  }

  return (
    <Form onSubmit={onSubmit}/>
  )
}

export default NewForm;
