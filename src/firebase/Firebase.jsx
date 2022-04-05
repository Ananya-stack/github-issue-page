// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDRrHL3jL18gwRgjnUcyy0n714oJZOL0JM",
  authDomain: "github-signup-and-signin.firebaseapp.com",
  projectId: "github-signup-and-signin",
  storageBucket: "github-signup-and-signin.appspot.com",
  messagingSenderId: "120292924620",
  appId: "1:120292924620:web:68fa44582f890a94f23669",
  measurementId: "G-6KB6BE7TVQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app)

export const auth = getAuth(app); 

export default app;