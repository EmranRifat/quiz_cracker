// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATAhEO4g23D3azAKKCx2LFfEFH4xXzW50",
  authDomain: "quiz-app-7ae12.firebaseapp.com",
  projectId: "quiz-app-7ae12",
  storageBucket: "quiz-app-7ae12.appspot.com",
  messagingSenderId: "985965943072",
  appId: "1:985965943072:web:5112df61c100ec74529f45",
  measurementId: "G-RYVQW9120K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;