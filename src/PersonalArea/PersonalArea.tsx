import React from 'react';
import './personalArea.css'
import MyAccount from "./MyAccount/MyAccount";
import HistoryBy from "./historyBy/HistoryBy";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

import { PersonData} from "../state/auth-reducer";
import RegistrationPage from "../commponent/Registration/RegistrationPage";

const PersonalArea = () => {
    const auth = useSelector<AppRootStateType, PersonData[]|null>(state => state.auth['person'])



    return (
        <div style={{
           'maxWidth': '1120px',
            'margin': '0 auto'
        }}>
        {auth?.length === 0? <RegistrationPage/>:
            <div className={'container'}>
            <div style={{background:'pink', padding:'10px'}}>
                Данная информация поможет вам быстрее совершать покупки и просматривать историю заказов. Вы сможете изменить информацию при необходимости в личном кабинете.
            </div>
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