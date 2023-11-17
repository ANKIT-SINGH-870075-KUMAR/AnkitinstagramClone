// import firebase from "./firebase";
// import {getAuth} from "firebase/auth"

// firebase.initializeApp({
//     apiKey: "AIzaSyDUSg4CLoVFl5lA4hv-mC9AIVJuG2BY50o",
//     authDomain: "deepika-instagramclone.firebaseapp.com",
//     projectId: "deepika-instagramclone",
//     storageBucket: "deepika-instagramclone.appspot.com",
//     messagingSenderId: "725204762480",
//     appId: "1:725204762480:web:9c44f0aa6a41791df8d9b5"
// });

// export const auth=getAuth();
// const storage=firebase.storage();

// export {storage,auth};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUSg4CLoVFl5lA4hv-mC9AIVJuG2BY50o",
  authDomain: "deepika-instagramclone.firebaseapp.com",
  projectId: "deepika-instagramclone",
  storageBucket: "deepika-instagramclone.appspot.com",
  messagingSenderId: "725204762480",
  appId: "1:725204762480:web:9c44f0aa6a41791df8d9b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();