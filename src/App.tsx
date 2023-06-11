import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
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
import Basket from "./commponent/Basket/Basket";
import Item from "./commponent/Item/Item";
import {catalogData, CatalogDataType} from "./Catalog/CatalogFakeData";


export interface BasketType extends  CatalogDataType  {
 color: string
  size: string
    count: number
}
function App() {


  //  временная реализация BLL
  const [catalog,setCatalog] = useState<CatalogDataType[]>([ {id:'13',  img:'https://lovelace.by/image/cachewebp/catalog/%D0%A2%D0%BE%D0%BA%D0%B8%D0%BE/%D0%A2%D0%BE%D0%BA%D0%B8%D0%BE%20%D0%B1%D0%B0%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20/%D1%82%D0%B0%D0%BD%D0%B3%D0%B0/lovelace.byTokiobalijskij4-456x685.webp',title:  'Трусы стринги "Гуд карма"', price: 12, filter:'Underwear' ,},
    {id:'451',  img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg',title:  'Трусы стринги "Гуд карма"',price: 12, filter:'Underwear'},
  ])
  const [basket, setBasket] = useState<BasketType[]>([
      // {id:'451',  img:'https://conteshop.by/ru/media/catalog/product/cache/11/image/639x852/9df78eab33525d08d6e5fb8d27136e95/b/b/bb8d7733d8727d5f947b31d0bd06aa56_1.jpg',title:  'Трусы стринги "Гуд карма"',  color: 'Цвет: Чёрно-белый',price: '12', filter:'Underwear', size:'m',},
  ])
  const [item,setItem] = useState({})
  // const [basket, setBasket]= useState([])

  const getItem = (id:string) => {

    // @ts-ignore
    setItem(catalog.find(el=> el.id === id))
  }


  const getBasket = (id: string, size:string, color: string) => {
console.log(id, size, color)
    const element = catalog.find((el : CatalogDataType)=> el.id===id)
    if(element){
      setBasket([...basket, {...element, size, color, count: 0}])
    }
      function sumPrices(arr:BasketType[]) {
          let total = 0;

          for (let i = 0; i < arr.length; i++) {
              total += Number(arr[i].price);
          }

          return total;
      }

      // eslint-disable-next-line react-hooks/rules-of-hooks

      // let r = [newBasket, ...basket]
    // // @ts-ignore
    // setBasket(r)
    // console.log(basket)
    // setBasket([newBasket, ...basket])
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
            getBasketItem ={getItem}
        />}/>
        <Route path={'/registration'} element={<RegistrationPage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/catalogItem'} element={<Basket  basket={basket}/>} />
        <Route path={'/item/:cardID'} element={<Item
            item={item}
            getBasketItem={getItem}
            getBasket={getBasket}
        />}

        />
      </Routes>
        {/*<AdminPanel/>*/}
      {/*<Main/>*/}
      {/*<BrandHistory/>*/}
      <Footer/>
    </div>
  );
}

export default App;
