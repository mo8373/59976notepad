import firebase from "firebase/app";
import "firebase/database";
import "firebase/firebase-auth";

var firebaseConfig = {
  apiKey: "AIzaSyC0kPka9KEEQ9gE-yIhqbM1F5gP_daeErM",
  authDomain: "notescreater.firebaseapp.com",
  databaseURL: "https://notescreater-default-rtdb.firebaseio.com",
  projectId: "notescreater",
  storageBucket: "notescreater.appspot.com",
  messagingSenderId: "676745806355",
  appId: "1:676745806355:web:690fee5c20e84a9a8a75e6",
  measurementId: "G-S0YYNYX4VT"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
