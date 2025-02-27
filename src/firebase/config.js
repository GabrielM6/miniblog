import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY
const firebaseAuthDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const firebaseProjectId = process.env.REACT_APP_FIREBASE_PROJECT_ID
const firebaseStorageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
const firebaseMessaginSenderId=process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
const firebaseAppId = process.env.REACT_APP_FIREBASE_APP_ID

const firebaseConfig = {
  apiKey: `${firebaseApiKey}`,
  authDomain: `${firebaseAuthDomain}`,
  projectId: `${firebaseProjectId}`,
  storageBucket: `${firebaseStorageBucket}`,
  messagingSenderId: `${firebaseMessaginSenderId}`,
  appId: `${firebaseAppId}`
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db, app}