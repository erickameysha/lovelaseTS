import React, {useEffect, useState} from 'react';
import './Catalog.css'
import CatalogIMG from './CatalogImages/colection.png'
import {CatalogItem} from "./CatalogsItem/CatalogItem";
import {Link} from "react-router-dom";
import {catalogData, CatalogDataType} from "./CatalogFakeData";

type PropsType ={
    catalog: CatalogDataType[]
    getBasketItem: (id: string)=> void
}

const Catalog = (props:PropsType) => {
    let [catalogItem, setCatalog] = useState(props.catalog)
    let [filter, setFilter] = useState('All')

    useEffect(()=> {

    },[])

    const filterProperty = (array:any, filter:any) => {
        console.log(array,filter)
        if (filter === 'All') return array

        return array.filter((el:any) => el.filter === filter)
    }
    let hookCatalogItem = (id:any) => {
        return catalogItem.filter((el:any) => el.id === id)
    }

    let dataType = filterProperty(catalogData, filter)
    console.log(dataType)

    return (
        <div className={'container'}>

            <div className='catalog-marge'>

                    <img className={'catalog-img'} src={CatalogIMG} alt=""/>

                <div className="containere">

                    <div className={'flex-container'}>
                        <a className={filter === 'All' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('All')}>Всё</a>
                        <a className={filter === 'Underwear' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('Underwear')}>Нижнее белье</a>
                        <a className={filter === 'BodyJewelry' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('BodyJewelry')}>Украшения для тела</a>
                        <a className={filter === 'clothing' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('clothing')}>Одежда</a>
                        <a className={filter === 'Swimwear' ? `flex-button-active` : `flex-button`}
                           onClick={() => setFilter('Swimwear')}>Купальники</a>

                    </div>



                    <div className="catalog-items">
                        {

                            dataType.map((el: any) => {

                                return (
                                    <Link
                                        onClick={()=>{props.getBasketItem(el.id)}}
                                        className={'catalog-link'} to={`/item/${el.id}`}>
                                        <CatalogItem
                                            key={el.id}
                                            img={el.img}
                                            id={el.id}
                                            title={el.title}
                                            color={el.color}
                                            price={el.price}
                                            filter={el.filter}
                                            hookCatalogItem={hookCatalogItem}
                                        />
                                    </Link>

                                )
                            })
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Catalog;