// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "./firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEQ-CY0TewUIh7nBPBuu7kH1xVQYQVq58",
  authDomain: "clone-abcd1.firebaseapp.com",
  projectId: "clone-abcd1",
  storageBucket: "clone-abcd1.appspot.com",
  messagingSenderId: "911919382335",
  appId: "1:911919382335:web:4802bd41b6580fded1dd8a",
  measurementId: "G-B9ZWPDLZB6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
