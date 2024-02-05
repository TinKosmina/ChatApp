// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGrqtQ-pqBuhkAITnm6wccSRdS6JEDTIk",
  authDomain: "chatapp-af8fc.firebaseapp.com",
  projectId: "chatapp-af8fc",
  storageBucket: "chatapp-af8fc.appspot.com",
  messagingSenderId: "551912800379",
  appId: "1:551912800379:web:8cf0b8f0dbf989c6f2a2de",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
