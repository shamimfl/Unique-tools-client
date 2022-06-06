// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD9XixQrVOx2kL38TyF_ufDh2-inwvqO4",
  authDomain: "unique-tools-shamim.firebaseapp.com",
  projectId: "unique-tools-shamim",
  storageBucket: "unique-tools-shamim.appspot.com",
  messagingSenderId: "588014771698",
  appId: "1:588014771698:web:a720fbaa4938687f011f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;