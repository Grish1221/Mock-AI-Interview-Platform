// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDOqgPMqP8n0gJ9FeMHpKjALZPCKJwjPv0",
  authDomain: "prepwise-df936.firebaseapp.com",
  projectId: "prepwise-df936",
  storageBucket: "prepwise-df936.firebasestorage.app",
  messagingSenderId: "551301693873",
  appId: "1:551301693873:web:560f0e09b76b225fecbd90",
  measurementId: "G-8FRX4RPN32"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)