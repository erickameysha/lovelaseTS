import React, {useContext, useEffect, useState} from 'react';
// import {fakeDate} from "../Item/Item";
import './Basket.css'
import {useParams} from "react-router-dom";
// import {CardContext} from "../../Сontext/CardContext";
import {catalogData} from "../../Catalog/CatalogFakeData";
import {BasketType} from "../../App";
import BasketItem from "./BasketItem";

type PropsType ={
    basket: BasketType[]
}

const Basket = (props: PropsType) => {
    const [totalPrice, setTotalPrice] = useState<number>(0); //
    const params = useParams()
    // const {getBasketItem, basket} = useContext(CardContext)
    const [item, setItem] = useState(catalogData[0])
   const [price, setPrice] = useState(item.price)
   const [counter, setCounter] = useState(1)

    useEffect(() => {
        // if (params.coinID)
            // getBasketItem(params.coinID)
    }, [])

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
                    props.basket.map(el=> <BasketItem key ={el.id}handleTotalPriceChange ={handleTotalPriceChange} basket={el} data={props.basket}/>)
                }
            </div>
            <div className="">
                <div>Общая сумма: {totalPrice} руб.</div> // Отображаем общую сумму
            </div>
        </div>
    );
}
export default Basket