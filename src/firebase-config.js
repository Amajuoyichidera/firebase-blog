import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBM3vjHDfKKdH5uOtfej66BJeY-MBRAEQU",
    authDomain: "fir-blog-a1339.firebaseapp.com",
    projectId: "fir-blog-a1339",
    storageBucket: "fir-blog-a1339.appspot.com",
    messagingSenderId: "800476879092",
    appId: "1:800476879092:web:69e851c654ac3feda266a1",
    measurementId: "G-NWMMLRCB0W"
  };

  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();