import { ActionTypes } from "../constant/action-types";
const initialState = {
        products: [ ]
}
 export const productsReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
            case ActionTypes.FETCH_PRODUCTS:
                return {...state, products: payload};
        default:
            return state;
    }
}

export const selectedProducts = (state={}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return  {...state,...payload}
            case ActionTypes.REMOVE_SELECTED_PRODUCTS:
                return  {}
        default:
           return state;
    }
}

