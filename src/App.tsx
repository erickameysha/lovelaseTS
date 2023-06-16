import React, {useState} from 'react';

import './App.css';
import Header from "./commponent/Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import BrandHistory from "./commponent/BrandHistory/BrandHistory";
import Catalog from "./Catalog/Catalog";
import AdminPanel from "./commponent/Admin/AdminPanel";
import {Route, Routes} from "react-router-dom";
import PersonalArea from "./PersonalArea/PersonalArea";
import RegistrationPage from "./commponent/Registration/RegistrationPage";
import LoginPage from "./commponent/Registration/LoginPage";
import Item from "./commponent/Item/Item";
import {CatalogDataType} from "./Catalog/CatalogFakeData";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {getItemAC} from "./state/catalog-reducer";
import BasketContainer from "./commponent/Basket/BasketContainer";
import CheckOut from "./commponent/СheckOut/CheckOut";


export interface BasketType extends CatalogDataType {
    color: string
    size: string
    count: number
}

function App() {

    const catalog = useSelector<AppRootStateType, CatalogDataType[]>(state => state.catalog.items)
    const dispatch = useDispatch()
    const [basket, setBasket] = useState<BasketType[]>([
        // {id:'451',  img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg',title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12', filter:'Underwear', size:'m',},
    ])

    const getItem = (id: string) => {

        // @ts-ignore
        // setItem(catalog.find(el=> el.id === id))
        dispatch(getItemAC(id))
    }


    const getBasket = (id: string, size: string, color: string) => {
        console.log(id, size, color)
        const element = catalog.find((el: CatalogDataType) => el.id === id)
        if (element) {
            setBasket([...basket, {...element, size, color, count: 0}])
        }
    }


    return (
        <div>
           <Header/>

                <Routes>
                    <Route path={'/aboutUS'} element={<BrandHistory/>}/>
                    <Route path={'/admin'} element={<AdminPanel/>}/>
                    <Route path={'/my-account'} element={<PersonalArea/>}/>
                    <Route path={'/'} element={<Main/>}/>

                    <Route path={'/catalog'} element={<Catalog
                        catalog={catalog}
                        getBasketItem={getItem}
                    />}/>
                    <Route path={'/registration'} element={<RegistrationPage/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/card'} element={<BasketContainer/>}/>
                    <Route path={'/check-out'} element={<CheckOut/>}/>
                    <Route path={'/item/:cardID'} element={<Item
                        // item={item}
                        getBasketItem={getItem}
                        getBasket={getBasket}
                    />}

                    />
                </Routes>



    {/*<Footer/>*/}


        </div>
    );
}

export default App;
