// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDka2tOAxuFBZqvoGhVlTsgIdMngwxqk1E",
  authDomain: "clonig-8d9be.firebaseapp.com",
  projectId: "clonig-8d9be",
  storageBucket: "clonig-8d9be.firebasestorage.app",
  messagingSenderId: "637402806490",
  appId: "1:637402806490:web:ba3aed55283cf150d9cde3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth