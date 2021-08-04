import React, {useEffect, useState} from "react";
import isEmpty from 'lodash/isEmpty';
import Form from "../index";
import {useRouter} from "next/router";
import {db} from "../../../../../firebase";
import {useDispatch} from "react-redux";

function EditForm() {
  const route = useRouter();
  const [initialValues, setInitialValues] = useState({});
  let docRef = db.collection("articles").doc(route.query.id);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   articleRequested({initialValues});
  // }, [dispatch]);

  const onSubmit = (values) => {
    console.log('EDIT values', values);
    console.log(initialValues);
  }

  useEffect(() => {
    if (!isEmpty(route.query.id)) {
      // LOAD DATA FROM SERVER DB
      // setInitialValues()
      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          // setInitialValues(doc.data());
          setInitialValues(doc.data());
        //  dispatch(articleRequested(doc.data()));
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      }
      );
    }
  }, [route])

  return (
    <Form onSubmit={onSubmit}/>
  )
}

export default EditForm

