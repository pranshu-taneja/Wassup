// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBww6hbEFdW5qGw6XZ3WQ0jhbBi4OdOUxI",
  authDomain: "wassup-bc951.firebaseapp.com",
  projectId: "wassup-bc951",
  storageBucket: "wassup-bc951.appspot.com",
  messagingSenderId: "437895432151",
  appId: "1:437895432151:web:fa7d4fa290ce7c17c36d92",
  measurementId: "G-VGC4T7WM31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
