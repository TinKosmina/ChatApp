import "./App.scss";
import LoginPage from "./Components/LoginPage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
