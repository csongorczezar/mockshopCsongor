import { combineReducers } from "@reduxjs/toolkit"
import appReducer from "./appReducer"
import productsReducer from "./productsReducer"

const rootReducer = combineReducers(
    {
        products:productsReducer,
        display:appReducer
    }
)
export default rootReducer