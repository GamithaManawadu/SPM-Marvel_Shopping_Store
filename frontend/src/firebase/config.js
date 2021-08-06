
import firebase from 'firebase/app';
import 'firebase/storage';

import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvY7HkSCY36dqamV_CSBzQiRLvKH2Lh9Y",
  authDomain: "icaf-af.firebaseapp.com",
  projectId: "icaf-af",
  storageBucket: "icaf-af.appspot.com",
  messagingSenderId: "321696646077",
  appId: "1:321696646077:web:76e102bacd0a10c1d5c8d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage,projectFirestore,timestamp };