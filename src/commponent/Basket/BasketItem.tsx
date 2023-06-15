import React from 'react';
import {BasketType} from "../../App";
import {Counter} from "./Counter";
import {useDispatch} from "react-redux";
import {deleteCard} from "../../state/basket-reducer";


type PropsType = {
    basket: BasketType
    data: BasketType[]
    // handleTotalPriceChange: (price: number) =>void
}

const BasketItem = (props: PropsType) => {
    const basket = props.basket
    const dispatch = useDispatch()

    return (
        <div className={'pises'}>
            <div className={'item-inner'}>
                <div className="item-img">
                    <img src={basket.img} alt=""/>
                </div>
                <div className={'re'}>
                    <h3 className={'mapTitle'}><span>{basket.title}</span>
                    </h3>
                    {/*<p className={'mapPrice'}>{basket.price}</p>*/}
                    <div className="">


                        <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}><p>color: </p>
                            <div style={{
                                marginLeft: '10px',
                                width: '20px',
                                height: '20px',
                                background: `${basket.color}`
                            }}>

                            </div>

                        </div>
                        <div>
                            <p>size:{basket.size}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter_inner">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Counter id={basket.id}

                        // onTotalPriceChange={props.handleTotalPriceChange}
                             price={basket.price} basket={props.basket}/>

                    <p style={{
                        cursor: "pointer", textDecoration: "underline",
                        color: "gray"
                    }} onClick={() => dispatch(deleteCard(basket.id))}>удалить</p>
                </div>

            </div>

        </div>
    );
};

export default BasketItem;