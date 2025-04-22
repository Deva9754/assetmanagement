// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add this


const firebaseConfig = {
  apiKey: "AIzaSyBZrCJ_DOarn3n7GazoKzAH8rhNJk8gtR4",
  authDomain: "assetmanagement-6cc97.firebaseapp.com",
  projectId: "assetmanagement-6cc97",
  storageBucket: "assetmanagement-6cc97.firebasestorage.app",
  messagingSenderId: "467048722925",
  appId: "1:467048722925:web:1a0be66fd81b48f10177e4",
  measurementId: "G-LZE03RYZJ0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Add this line
