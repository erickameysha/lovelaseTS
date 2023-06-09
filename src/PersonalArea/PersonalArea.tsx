import React from 'react';
import './personalArea.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MyAccount from "./MyAccount/MyAccount";
import HistoryBy from "./historyBy/HistoryBy";

const PersonalArea = () => {
    return (

        <div className={'container'}>
            <div style={{borderBottom: '2px solid pink'}} className="">
                <MyAccount/>
            </div>
            <div>
                <HistoryBy/>
        </div>
        </div>
    );
};

export default PersonalArea;