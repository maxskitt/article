import React, {useEffect, useState} from "react";
import isEmpty from 'lodash/isEmpty';
import Form from "../index";
import {useRouter} from "next/router";
import {initialArticles, updateArticles} from "../../../../saga/articles/api";

function EditForm() {
  const route = useRouter();
  const [initialValues, setInitialValues] = useState();

  const onSubmit = (values) => {
    console.log('EDIT values', values);
    updateArticles(values, route.query.id);
  }

    async function initialArticlesAsync(router) {
        let x = await initialArticles(router);
      setInitialValues(x)
    }

  useEffect(() => {
    if (!isEmpty(route.query.id)) {
      // LOAD DATA FROM SERVER DB
      initialArticlesAsync(route.query.id).then();
    }
  }, [route])

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues} />
  )
}

export default EditForm;
