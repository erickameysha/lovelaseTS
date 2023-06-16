import React from 'react';
import './personalArea.css'
import MyAccount from "./MyAccount/MyAccount";
import HistoryBy from "./historyBy/HistoryBy";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

import { PersonData} from "../state/auth-reducer";
import RegistrationPage from "../commponent/Registration/RegistrationPage";
import MyAccountContainer from "./MyAccount/MyAccountContainer";

const PersonalArea = () => {
    const auth = useSelector<AppRootStateType, PersonData[]|null>(state => state.auth['person'])



    return (
        <div style={{
           'maxWidth': '1120px',
            'margin': '0 auto',
            padding: '30px 0'
        }}>
        {auth?.length === 0? <RegistrationPage/>:
          <MyAccountContainer/>
        }

        </div>

    );
};

export default PersonalArea;