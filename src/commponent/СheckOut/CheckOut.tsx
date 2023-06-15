import React from 'react';
import './CheckOut.css'
import CheckOutPersonForm from "./CheckOutPersonForm/CheckOutPersonForm";


const CheckOut = () => {
    return (
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
        </div>
    );
};

export default CheckOut;