import { ADD_PRODUCTS } from "./actionTypes"

export const addProducts = (value) => {
    return {
        type: ADD_PRODUCTS,
        payload: value
    }
}