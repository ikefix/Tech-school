import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyCWVoWKesxuOJVOpexogeZv2HfisRrnpOg",
  authDomain: "ogalearn-education.firebaseapp.com",
  projectId: "ogalearn-education",
  storageBucket: "ogalearn-education.appspot.com",
  messagingSenderId: "173204045845",
  appId: "1:173204045845:web:97c1272e656969c7690e1c",
  measurementId: "G-8N2HFKFME8"
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
reportWebVitals();
