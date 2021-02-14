import { combineReducers } from "@reduxjs/toolkit"
import appReducer from "./appReducer"
import productsReducer from "./productsReducer"

const rootReducer = combineReducers(
    {
        products:productsReducer,
        app:appReducer
    }
)
export default rootReducer