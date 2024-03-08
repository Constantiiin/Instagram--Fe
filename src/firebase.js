// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA99nfJZs6SsA5KiV_jycI-pK093gSLaaM",
  authDomain: "instagram-project-ccc.firebaseapp.com",
  projectId: "instagram-project-ccc",
  storageBucket: "instagram-project-ccc.appspot.com",
  messagingSenderId: "369078104107",
  appId: "1:369078104107:web:ed34df901e7ca74308ba6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
