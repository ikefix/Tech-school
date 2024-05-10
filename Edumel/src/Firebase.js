// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWVoWKesxuOJVOpexogeZv2HfisRrnpOg",
  authDomain: "ogalearn-education.firebaseapp.com",
  projectId: "ogalearn-education",
  storageBucket: "ogalearn-education.appspot.com",
  messagingSenderId: "173204045845",
  appId: "1:173204045845:web:97c1272e656969c7690e1c",
  measurementId: "G-8N2HFKFME8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default (app, auth)