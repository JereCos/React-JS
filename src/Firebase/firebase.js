// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUjgv0k0uWM4hKNdssSghoLRnlg4e7IaE",
    authDomain: "e-commerce-react-js-e0d3d.firebaseapp.com",
    projectId: "e-commerce-react-js-e0d3d",
    storageBucket: "e-commerce-react-js-e0d3d.appspot.com",
    messagingSenderId: "209816616327",
    appId: "1:209816616327:web:18ad132a441f4cae40a722",
    measurementId: "G-YFWT0FNL4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);