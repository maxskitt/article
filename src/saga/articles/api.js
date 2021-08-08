import firebase from "firebase";
import {db} from "../api";

function fetchArticles() {
  const docRef = db.collection("articles");
  return docRef.get().then((querySnapshot) => {
    let arr = []
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      arr.push({...{id: doc.id}, ...doc.data()});
    });
    return arr;
  });
}

function initialArticles(router) {
  const docRef = db.collection("articles").doc(router);
   return docRef.get().then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      return doc.data()
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}

function pushArticles(values) {
  // Add a new document with a generated id.
  db.collection("articles").add({
    name: values.name,
    title: values.title,
    description: values.description,
    lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

function updateArticles(values, router) {

  db.collection("articles").doc(router).update({
    name: values.name,
    title: values.title,
    description: values.description,
    lastSeen: firebase.firestore.FieldValue.serverTimestamp()
  })
    .then(() => {
      console.log("Document successfully updated!");
    });
}

export {fetchArticles, pushArticles, updateArticles, initialArticles}


// useEffect(() => {
//   docRef.get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//       dispatch(articlesRequested({...{id: doc.id}, ...doc.data()}));
//     });
//
//   });
// }, [route])


// docRef.get().then((doc) => {
//     if (doc.exists) {
//       console.log("Document data:", doc.data());
//       p = doc.data();
//     } else {
//       console.log("No such document!");
//     }
//   }).catch((error) => {
//     console.log("Error getting document:", error);
//   });

import {useState} from "react";
import {last} from "lodash";

// const docRef = db.collection("articles").doc(route.query.id);
//
// docRef.get().then((doc) => {
//   if (doc.exists) {
//     console.log("Document data:", doc.data());
//     // setInitialValues(doc.data());
//
//     //  dispatch(articleRequested(doc.data()));
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }).catch((error) => {
//   console.log("Error getting document:", error);
// });

// const docRef = db.collection("articles");
//
// console.log(docRef)
//
// docRef.get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//
//     console.log(doc.id, " => ", doc.data());
//   });
// });
