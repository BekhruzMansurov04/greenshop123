import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAh5Pf2el62XEvmqNmu8E2tajK8tjcINaw",
    authDomain: "signinwith-2dd8b.firebaseapp.com",
    projectId: "signinwith-2dd8b",
    storageBucket: "signinwith-2dd8b.firebasestorage.app",
    messagingSenderId: "459699826769",
    appId: "1:459699826769:web:da40526206ee8fcc60c870",
    measurementId: "G-4J7YNW986L"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };