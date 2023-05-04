import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMYAieRii7Z_lPD6MvXWySGR4H1XAvZxc",
  authDomain: "blog-bd860.firebaseapp.com",
  projectId: "blog-bd860",
  storageBucket: "blog-bd860.appspot.com",
  messagingSenderId: "22182254595",
  appId: "1:22182254595:web:f56047e6b7838b21989636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }