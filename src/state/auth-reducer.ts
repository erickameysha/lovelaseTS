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
    isAdmin: boolean
}
export type AuthType = {

  person: PersonData[]
    card: BasketType[]|null

}

const initState: AuthType = {
    person:[],
    card: null
}


export const authReducer = (state = initState, action: ActionType): AuthType => {
    switch (action.type) {
        case "REG":{

            return {...state, person:[...state['person'],{id: uuid(), name: action.name,
                         lastName: action.lastName,
                       email: action.email,
                       password: action.password,
                        phone: action.phone, isAuth: true, isAdmin: false}] ?? null}
        }

        default: return state ?? null
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