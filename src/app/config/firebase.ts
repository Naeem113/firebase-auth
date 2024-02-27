import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseKeys = {
  apiKey: "AIzaSyBXta4_8aHGvzcKYtYUCtMfV_rUVqi09n8",
  authDomain: "ourchat-21497.firebaseapp.com",
  databaseURL: "https://ourchat-21497.firebaseio.com",
  projectId: "ourchat-21497",
  storageBucket: "ourchat-21497.appspot.com",
  messagingSenderId: "487253351052",
  appId: "1:487253351052:web:4add72ee734ac3a2f779a9",
  measurementId: "G-Z9BKY4GCK4"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseKeys);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDb = getFirestore(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);
const firebaseFunctions = getFunctions(firebaseApp);
export { firebaseApp,firebaseAuth, firebaseDb, firebaseStorage, firebaseFunctions };
