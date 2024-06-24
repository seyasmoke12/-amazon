import firebase from "firebase/compat/app"
import { getAuth } from "firebase/auth"

import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCkX-E1sBArM6vgI7R8-jth9cqZcw65YKA",
  authDomain: "ama-clone-bcf40.firebaseapp.com",
  projectId: "ama-clone-bcf40",
  storageBucket: "ama-clone-bcf40.appspot.com",
  messagingSenderId: "715880247320",
  appId: "1:715880247320:web:2e8e8efb0e0db16ce8936d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = getAuth(app)

export {db,auth}