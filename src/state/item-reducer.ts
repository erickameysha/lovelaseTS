import {CatalogDataType} from "../Catalog/CatalogFakeData";

let initState: any
const itemReducer = (state =initState, action:ActionType) => {
  switch (action.type) {
      case "INIT-ITEM":
          return state.push(action.newItem)
  }
}

export const getItemAC = (newId: string) => ({type: 'GET-ITEM', newId} as const)
const initItemAC = ( newItem: any ) => ({type: "INIT-ITEM", newItem}as const)
type ActionType = ReturnType<typeof initItemAC>
export type getItemACType = ReturnType<typeof getItemAC>