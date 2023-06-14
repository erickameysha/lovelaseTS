import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {BasketType} from "../../App";
import BasketError from "./BasketError";
import Basket from "./Basket";

const BasketContainer = () => {
    const basket = useSelector<AppRootStateType, BasketType[]>(state => state.basket['basketItem'])
    const totalPriceAC = useSelector<AppRootStateType, number>(state => state.basket['totalPrice'])
    const dispatch = useDispatch()

    return (
        basket.length === 0 ?<BasketError/> : <Basket   />
    );
};

export default BasketContainer;