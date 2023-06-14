import React from 'react';
import Form from "../formes/Form";
import CheckOutPersonForm from "./CheckOutPersonForm/CheckOutPersonForm";

const CheckOut = () => {
    return (
        <div style={{display:'flex'}}>
            <div className="">Оформление заказа</div>
            <div className="">
                <div className="">
                    <CheckOutPersonForm/>
                </div>

            </div>
        </div>
    );
};

export default CheckOut;