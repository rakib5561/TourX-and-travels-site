import firebaseAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthentication();
const useFirebase = () =>{

    const [user, setUser] = useState('');

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
        })
    },[]);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle = (e) =>{    
       
        //Google Sing In 
        return signInWithPopup(auth, googleProvider)

            // .then(result => {
            //     setUser(result.user);
            // }).catch((error) => {
            //     const errorMessage = error.message;
            //     console.log(errorMessage);
            //   });
    }

    const logOut = () =>{
        signOut(auth)
            .then(()=>{
                setUser({});
            })
    }
    
        return{
        user,
        singInUsingGoogle,
        logOut

    }

}
export default useFirebase;