import { ADD_PRODUCTS, REDUCE_QUANTITY, REFILL_QUANTITY } from "./actionTypes";


const initialState = []

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            state = [...state, action.payload]
            return state

        case REDUCE_QUANTITY:
            const newState = state.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                else {
                    return item
                }
            })
            return newState

        case REFILL_QUANTITY:
            const refillState = state.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: action.payload.quantity }
                }
                else {
                    return item
                }
            })
            return refillState
        default:
            return state
    }
}

export default productReducer