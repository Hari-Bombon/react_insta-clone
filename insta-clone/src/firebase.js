// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyBN3TvHvHIG4Mb66bMVdUAQMVKWVOLK0D4",
    authDomain: "insta-clone-6624c.firebaseapp.com",
    projectId: "insta-clone-6624c",
    storageBucket: "insta-clone-6624c.appspot.com",
    messagingSenderId: "964922491878",
    appId: "1:964922491878:web:ab813764f694d371df0c27",
    measurementId: "G-WXDGS46WER"
 });


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };

