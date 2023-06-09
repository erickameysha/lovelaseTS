import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import BrandHistory from "./BrandHistory/BrandHistory";
import Catalog from "./Catalog/Catalog";
import AdminPanel from "./Admin/AdminPanel";

function App() {
  return (
    <div className="App">
    <Header/>
{/*<Catalog/>*/}
        <AdminPanel/>
      {/*<Main/>*/}
      {/*<BrandHistory/>*/}
      <Footer/>
    </div>
  );
}

export default App;
