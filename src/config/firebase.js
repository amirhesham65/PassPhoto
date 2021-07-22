import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: process.env.REACT_APP_FB_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT,
  storageBucket: process.env.REACT_APP_FB_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_SENDER,
  appID: process.env.REACT_APP_FB_APP,
});

const firebaseAuth = firebase.auth();
const firebaseStorage = firebase.storage();
const firebaseFirestore = firebase.firestore();

export {
  firebaseAuth,
  firebaseStorage,
  firebaseFirestore
}
