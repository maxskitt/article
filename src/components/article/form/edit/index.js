import React, { useEffect, useState } from "react";
import isEmpty from 'lodash/isEmpty';
import Form from "../index";
import {useRouter} from "next/router";
import {db} from "../../../../../firebase";

function EditForm() {
  const route = useRouter();
  const [initialValues, setInitialValues] = useState({});
  let docRef = db.collection("articles").doc("A");

  const onSubmit = (values) => {
    console.log('EDIT values', values)
    // Add a new document in collection "cities"

    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        setInitialValues(doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  useEffect(() => {
    if (!isEmpty(route.query.id)) {
      // LOAD DATA FROM SERVER DB
      // setInitialValues()
    }
  }, [route])

  return(
    <Form initialValues={initialValues} onSubmit={onSubmit} />
  )
}
export default EditForm

