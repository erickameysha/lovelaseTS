import React, {useCallback, useEffect, useState} from 'react';
import './Basket.css'

import {BasketType} from "../../App";
import BasketItem from "./BasketItem";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setTotalPriceAC} from "../../state/basket-reducer";
import BasketError from "./BasketError";
import {Link} from "react-router-dom";



const Basket = () => {
    // const [totalPrice, setTotalPrice] = useState<number>(0);
    const basket = useSelector<AppRootStateType, BasketType[]>(state => state.basket['basketItem'])
    const totalPriceAC = useSelector<AppRootStateType, number>(state => state.basket['totalPrice'])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTotalPriceAC())
        console.log(basket)
    }, [totalPriceAC,basket])

    if (basket === null) {
        return null
    }

    return (
        <div>

            <div className={'container'}>

                <div style={{
                    display: 'flex',
                    borderBottom: '3px solid pink',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                }}>

                    <div>
                        <p>ТОВАРЫ</p>
                    </div>
                    <div style={{
                        minWidth: "300px",
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>

                        <p>CУММА</p>
                    </div>
                </div>
                {
                    basket.map(el => <BasketItem key={el.id} basket={el} data={basket}/>)
                }
            </div>
            <div className="">
                <div>Общая сумма: {totalPriceAC} BYN.</div>
                <Link to={'/check-out'}>
 jajhvbnm
                </Link>
            </div>
        </div>


    );
}
export default Basket