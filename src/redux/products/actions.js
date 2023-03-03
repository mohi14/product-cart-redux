import { ADD_PRODUCTS, REDUCE_QUANTITY, REFILL_QUANTITY } from "./actionTypes"

export const addProducts = (value) => {
    return {
        type: ADD_PRODUCTS,
        payload: value
    }
}

export const reduceQuantity = (id) => {
    return {
        type: REDUCE_QUANTITY,
        payload: id
    }
}

export const refillQuantity = (value) => {
    return {
        type: REFILL_QUANTITY,
        payload: value
    }
}