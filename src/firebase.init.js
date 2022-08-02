// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGFoF_cQidKfSZxd0htTbhRzMwFLwb6Tw",
  authDomain: "moto-sport-869ac.firebaseapp.com",
  projectId: "moto-sport-869ac",
  storageBucket: "moto-sport-869ac.appspot.com",
  messagingSenderId: "795630921736",
  appId: "1:795630921736:web:c7cfcf5974218c5a6f89bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;