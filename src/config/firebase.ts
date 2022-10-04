// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2x_1sA4KvmrZctArDrbZ3VNQw39OMUcM",
  authDomain: "react-cource-c725d.firebaseapp.com",
  projectId: "react-cource-c725d",
  storageBucket: "react-cource-c725d.appspot.com",
  messagingSenderId: "9974734951",
  appId: "1:9974734951:web:d62371b434e7ac78a2b4c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)