import Item from "./Item";
import React from "react";
import {catalogData} from "../Catalog/CatalogFakeData";
class ItemContainer extends React.Component{

    render(){
       return(
           <Item {...this.props}/>
       )
    }
}
export default ItemContainer