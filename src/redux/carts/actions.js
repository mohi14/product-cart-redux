import { ADD_CARTS, INCREASE, DECREASE, DELETE } from "./actionTypes"


export const addToCart = (id, value) => {
    return {
        type: ADD_CARTS,
        payload: {
            id: id,
            value: value
        }
    }
}

export const increaseItem = (value) => {
    return {
        type: INCREASE,
        payload: value
    }
}

export const decreaseItem = (value) => {
    return {
        type: DECREASE,
        payload: value
    }
}

export const deleteItem = (value) => {
    return {
        type: DELETE,
        payload: value
    }
}