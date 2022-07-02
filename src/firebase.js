// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAeDXIYvcpYzwxis7ALDSW7V-pVdPWzPJE",
    authDomain: "whatsapp-clone-59474.firebaseapp.com",
    projectId: "whatsapp-clone-59474",
    storageBucket: "whatsapp-clone-59474.appspot.com",
    messagingSenderId: "714933895646",
    appId: "1:714933895646:web:4b50bf2913f6e7f16bdd4f",
    measurementId: "G-NL2JP7DVKX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.fireStore();
  const auth = firebase.auth();
  const provider = firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;