import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlnhpGWEXhDhZqndZY3sZBv3lFBNqee80",
    authDomain: "olx-clone-9d6eb.firebaseapp.com",
    projectId: "olx-clone-9d6eb",
    storageBucket: "olx-clone-9d6eb.appspot.com",
    messagingSenderId: "313394632365",
    appId: "1:313394632365:web:d108129e36a41e4e8c1824",
    measurementId: "G-20Z8QBTFC6"
  };

export const Firebase = initializeApp(firebaseConfig);   
export const firestore = getFirestore(Firebase);
// export default firestore




// import firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'YOUR_PROJECT_ID',
//   // Add other Firebase configuration properties here
// };

// firebase.initializeApp(firebaseConfig);
