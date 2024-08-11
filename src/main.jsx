import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwyTa_ya7unJ_ClyoOIBtt9-AF-TCqPuk",
  authDomain: "catalogo-marketing.firebaseapp.com",
  projectId: "catalogo-marketing",
  storageBucket: "catalogo-marketing.appspot.com",
  messagingSenderId: "566243861243",
  appId: "1:566243861243:web:5280fc6dd7e2c4584b465e",
  measurementId: "G-ZVWBG47LGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// --------------------------------

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
