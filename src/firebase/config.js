import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDfhJ7vVy3FO__Z12nu5R8YcVsKHb76B0s",
  authDomain: "miniblog-956e0.firebaseapp.com",
  projectId: "miniblog-956e0",
  storageBucket: "miniblog-956e0.appspot.com",
  messagingSenderId: "697969107667",
  appId: "1:697969107667:web:7d0d13d92a9dfadc5a6a26"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db, app}