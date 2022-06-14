import yuppStoreApi from "../../apis/yuppStoreApi";
import { ActionTypes } from "../constant/action-types";

export const fetchProducts =  () =>{
    return async (dispatch,getState) => {
        const response = await yuppStoreApi.get("/products")

        dispatch({type: ActionTypes.FETCH_PRODUCTS,
            payload: response.data})
    }
};

export const fetchProduct =  (id) =>{
    return async (dispatch,getState) => {
        const response = await yuppStoreApi.get(`/products/${id}`)

        dispatch({type: ActionTypes.SELECTED_PRODUCTS,
            payload: response.data})
    }
};

// export const setProducts =( products)=>{
//     return {
//         type: ActionTypes.SET_PRODUCTS,
//         payload: products,
//     };
// };

// export const selectedProducts =( product)=>{
//     return {
//         type: ActionTypes.SELECTED_PRODUCTS,
//         payload: product,
//     };
// };

export const removeSelectedProducts =( product)=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
        
    };
};



