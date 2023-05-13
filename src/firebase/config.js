import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF1VTZS6YWmf2WJAPNCI7va6Axqkv-XaM",
  authDomain: "devshop-50335.firebaseapp.com",
  projectId: "devshop-50335",
  storageBucket: "devshop-50335.appspot.com",
  messagingSenderId: "76822216509",
  appId: "1:76822216509:web:eda7caef4f6eaa10820f54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
