import {BasketType} from "../App";
import uuid from "react-uuid";

export type AuthType = {
    id: string
    name: string
    lastName: string,
    email: string,
    password: string,
    phone: string
    isAuth: boolean
    isAdmin: boolean
    card: BasketType[]

}

const initState: AuthType[] = []


export const authReducer = (state = initState, action: ActionType): AuthType[] => {
    switch (action.type) {
        case "REG": {
            return [{
                id: uuid(), name: action.name,
                lastName: action.lastName,
                email: action.email,
                password: action.password,
                phone: action.phone, isAuth: true, isAdmin: false, card: []
            }, ...state]
        }
        case "LOG": {
            return state

        }
        default:
            return state
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