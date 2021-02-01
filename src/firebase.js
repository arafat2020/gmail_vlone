import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC3ML92pr9vLwIeq9u-CF3P-ffgm8mXBYY",
    authDomain: "clone-8b5aa.firebaseapp.com",
    projectId: "clone-8b5aa",
    storageBucket: "clone-8b5aa.appspot.com",
    messagingSenderId: "792510382610",
    appId: "1:792510382610:web:57f649054c2db3ddcd8ecb"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };