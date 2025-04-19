// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAflz-xNQoVZLkl8sXMm3iyQZZXCnt_I_c",
  authDomain: "web-app-dd5c8.firebaseapp.com",
  projectId: "web-app-dd5c8",
  storageBucket: "web-app-dd5c8.firebasestorage.app",
  messagingSenderId: "357934595247",
  appId: "1:357934595247:web:2cda5a0ee64f18df9aa85a",
  measurementId: "G-CNJDQ4SXQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app,firebaseConfig} 