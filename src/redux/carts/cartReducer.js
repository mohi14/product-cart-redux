import { ADD_CARTS } from "./actionTypes";


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
        default:
            return state;
    }
}

export default cartReducer