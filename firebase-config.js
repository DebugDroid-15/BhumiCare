// firebase-config.js
// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb7wkZWmXUqslNzykMRhcp-WcYu1Lrj3E",
  authDomain: "bhumicare-b6713.firebaseapp.com",
  projectId: "bhumicare-b6713",
  storageBucket: "bhumicare-b6713.firebasestorage.app",
  messagingSenderId: "831263912315",
  appId: "1:831263912315:web:cf22af52e3f8ad58c14dde",
  measurementId: "G-MF1C9NQNZ0",
  databaseURL: "https://bhumicare-b6713-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
