import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebaseSDK";

export default function correoAuth(correo, password){

createUserWithEmailAndPassword(auth, correo, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
return

}