import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCtxiaNn8j8Ne2VBbWJdnctwVgHgPfWODw",

  authDomain: "chat-88fc1.firebaseapp.com",

  projectId: "chat-88fc1",

  storageBucket: "chat-88fc1.appspot.com",

  messagingSenderId: "955205179584",

  appId: "1:955205179584:web:2905067a41058181fff525"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
