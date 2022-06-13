import { combineReducers } from "redux";
import { productsReducer, selectedProducts } from "./productsReducer";

export const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProducts
})

