import { combineReducers } from "redux";
import cartReducer from "./carts/cartReducer";
import productReducer from "./products/productsReducer";


const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
})

export default rootReducer