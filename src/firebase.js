import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCLf8CzHCXykf21TDsgk90pi3a0EgHFUKQ",
  authDomain: "disney-clone-4bfa9.firebaseapp.com",
  projectId: "disney-clone-4bfa9",
  storageBucket: "disney-clone-4bfa9.appspot.com",
  messagingSenderId: "404713717089",
  appId: "1:404713717089:web:7ff1d921af3c63ea1b1920",
  measurementId: "G-VS1SNEY6ZX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
