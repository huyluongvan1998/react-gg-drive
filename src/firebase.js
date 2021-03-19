import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnkfrr7IbvO2MnmwzvoyZivvTico8H5Dc",
  authDomain: "react-gg-drive.firebaseapp.com",
  projectId: "react-gg-drive",
  storageBucket: "react-gg-drive.appspot.com",
  messagingSenderId: "690649926846",
  appId: "1:690649926846:web:37b2ce5ece691d0ab522ef",
  measurementId: "G-L4S3V4L3X4",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

const db = firebaseApp.firestore();

export { auth, provider, storage, db };
