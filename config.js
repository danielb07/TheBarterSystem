import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDhOg22l0hBxINpsxAH72sjLgM12LKXeIU",
  authDomain: "barter-system-869c6.firebaseapp.com",
  databaseURL: "https://barter-system-869c6.firebaseio.com",
  projectId: "barter-system-869c6",
  storageBucket: "barter-system-869c6.appspot.com",
  messagingSenderId: "461161942021",
  appId: "1:461161942021:web:c352c56205d9d46328206c",
  measurementId: "G-NQMHCPB96N"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
