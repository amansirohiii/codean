import firebase from "firebase";

var firebaseConfig = {
  databaseURL: "https://console.firebase.google.com",
   apiKey: "AIzaSyDzH2LDvOW85AKrwxpT7Fk_WM6n5c95R24",

  authDomain: "codean-1c5c3.firebaseapp.com",

  projectId: "codean-1c5c3",

  storageBucket: "codean-1c5c3.appspot.com",

  messagingSenderId: "649030090933",

  appId: "1:649030090933:web:34ff45133d4ddd88833efc",

  measurementId: "G-CMWTRCT7YJ"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
