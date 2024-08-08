// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCR-i9hx3YnowyibqQu0ntIN1nYlqTyJ94",
  authDomain: "vite-contact-74e8b.firebaseapp.com",
  projectId: "vite-contact-74e8b",
  storageBucket: "vite-contact-74e8b.appspot.com",
  messagingSenderId: "823567402530",
  appId: "1:823567402530:web:4da65781714401ac8dec7b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
