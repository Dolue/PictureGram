import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTCRnJFmtbeln3xwxSQbS8_BGv9_CLF5Q",
  authDomain: "picturegram-e1ecf.firebaseapp.com",
  projectId: "picturegram-e1ecf",
  storageBucket: "picturegram-e1ecf.appspot.com",
  messagingSenderId: "746388385191",
  appId: "1:746388385191:web:f0ab09fe23cdaff87a5a82",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};
