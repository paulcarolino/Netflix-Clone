import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./global-style";
import "./index.css";
import App from "./App";
import { FireBaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyCCsX8WSXYznvkZXQuTwubo2NRdbQTUvEg",
  authDomain: "react-netflix-ba43c.firebaseapp.com",
  projectId: "react-netflix-ba43c",
  storageBucket: "react-netflix-ba43c.appspot.com",
  messagingSenderId: "527456232473",
  appId: "1:527456232473:web:e1b20d55e295bd22233688",
  measurementId: "G-6KHL2054HK",
};

const firebase = window.firebase.initializeApp(config);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FireBaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FireBaseContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
