// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpuBPtR1AHQ2NLG5Ska7JYR8jW5V1TBfI",
  authDomain: "runstat-test.firebaseapp.com",
  projectId: "runstat-test",
  storageBucket: "runstat-test.appspot.com",
  messagingSenderId: "623369919561",
  appId: "1:623369919561:web:34b4f552e81bde42dff398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);