import {BasketType} from "../App";
import uuid from "react-uuid";
import {log} from "util";



export type PersonData = {


    id: string
    name: string
    lastName: string,
    email: string,
    password: string,
    phone: string
    isAuth: boolean
    isAdmin: boolean,
    country: string,
    city: string,
    street:string,
    house:string,
    korp: string,
    flat: string,
    comment: string

}
interface Form extends PersonData {
    city: string,
    street:string,
    house:string,
    korp: string,
    flat: string,
    comment: string
}
export type OrderType ={
    id: string,
    totalPrice: string,
    status: string
    order: BasketType[]| null
}
export type AuthType = {

  person: PersonData[],
logIn:boolean,
    card: OrderType[]

}

const initState: AuthType = {
    person:[
    //     {id:'3', name: 'Эрик',
    //     lastName:'lsls',
    //     email: 'fkkfkf@gmаil.com',
    //     password: 'kdeeeeeeedk',
    //     phone: '+375447597854', isAuth: true, isAdmin: false,country:'',street: '', korp: '', house:'', flat:'', comment:'',city:''}
    ],
logIn: false,
    card: [
        {id:'1',totalPrice:'2', status:'w',order: []}
    ]
}


export const authReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case "REG":{
debugger
            return {...state, person:[...state['person'],{id: uuid(), name: action.name,
                    lastName: action.lastName,
                    email: action.email,
                    password: action.password,
                    phone: action.phone, isAuth: true, isAdmin: false,country:'',street: '', korp: '', house:'', flat:'', comment:'',city:''}] ?? null, logIn: true}
        }
        case "getToBasket":{
            return {...state,card:[...state.card, {id:uuid(),status: 'Оформлен',totalPrice: action.total, order:[{...action.basketEl}]??null}] }
        }
        case "CHANG-STATUS":{
            return {...state, card: state.card.map(el=> el.id ===action.id? {...el, status: action.status}: el)}
        }
        case "DEL-ITEM":{
            return {...state, card: state.card.filter(el=> el.id !==action.id)}
        }
        case "LOG":{
            debugger
            let account ={...state, person:state.person.find(el=> action.email === el.email || action.password || el.password)}
            if (account){
                debugger
                return {...state, logIn:true}
            }else {
                return console.log(state)
            }
        }
        case "goOut":{
            return {...state, logIn: action.is}
        }

        default:
            return state??null
    }
}

export const regAC = (name: string, lastName: string, email: string,
                      password: string, phone: string) => ({
    type: 'REG', name, lastName, email, password, phone
} as const)
export const logInAC = (email: string,
                        password: string,) => ({
    type: 'LOG', email, password
} as const)

export const getToBasket = (basketEl: BasketType[]|null, total: number) => ({
  type: 'getToBasket', basketEl, total
}as const)

export const ChangeStatus = (status: string, id: string) => ({
      type: 'CHANG-STATUS', status, id
}as const)
export const delIte = ( id: string) => ({
      type: 'DEL-ITEM', id
}as const)
export const goOut = ( is: boolean) => ({
      type: 'goOut', is
}as const)



type ActionType = ReturnType<typeof regAC> | ReturnType<typeof logInAC> | ReturnType<typeof getToBasket> |ReturnType<typeof ChangeStatus>| ReturnType<typeof delIte>| ReturnType<typeof goOut>