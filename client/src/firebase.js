// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "safespace-9831a.firebaseapp.com",
  projectId: "safespace-9831a",
  storageBucket: "safespace-9831a.appspot.com",
  messagingSenderId: "1000961138708",
  appId: "1:1000961138708:web:c1bd30af2172f02fb20701",
  measurementId: "G-5FLZZH5KHY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

