import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2ST5oCl2xFQ_fFPc6kHzpwCMc_REa2rM",
  authDomain: "open-aqm-community.firebaseapp.com",
  projectId: "open-aqm-community",
  storageBucket: "open-aqm-community.firebasestorage.app",
  messagingSenderId: "393816950715",
  appId: "1:393816950715:web:4556fd3c9d5f6a55c2669e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
