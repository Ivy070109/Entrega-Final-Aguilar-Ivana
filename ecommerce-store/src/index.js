import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBd1XeKo-7GbOBHw0bnl6nITks01w3l70w",
  authDomain: "ecommercedeepest.firebaseapp.com",
  projectId: "ecommercedeepest",
  storageBucket: "ecommercedeepest.appspot.com",
  messagingSenderId: "923513936468",
  appId: "1:923513936468:web:a747f8ef8e7d7881b1abc1"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

