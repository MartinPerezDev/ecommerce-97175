import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0knzu5mx_dqX4LpfQ6arahD0sBwLbKho",
  authDomain: "react-97175.firebaseapp.com",
  projectId: "react-97175",
  storageBucket: "react-97175.firebasestorage.app",
  messagingSenderId: "39122079797",
  appId: "1:39122079797:web:5df18a972045427b6a217c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
