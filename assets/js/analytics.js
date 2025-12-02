// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoSG06-3eljCXq77BQoNPxtXetkW3-LlI",
  authDomain: "arab-world-dotnow.firebaseapp.com",
  projectId: "arab-world-dotnow",
  storageBucket: "arab-world-dotnow.firebasestorage.app",
  messagingSenderId: "454495786626",
  appId: "1:454495786626:web:914545a7f41d168968469b",
  measurementId: "G-QJ9RTFVE8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);