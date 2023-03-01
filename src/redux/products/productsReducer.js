import { ADD_PRODUCTS } from "./actionTypes";


const initialState = []

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            state = [...state, action.payload]
            return state

        default:
            return state
    }
}

export default productReducer