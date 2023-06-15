import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../formes/SignUp";

const RegistrationPage = () => {
    return (
        <div style={{display:"flex",justifyContent: 'space-between', 'maxWidth': '1120px',
            padding: '50px 0',
            'margin': '0 auto'
        }}>
            <div style={{background: '#fdf6fa',
                /* padding: 8px; */
                width: '300px',
                height: '140px',
                padding: '21px'}}>
               <div style={{fontSize:'18px'}}> Данная информация поможет вам быстрее совершать покупки и просматривать историю заказов. Вы сможете изменить информацию при необходимости в личном кабинете.
               </div> </div>
        <div style={{width:'640px'}}>
            <h1>Register</h1>
            <SignUp/>
            <p>
                or Already have an account <Link to={'/login'}>Sign in</Link>
            </p>
        </div>
        </div>
    );
};

export default RegistrationPage;