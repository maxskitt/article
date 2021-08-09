import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDpQQ2taggSJjFXC1fQNxwS1klFYwH7mA0",
  authDomain: "new-articles-524da.firebaseapp.com",
  projectId: "new-articles-524da",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export {db};
