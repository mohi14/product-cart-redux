import { ADD_CARTS, INCREASE, DECREASE, DELETE } from "./actionTypes";


const initialState = []

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARTS:
            const index = state.findIndex((i) => i.id === action.payload.id)
            if (index === -1) {
                return [...state, action.payload.value]
            }
            else {
                const newItems = [...state]
                newItems[index].cartQuantity += 1
                return newItems
            }

        case INCREASE:
            const newState = state.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, cartQuantity: item.cartQuantity + 1 }
                }
                else {
                    return item
                }
            })
            return newState


        case DECREASE:
            const newMinusState = state.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, cartQuantity: item.cartQuantity - 1 }
                }
                else {
                    return item
                }
            })
            return newMinusState

        case DELETE:
            const deleteState = state.filter(item => item.id !== action.payload.id)
            return deleteState
        default:
            return state;
    }
}

export default cartReducer