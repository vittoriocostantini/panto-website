// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBMwo8AWINOT37oVAi_PitsqrZD78_3Orw",
  authDomain: "panto-bfeaa.firebaseapp.com",
  projectId: "panto-bfeaa",
  storageBucket: "panto-bfeaa.firebasestorage.app",
  messagingSenderId: "304101956706",
  appId: "1:304101956706:web:bb3ba40f18a4650560c53b",
  measurementId: "G-L68G45F9ZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {  auth, provider };
