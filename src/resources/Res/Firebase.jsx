// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAzH6QfjQKTOYxadwMi77hipYRmEFSHZnM",

  authDomain: "qrvistahosting.firebaseapp.com",

  projectId: "qrvistahosting",

  storageBucket: "qrvistahosting.appspot.com",

  messagingSenderId: "519398921729",

  appId: "1:519398921729:web:918a34969128cdad3bd200",

  measurementId: "G-6DYJ1RNZ9R"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);