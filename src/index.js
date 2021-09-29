import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore'


import firebase from "firebase/app";
import "firebase/firestore";

// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqeFNLMQZifd8-CbCvOkjBERf3O4P5TVI",
  authDomain: "cart-9f020.firebaseapp.com",
  projectId: "cart-9f020",
  storageBucket: "cart-9f020.appspot.com",
  messagingSenderId: "606822838886",
  appId: "1:606822838886:web:c3b27037171269a015b3a7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));
// This is the entry point of our app