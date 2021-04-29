import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

// const firebase = require('firebase');
// require('firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDyufsUuHkitK0icNi-SNirUuKMRPs1Bww",
    authDomain: "evernote-clone-1de9b.firebaseapp.com",
    projectId: "evernote-clone-1de9b",
    storageBucket: "evernote-clone-1de9b.appspot.com",
    messagingSenderId: "238735713007",
    appId: "1:238735713007:web:cc55dc0d34e4f9d584311a",
    measurementId: "G-GLPNC22V9P"

}

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

