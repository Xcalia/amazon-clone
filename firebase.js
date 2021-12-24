// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8nE_MOMkkMoMpwIV2asqKWfjmnrsAo88",
    authDomain: "trappeler.firebaseapp.com",
    projectId: "trappeler",
    storageBucket: "trappeler.appspot.com",
    messagingSenderId: "319717833938",
    appId: "1:319717833938:web:5dc79fda65280f4d91010b",
    measurementId: "G-BMVNEG847M"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

  const db = app.firestore()

  export default db;