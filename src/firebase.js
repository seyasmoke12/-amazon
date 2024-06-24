import firebase from "firebase/compat/app"
import { getAuth } from "firebase/auth"

import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD5ZeXgGpGc_1nP9F6e5dfOl1mMhZpRXUg",
  authDomain: "clone-988e6.firebaseapp.com",
  projectId: "clone-988e6",
  storageBucket: "clone-988e6.appspot.com",
  messagingSenderId: "41658058843",
  appId: "1:41658058843:web:12bbfa21c9afc59faa177e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = getAuth(app)

export {db,auth}