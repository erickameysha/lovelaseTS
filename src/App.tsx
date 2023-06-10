import React from 'react';
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

function App() {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path={'/aboutUS'} element={<BrandHistory/>}/>
        <Route path={'/admin'} element={<AdminPanel/>}/>
        <Route path={'/my-account'} element={<PersonalArea/>}/>
        <Route path={'/'} element={<Main/>}/>

        <Route path={'/catalog'} element={<Catalog/>}/>
        <Route path={'/registration'} element={<RegistrationPage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/catalogItem'} element={<Basket/>} />
        <Route path={'/item/:cardID'} element={<Item/>}/>
      </Routes>
        {/*<AdminPanel/>*/}
      {/*<Main/>*/}
      {/*<BrandHistory/>*/}
      <Footer/>
    </div>
  );
}

export default App;
