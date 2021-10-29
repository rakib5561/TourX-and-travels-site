import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const firebaseAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseAuthentication;