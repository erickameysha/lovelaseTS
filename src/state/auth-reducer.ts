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
        {id:'3', name: 'Эрик',
        lastName:'lsls',
        email: 'fkkfkf@gmаil.com',
        password: 'kddk',
        phone: '+375447597854', isAuth: true, isAdmin: false,country:'',street: '', korp: '', house:'', flat:'', comment:'',city:''}
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


type ActionType = ReturnType<typeof regAC> | ReturnType<typeof logInAC>