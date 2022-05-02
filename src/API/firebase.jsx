import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-UWOqamJco5sj2YjFtKEbIKYDTeXXuYk",
    authDomain: "fermentumfabercervezas.firebaseapp.com",
    projectId: "fermentumfabercervezas",
    storageBucket: "fermentumfabercervezas.appspot.com",
    messagingSenderId: "390597431143",
    appId: "1:390597431143:web:91ab08a44195cf1b5269c2",
    measurementId: "G-GJZ3NSW1WB",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
