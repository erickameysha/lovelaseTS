import React, { useEffect} from 'react';
import './Basket.css'

import {BasketType} from "../../App";
import BasketItem from "./BasketItem";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setTotalPriceAC} from "../../state/basket-reducer";

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

                <div className={'title'} style={{
                    display: 'flex',
                    borderBottom: '3px solid pink',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                }}>

                    <div>
                        <p>ТОВАР</p>
                    </div>
                    <div >


                        <p>КОЛ-ВО</p>

                    </div>
                </div>
                {
                    basket.map(el => <BasketItem key={el.id} basket={el} data={basket}/>)
                }
                <div style={{

                    borderTop: '3px solid pink',
                    justifyContent: 'space-between',
                    margin: '20px 0 100px'

                }} >
                    <div style={{paddingTop: '10px', justifyContent: 'space-between', display: 'flex',alignItems: 'center'}} className="">
                        <div  className={'title'}>Общая сумма: {totalPriceAC} BYN.</div>
                        <Link style={{background: 'pink',
                            padding: '10px 25px',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            color: 'black'}} to={'/check-out'}>
                            Оформить заказ
                        </Link>
                    </div>

                </div>
            </div>

        </div>


    );
}
export default Basket