import React from 'react';
import './personalArea.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MyAccount from "./MyAccount/MyAccount";
import HistoryBy from "./historyBy/HistoryBy";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import BasketItem from "../commponent/Basket/BasketItem";
import {AuthType, PersonData} from "../state/auth-reducer";
import RegistrationPage from "../commponent/Registration/RegistrationPage";

const PersonalArea = () => {
    const auth = useSelector<AppRootStateType, PersonData[]|null>(state => state.auth['person'])



    return (
        <div>
        {auth?.length === 0? <RegistrationPage/>:<div className={'container'}>
            <div style={{borderBottom: '2px solid pink'}} className="">
                <MyAccount/>
            </div>
            <div>
                <HistoryBy/>
            </div>
        </div>}

        </div>

    );
};

export default PersonalArea;