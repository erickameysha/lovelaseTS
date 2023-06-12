import {combineReducers, legacy_createStore} from "redux";
import {catalogReducer} from "./catalog-reducer";
import {basketReducer} from "./basket-reducer";
import {authReducer} from "./auth-reducer";


const rootReducer = combineReducers({
    catalog: catalogReducer,
    basket: basketReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store