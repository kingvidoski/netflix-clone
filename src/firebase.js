import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOo6OMk6JZS9j6z_Gb_79qcUK6p6e_s4w",
  authDomain: "kingsley-netflix-clone.firebaseapp.com",
  projectId: "kingsley-netflix-clone",
  storageBucket: "kingsley-netflix-clone.appspot.com",
  messagingSenderId: "902839461504",
  appId: "1:902839461504:web:7b58a74d61bb18457d2865",
  measurementId: "G-0NMC0KC3QF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;