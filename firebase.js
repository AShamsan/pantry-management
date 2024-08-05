// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Pru5zsDYtAB12VKbjpK6JjYe60JUmLM",
  authDomain: "pantry-managent.firebaseapp.com",
  projectId: "pantry-managent",
  storageBucket: "pantry-managent.appspot.com",
  messagingSenderId: "578882907039",
  appId: "1:578882907039:web:bdcc1a3623a0a24634abaa",
  measurementId: "G-MYLY6TEJQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}