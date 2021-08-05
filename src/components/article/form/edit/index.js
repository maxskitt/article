import React, {useEffect, useState} from "react";
import isEmpty from 'lodash/isEmpty';
import Form from "../index";
import {useRouter} from "next/router";
import {initialArticles, updateArticles} from "../../../../saga/articles/api";

function EditForm() {
  const route = useRouter();
  const [initialValues, setInitialValues] = useState({});

  console.log('initialValues', initialValues)

  const onSubmit = (values) => {
    console.log('EDIT values', values);
    updateArticles(values, route.query.id);
  }

  useEffect(() => {
    if (!isEmpty(route.query.id)) {
      // LOAD DATA FROM SERVER DB
      // setInitialValues()
      setInitialValues(initialArticles(route.query.id));
      console.log('fdsf');
    }
  }, [route])

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}/>
  )
}

export default EditForm


// useEffect(() => {
//   console.log('docRef', docRef)
//
//   // setInitialValues(docRef)
// }, [docRef]);
