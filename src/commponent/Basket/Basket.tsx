import React, { useState} from 'react';
import './Basket.css'

import {BasketType} from "../../App";
import BasketItem from "./BasketItem";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

type PropsType ={
    basket: BasketType[]
}

const Basket = (props: PropsType) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const basket = useSelector<AppRootStateType, BasketType[]>(state => state.basket)

    function sumPrices(arr:BasketType[]) {
        let total = 0;

        for (let i = 0; i < arr.length; i++) {
            total += Number(arr[i].price);
        }
        console.log(total)
        return total;
    }

    const handleTotalPriceChange = (price: number) => {
        setTotalPrice(totalPrice + price);
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
                    <button onClick={()=> sumPrices(props.basket)}></button>
                    <div>
                        <p>ТОВАРЫ</p>
                    </div>
                    <div style={{
                        minWidth:  "300px",
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>

                        <p>CУММА</p>
                    </div>
                </div>
                {
                    basket.map(el=> <BasketItem key ={el.id} handleTotalPriceChange ={handleTotalPriceChange} basket={el} data={props.basket}/>)
                }
            </div>
            <div className="">
                <div>Общая сумма: {totalPrice} руб.</div>
            </div>
        </div>
    );
}
export default Basket