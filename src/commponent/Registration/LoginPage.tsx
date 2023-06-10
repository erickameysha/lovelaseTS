import React from 'react';
import {Link} from "react-router-dom";
import Login from "../formes/Login";
// import {Login} from "../formes/Login";
// import SignUp from "../FormsComponent/SignUp";

const LoginPage = () => {
    return (
        <div>
           <h1>Login</h1>
            <Login/>
           <p>
               or <Link to={'/registration'} >registration</Link>
           </p>
        </div>
    );
};

export default LoginPage;