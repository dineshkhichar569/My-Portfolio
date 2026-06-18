import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaLdbkkDuKtFuZFTKYnxb4stECR2LXesc",
  authDomain: "dinesh-portfolio-87327.firebaseapp.com",
  projectId: "dinesh-portfolio-87327",
  storageBucket: "dinesh-portfolio-87327.firebasestorage.app",
  messagingSenderId: "66805698985",
  appId: "1:66805698985:web:a2b93e57a027d4098074b8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);