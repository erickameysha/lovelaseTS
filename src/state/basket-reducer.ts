import {BasketType} from "../App";
import {CatalogDataType} from "../Catalog/CatalogFakeData";

type InitStateType ={
    basketItem: BasketType[]
    totalPrice: number
}
const initState:InitStateType = {
    basketItem: [],
    totalPrice: 0

}
export const basketReducer = (state = initState, action: ActionType) => {
switch (action.type) {
    case "ADD-ITEM": {
        debugger
        return {...state, basketItem:[...state.basketItem, {...action.element, size: action.size,    color: action.color, count: 1}]}
    }
    case "TOTAL-PRICE":{
        return {...state, totalPrice: state.basketItem.reduce((total, item) => total + Number(item.price) * item.count, 0) }
    }
    case "DELETE-CARD":{
        return {...state, basketItem: state.basketItem.filter(el=> el.id !== action.id)}
    }
    case "INT-CARD":{
        return {...state, basketItem: state.basketItem.map(el=> el.id ===action.id? {...el, count: el.count +1}:el)}
    }
    case "DECR-CARD":{
        return {...state, basketItem: state.basketItem.map(el=> el.id ===action.id? {...el, count: el.count -1}:el)}
    }
    default: return state
}
}

export const addItemAC = (element: CatalogDataType| null, size: string, color: string) =>( {
  type:'ADD-ITEM', element, size,color
}as const)
export const setTotalPriceAC = () =>( {
  type:'TOTAL-PRICE'
}as const)
export const deleteCard = (id:string) => ({
  type: 'DELETE-CARD', id
}as const)
export const inrementCard = (id:string) => ({
  type: 'INT-CARD', id
}as const)
export const dicrementCard = (id:string) => ({
  type: 'DECR-CARD', id
}as const)


type ActionType =ReturnType<typeof addItemAC> |ReturnType<typeof setTotalPriceAC> |ReturnType<typeof deleteCard>|ReturnType<typeof inrementCard>|ReturnType<typeof dicrementCard>