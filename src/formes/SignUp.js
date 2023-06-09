import React from 'react';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import Form from "./Form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../store/userSlice";


const SignUp = () => {

    return (
        <Form
         
        />
    )
}

export default SignUp;