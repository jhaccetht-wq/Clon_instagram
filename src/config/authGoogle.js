import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "./firebaseSDK";

export default function authGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}



