import firebase from "firebase";
import {db} from "../api";

function fetchArticles(action) {
  const docRef = db.collection("articles")
  let countArticles

  if (action.search) {

    db.collection('articles').where("title", "==", action.search).get().then(snap => {
      countArticles = snap.size
    });

    return docRef.where("title", "==", action.search).limit(action.limit * 3).get().then((querySnapshot) => {
      let arr = []
      querySnapshot.forEach((doc) => {
        arr.push({...{id: doc.id}, ...doc.data()});
      });
      arr.push(countArticles)
      return arr;
    });
  } else if (action.sort) {
    db.collection('articles').get().then(snap => {
      countArticles = snap.size
    });

    return docRef.orderBy("lastSeen", action.sort).limit(action.limit * 3).get().then((querySnapshot) => {
      let arr = []
      querySnapshot.forEach((doc) => {

        arr.push({...{id: doc.id}, ...doc.data()});
      });
      arr.push(countArticles)
      return arr;
    });
  } else {
    db.collection('articles').get().then(snap => {
      countArticles = snap.size
    });

    return docRef.limit(action.limit * 3).get().then((querySnapshot) => {
      let arr = []
      querySnapshot.forEach((doc) => {

        arr.push({...{id: doc.id}, ...doc.data()});
      });
      arr.push(countArticles)
      return arr;
    });
  }
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

export {fetchArticles, pushArticles, updateArticles, initialArticles, deleteArticles}


// db.collection('articles').where("name" || "title" || "description","==", action.search).get().then(snap => {
//   count = snap.size
// });
// return docRef.where("name" || "title" || "description", "==", action.search).get().then((querySnapshot) => {
//   let arr = []
//   querySnapshot.forEach((doc) => {
//     arr.push({...{id: doc.id}, ...doc.data()});
//   });
//   arr.push(count)
//   return arr;
// });


// .orderBy("lastSeen", action.sort)
