// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPvG6rXH_sz6IiheeWcEiJsAez7IfvvOk",
  authDomain: "fir-practise-3a372.firebaseapp.com",
  projectId: "fir-practise-3a372",
  storageBucket: "fir-practise-3a372.appspot.com",
  messagingSenderId: "995741330799",
  appId: "1:995741330799:web:d14d5578e3ee8a6bbdcc9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();