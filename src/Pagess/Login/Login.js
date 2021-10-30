import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const {singInUsingGoogle} = useAuth();
  
  return (
        <div className="login-page">
           <form onSubmit={singInUsingGoogle}>
            <input  className="btn-style" type="submit" value="Google Sing In" />
           </form>
        </div>
    );
};

export default Login;