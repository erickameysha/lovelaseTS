import React, {useEffect, useState} from 'react';


import './Item.css'
import {Link, useParams} from "react-router-dom";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ToggleButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {CatalogDataType} from "../../Catalog/CatalogFakeData";
import {getItemAC,} from "../../state/catalog-reducer";
import {addItemAC} from "../../state/basket-reducer";


type PropsType = {
    getBasketItem: (id: string) => void
    // item: any
    getBasket: (id: string, size: string, color: string) => void
}

const Item = (props: PropsType) => {
    const catalog = useSelector<AppRootStateType, CatalogDataType|null>(state => state.catalog.currentItem)
    const dispatch = useDispatch()
    const params = useParams()
    let initColor = ['red', 'pink', 'black', 'white']
    let initSize = ['XS', 'S', 'M', 'L', 'XL']
    const [color, setColor] = useState<string>('')
    const [size, setSize] = useState<string>('')
    const [isAdd, setAdd] = useState(false)

    useEffect(() => {
        if (params.coinID)

            dispatch(getItemAC(params.coinID))
    }, [params.coinID, props])
    const [alignment, setAlignment] = React.useState('80E');

    const handleChange = (event: any, newAlignment: any) => {
        setAlignment(newAlignment);
    }

    const onClickHandler = () => {
        if (size === '' || color === '' ){
            console.log('error')
            setAdd(false)
        }else{
            debugger
            setAdd(true)
            dispatch(addItemAC(catalog, size, color))



        }
    }
    if (catalog === null){
        return null
    }
    return (
        <div className={'containerMap'}>
            <div className={'item-images'}>
                <img src={catalog.img} alt={'img'}/>
            </div>
            <div className={'getterIMG'}>

                <h1 className={'mapTitle'}><span>{catalog.title}</span>
                </h1>
                <p className={'mapPrice'}>{catalog.price} BYN</p>
                <div>
                    {initColor.map(el => {

                            return <button key={el} value={el} onClick={() => {
                                setColor(el)
                            }} style={{background: el, border: '1px solid black'}} className={'colorItem'}>

                            </button>
                        }
                    )}

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
                        {
                            initSize.map((el) => <ToggleButton onClick={() => {
                                setSize(el)
                            }} value={el} key={el}>{el}</ToggleButton>)
                        }


                    </ToggleButtonGroup>
                    {isAdd ? undefined : <p style={{color: 'red', padding: '0px 6px'}}>Выберите параметры</p>}
                </div>
                {/*<Counter id={'2'}basket={basket[]}price={3}/>*/}
                {
                    isAdd ? <Link className={'btn'} to={'/card'}>Перейти к корзине</Link> :
                        <button className={'btn'} onClick={onClickHandler}>
                            Добавить в карзину
                        </button>
                }

            </div>
        </div>
    );
};

export default Item;