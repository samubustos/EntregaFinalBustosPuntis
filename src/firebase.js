// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcuFwYfv2up5A-rkB4CeZGaDfA-ayyzPk",
  authDomain: "react-3668e.firebaseapp.com",
  projectId: "react-3668e",
  storageBucket: "react-3668e.appspot.com",
  messagingSenderId: "417541992735",
  appId: "1:417541992735:web:21f5852d0b65c669c2c02a",
  measurementId: "G-1JMM6YZ224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
