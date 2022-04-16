// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZM-iNHg-eqSJK9B13k3TojukuXEC1YJ8",
  authDomain: "conquerself-8580b.firebaseapp.com",
  projectId: "conquerself-8580b",
  storageBucket: "conquerself-8580b.appspot.com",
  messagingSenderId: "335813116103",
  appId: "1:335813116103:web:250b29b208208f6dbdbee2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
