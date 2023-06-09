import React, {useContext, useEffect, useState} from 'react';

import {catalogData} from "../Catalog/CatalogFakeData";
import './Item.css'
import {Link, useParams} from "react-router-dom";
import {CardContext} from "../../Сontext/CardContext";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ToggleButton} from "@mui/material";

const Item = () => {
    const params = useParams()
    const {getBasketItem, basket,getItem} = useContext(CardContext)
    useEffect(() => {
        if (params.coinID)
            getBasketItem(params.coinID)
    }, [])
    const [alignment, setAlignment] = React.useState('80E');

    const handleChange = (event:any, newAlignment: any) => {
        setAlignment(newAlignment);
    };
 const onClickHandler = () => {
// getItem(basket, alignment, 'black' )
 }
    return (
        <div className={'containerMap'}>

            <div className={'item-images'} key={basket.id}>
                <img src={basket.img}/>
            </div>
            <div className={'getterIMG'}>

                <h1 className={'mapTitle'}><span>{basket.title}</span>
                    <span>{basket.color}</span>
                </h1>
                <p className={'mapPrice'}>{basket.price}</p>
                <div>
                    <button className={'colorItem'}>

                    </button>
                </div>
                <div>
                    <p>Размер</p>
                    <ToggleButtonGroup
                        color="success"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value='80C'>80C</ToggleButton>
                        <ToggleButton value="70D">70D</ToggleButton>
                        <ToggleButton value="80F">80F</ToggleButton>
                        <ToggleButton value="80D">80D</ToggleButton>
                        <ToggleButton value="70C">70C</ToggleButton>
                        <ToggleButton value="80E">80E</ToggleButton>

                    </ToggleButtonGroup>
                </div>

                    <button className={'btn'} onClick={onClickHandler}>
                        Добавить в карзину
                    </button>


            </div>
        </div>
    );
};

export default Item;