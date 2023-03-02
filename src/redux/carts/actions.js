import { ADD_CARTS } from "./actionTypes"


export const addToCart = (id, value) => {
    return {
        type: ADD_CARTS,
        payload: {
            id: id,
            value: value
        }
    }
}