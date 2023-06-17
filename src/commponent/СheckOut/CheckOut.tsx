import React from 'react';
import './CheckOut.css'
import CheckOutPersonForm from "./CheckOutPersonForm/CheckOutPersonForm";
import {useAppSelector} from "../../state/store";
import {useSelector} from "react-redux";
import LoginPage from "../Registration/LoginPage";
import RegistrationPage from "../Registration/RegistrationPage";


const CheckOut = () => {
    const islogin= useAppSelector<boolean>(state => state.auth['logIn'])
    return (
        islogin?
        <div className={'container'} >
            <div style={{
                display: 'flex', padding: '70px 0',
                justifyContent: 'space-around'
            }}>
                <div className="title">Оформление заказа</div>
                <div className="">
                    <div className="">
                        <CheckOutPersonForm/>
                    </div>

                </div>
            </div>
        </div>:
            <RegistrationPage/>
    );
};

export default CheckOut;