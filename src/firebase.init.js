// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApSGOekq3V8SsKsovqQtx0SE2BJgCOf7E",
  authDomain: "moto-sport.firebaseapp.com",
  projectId: "moto-sport",
  storageBucket: "moto-sport.appspot.com",
  messagingSenderId: "696149424938",
  appId: "1:696149424938:web:8a81350c03a87443c8fc53",
  measurementId: "G-5CS1CDB3FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;