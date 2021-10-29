import React from 'react';
import firebaseAuthentication from '../../Firebase/firebase.init';
import './Login.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
firebaseAuthentication();

const Login = () => {

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const handleSubmit = (e) =>{
        e.preventDefault();
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
              });
    }

    return (
        <div className="login-page">
           <form onSubmit={handleSubmit}>
            <input className="btn-style" type="submit" value="Google Sing In" />
           </form>
        </div>
    );
};

export default Login;