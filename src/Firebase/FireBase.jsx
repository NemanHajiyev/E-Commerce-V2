import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBXmMtOZ1lWLiCbOuQeTznGhrOaspjs6uU",
    authDomain: "e-commercev2-12b31.firebaseapp.com",
    projectId: "e-commercev2-12b31",
    storageBucket: "e-commercev2-12b31.firebasestorage.app",
    messagingSenderId: "623298535615",
    appId: "1:623298535615:web:3da31cb1a7a96cf40fa60a",
    measurementId: "G-29PDN6E5ZY"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
