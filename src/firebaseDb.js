import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACusxGRNrQ33z4GQVqCymJVhsAG1MC954",
  authDomain: "subscriptions-cbdf6.firebaseapp.com",
  projectId: "subscriptions-cbdf6",
  storageBucket: "subscriptions-cbdf6.firebasestorage.app",
  messagingSenderId: "604338044607",
  appId: "1:604338044607:web:9b85f091a7dc13b148100a"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
