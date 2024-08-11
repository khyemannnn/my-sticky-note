
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCxEc6pB-nDkzeVWzYxIIK2Ozp2t-dYMOk",
  authDomain: "sticky-note-99.firebaseapp.com",
  projectId: "sticky-note-99",
  storageBucket: "sticky-note-99.appspot.com",
  messagingSenderId: "779960456963",
  appId: "1:779960456963:web:d0dd8224f35c5a60e8bb36"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};