import { applyMiddleware, createStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState())
})

export default store