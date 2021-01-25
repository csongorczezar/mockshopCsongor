import { combineReducers } from "@reduxjs/toolkit"
import productsReducer from "./productsReducer"

const rootReducer = combineReducers(
    {
        product:productsReducer
    }
)
export default rootReducer