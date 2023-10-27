import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsQIjgVurE2STSqgHEInxVuJ0Eo_77rgM",
  authDomain: "my-todo-36ebf.firebaseapp.com",
  projectId: "my-todo-36ebf",
  storageBucket: "my-todo-36ebf.appspot.com",
  messagingSenderId: "906232712008",
  appId: "1:906232712008:web:53538f6795ee9badf3c17d",
  measurementId: "G-P6QEQ169F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
