import {BasketType} from "../App";
import {CatalogDataType} from "../Catalog/CatalogFakeData";


const initState: BasketType[] = []
export const basketReducer = (state = initState, action: ActionType) => {
switch (action.type) {
    case "ADD-ITEM": {
        return [...state, {...action.element, size: action.size, color: action.color}]
    }
    default: return state
}
}

export const addItemAC = (element: CatalogDataType| null, size: string, color: string) =>( {
  type:'ADD-ITEM', element, size,color
}as const)


type ActionType =ReturnType<typeof addItemAC>