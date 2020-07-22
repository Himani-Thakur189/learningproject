import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBzIyAMz9jb2P0zA9Rx948qVJ2Fko3TDm4",
  authDomain: "learning-5a816.firebaseapp.com",
  databaseURL: "https://learning-5a816.firebaseio.com",
  projectId: "learning-5a816",
  storageBucket: "learning-5a816.appspot.com",
  messagingSenderId: "154327863771",
  appId: "1:154327863771:web:2fc9c09226b7ad8dfdd7fe",
  measurementId: "G-VPPBV1518D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
const database = firebase.firestore()
//  const auth=firebase.auth();
export {
  storage, database, firebase as default
}