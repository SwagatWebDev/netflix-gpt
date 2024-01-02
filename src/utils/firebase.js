// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1FtA8211u1ILUDqoBlntKOgjWoiWnEX4",
    authDomain: "netflixgpt-a2136.firebaseapp.com",
    projectId: "netflixgpt-a2136",
    storageBucket: "netflixgpt-a2136.appspot.com",
    messagingSenderId: "453696244664",
    appId: "1:453696244664:web:f7aefebae61d2b0a0d5d4d",
    measurementId: "G-1H5TEMKW7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
