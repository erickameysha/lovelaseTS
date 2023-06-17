import {catalogData, CatalogDataType} from "../Catalog/CatalogFakeData";
import {getItemACType} from "./item-reducer";
import uuid from "react-uuid";
import {Dispatch} from "redux";
import {api} from "../api";


export type InitStateType = {
    items: CatalogDataType[]
    currentItem:CatalogDataType| null
    test: any
}
const initState:InitStateType = {
    items: catalogData,
    currentItem:null,
    test:[]
}

export const catalogReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "SET-CATALOG": {
            return {...state, items: action.catalog.map(tl => ({...tl}))}
        }
        case "GET-ITEM": {
            console.log('GET-ITEM')
            return {...state, currentItem: state.items.find(el => el.id === action.newId) ?? null}
        }
        case "ADD-ITEM-CATALOG": {
            console.log(state)
            return { ...state, items:[...state.items,{id: uuid(),img: action.link,title: action.title,price: action.price,filter: action.searchValue} ]

                }
        }

        default:
            return state
    }
}

export const fetchTest = () => {
    return (dispatch: Dispatch<any>) => {
        api.testFetch().then((res) => {
            console.log(res)
        })

    }
}
export const setCatalog = (catalog: CatalogDataType[]) => ({type: 'SET-CATALOG', catalog} as const)
export const testFetchAC = (data: any) => ({type: 'test', data} as const)
export const getItemAC = (newId: string) => ({type: 'GET-ITEM', newId} as const)
export const addItem = (searchValue: string, link: string, price: number, title: string) =>
    ({type: 'ADD-ITEM-CATALOG', searchValue, link, price, title} as const)

//type
export type ActionType =
    ReturnType<typeof setCatalog>
    | getItemACType
    | ReturnType<typeof addItem>
    | ReturnType<typeof testFetchAC>