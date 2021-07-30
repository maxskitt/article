import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDpQQ2taggSJjFXC1fQNxwS1klFYwH7mA0",
  authDomain: "new-articles-524da.firebaseapp.com",
  projectId: "new-articles-524da",
  storageBucket: "new-articles-524da.appspot.com",
  messagingSenderId: "970588219140",
  appId: "1:970588219140:web:66041efb99cac5708f5251",
  measurementId: "G-RTNXBG9QBF"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
