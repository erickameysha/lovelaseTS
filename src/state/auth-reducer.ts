import {BasketType} from "../App";
import uuid from "react-uuid";



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
export type AuthType = {

  person: PersonData[],

    card: BasketType[]

}

const initState: AuthType = {
    person:[
        // {id:'3', name: '3',
        // lastName:'lsls',
        // email: 'fkkfkf@gmss',
        // password: 'kddk',
        // phone: '+4394932', isAuth: true, isAdmin: false,country:'',street: '', korp: '', house:'', flat:'', comment:'',city:''}
    ],

    card: []
}


export const authReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case "REG":{

            return {...state, person:[...state['person'],{id: uuid(), name: action.name,
                    lastName: action.lastName,
                    email: action.email,
                    password: action.password,
                    phone: action.phone, isAuth: true, isAdmin: false,country:'',street: '', korp: '', house:'', flat:'', comment:'',city:''}] ?? null}
        }
        case "CHECK-OUT":{
            console.log(state.card)
            return {...state,card: action.basket.map(el=>({...el}))}
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

export const checkOut = (basket: BasketType[]) =>( {
  type: 'CHECK-OUT', basket,
}as const)

type ActionType = ReturnType<typeof regAC> | ReturnType<typeof logInAC> |ReturnType<typeof checkOut>