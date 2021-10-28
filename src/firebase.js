import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCewmtDs10zqPNGHILTzRU4ve4_ssCF0gc",
  authDomain: "whatsappclone-34189.firebaseapp.com",
  projectId: "whatsappclone-34189",
  storageBucket: "whatsappclone-34189.appspot.com",
  messagingSenderId: "228331767319",
  appId: "1:228331767319:web:1f917bcff7b19fdf3dbe52",
  measurementId: "G-L1V0WKPSER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export {provider, auth}
export default getFirestore();