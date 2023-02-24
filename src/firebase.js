import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjwsBuzeyAYXcKNsOBDFwYtcdvdbnoRGY",
  authDomain: "netflix-clone-d0547.firebaseapp.com",
  projectId: "netflix-clone-d0547",
  storageBucket: "netflix-clone-d0547.appspot.com",
  messagingSenderId: "888367158455",
  appId: "1:888367158455:web:55d9868056c11d9c41e932"
};
 

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
