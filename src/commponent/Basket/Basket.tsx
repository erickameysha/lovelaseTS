import React, {useContext, useEffect, useState} from 'react';
// import {fakeDate} from "../Item/Item";
import './Basket.css'
import {useParams} from "react-router-dom";
// import {CardContext} from "../../Сontext/CardContext";
import {catalogData} from "../../Catalog/CatalogFakeData";

const Basket = (
    // {props}
) => {
    const params = useParams()
    // const {getBasketItem, basket} = useContext(CardContext)
    const [item, setItem] = useState(catalogData[0])
   const [price, setPrice] = useState(item.price)
   const [counter, setCounter] = useState(1)

    useEffect(() => {
        // if (params.coinID)
            // getBasketItem(params.coinID)
    }, [])


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
                        minWidth:  "300px",
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>

                        <p>CУММА</p>
                    </div>
                </div>

                <div className={'pises'}>
                    <div className={'item-inner'}>
                        <div className="item-img">
                            <img src={item.img} alt=""/>
                        </div>
                        <div className={'re'}>
                            <h3 className={'mapTitle'}><span>{item.title}</span>
                            </h3>
                            {/*<p className={'mapPrice'}>{item.price}</p>*/}

                            <div style={{
                                display: 'flex',
                            alignItems: 'center'
                            }}>    <p>color: </p>
                                <div style={{
                                    marginLeft: '10px',
                                    width:'20px',
                                    height:'20px',
                                    background: 'pink'
                                }} ></div> </div>

                        </div>

                    </div>
                    <div className="counter_inner">




                        <div className={'prisesType'}>
                            {price} BYN
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Basket;