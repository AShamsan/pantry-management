import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const storage = getStorage(app);

export { firestore, auth, storage, analytics };
