import { applyMiddleware, createStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
store.subscribe(()=>{
    console.log(store.getState())
})

export default store