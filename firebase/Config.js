
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6MSJlYGu1_RPK1qLPWM_2YFdUnpSx_p4",
  authDomain: "chat-aad80.firebaseapp.com",
  projectId: "chat-aad80",
  storageBucket: "chat-aad80.appspot.com",
  messagingSenderId: "116142142536",
  appId: "1:116142142536:web:d57a655621c101b05e947d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
};