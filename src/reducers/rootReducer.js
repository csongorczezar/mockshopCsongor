import { combineReducers } from "@reduxjs/toolkit"
import productsReducer from "./productsReducer"

const rootReducer = combineReducers(
    {
        state:productsReducer
    }
)
export default rootReducer