// firebaseConfig.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Firebase configuration for user database
const firebaseConfig = {
    apiKey: "AIzaSyApzQyOSgp5TnugZXJEReGC4_7XQffJwqM",
    authDomain: "maven-d02d1.firebaseapp.com",
    projectId: "maven-d02d1",
    storageBucket: "maven-d02d1.appspot.com",
    messagingSenderId: "1005617182114",
    appId: "1:1005617182114:web:d0c674ce02e6e340e06efb"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
