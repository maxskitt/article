import firebase from "firebase";
import {db} from "../api";
import {ceil} from "lodash";

function fetchArticlesCount() {

  db.collection('articles').get().then(snap => {
    return  snap.size
  });

  return ceil(10 / 3);
}

function fetchArticles(action) {
  const docRef = db.collection("articles").limit((action * 3));
  return docRef.get().then((querySnapshot) => {
    let arr = []
    querySnapshot.forEach((doc) => {
      arr.push({...{id: doc.id}, ...doc.data()});
    });
    return arr;
  });
}

function initialArticles(router) {
  const docRef = db.collection("articles").doc(router);
  return docRef.get().then((doc) => {
    if (doc.exists) {
      return doc.data()
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
}

function pushArticles(values) {
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

function deleteArticles(router) {

  db.collection("articles").doc(router).delete().then(() => {
    console.log("Document successfully deleted!");
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
}

export {fetchArticlesCount, fetchArticles, pushArticles, updateArticles, initialArticles, deleteArticles}
