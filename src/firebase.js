// import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsnqJMcu7n4nj2kNJ0LuSFpjVbXX4OsOk",
  authDomain: "challenge-81f6e.firebaseapp.com",
  projectId: "challenge-81f6e",
  storageBucket: "challenge-81f6e.appspot.com",
  messagingSenderId: "778261875949",
  appId: "1:778261875949:web:4d5063247754eecd1a90e4",
  measurementId: "G-7RD06JVNC3"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };