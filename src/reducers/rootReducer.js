import { combineReducers } from "@reduxjs/toolkit"
import appReducer from "./appReducer"
import cartReducer from "./cartReducer"
import productsReducer from "./productsReducer"

const rootReducer = combineReducers(
    {
        products:productsReducer,
        app:appReducer,
        cart:cartReducer
    }
)
export default rootReducer