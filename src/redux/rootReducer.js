import { combineReducers } from "redux";
import productReducer from "./products/productsReducer";


const rootReducer = combineReducers({
    products: productReducer
})

export default rootReducer