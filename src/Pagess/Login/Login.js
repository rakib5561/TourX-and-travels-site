import React from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const {singInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/home";
    
    const handleGoogleSignIn = () => {
        singInUsingGoogle().then((result) => {
        history.push(redirect_url);
      });
  };
  
  return (
        <div className="login-page">
           {/* <form onSubmit={handleGoogleSignIn}>
            <input  className="btn-style" type="submit" value="Google Sing In" />
           </form> */}

            <button className="btn-style" onClick={handleGoogleSignIn}>Google Sing In</button>

        </div>
    );
};

export default Login;