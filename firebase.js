// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAgi1z8no43N_D7LOHyVTu-iHuojqLVVw",
  authDomain: "inventory-management-2c237.firebaseapp.com",
  projectId: "inventory-management-2c237",
  storageBucket: "inventory-management-2c237.appspot.com",
  messagingSenderId: "100928134121",
  appId: "1:100928134121:web:3ca235f1ad7a097e4a4978",
  measurementId: "G-LEG5PN9LJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore};