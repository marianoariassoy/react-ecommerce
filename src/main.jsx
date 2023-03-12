//Dependecies
import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";

//Components
import App from "./App";

//Context
import { CartProvider } from "./context/cartContext";

//Styles
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyDMu7HbfxqGNsTmVsni6J5i4bTYBASS5JE",
  authDomain: "react-ecommerce-a8d7d.firebaseapp.com",
  projectId: "react-ecommerce-a8d7d",
  storageBucket: "react-ecommerce-a8d7d.appspot.com",
  messagingSenderId: "473682579071",
  appId: "1:473682579071:web:215581f1f1df949f25394a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
