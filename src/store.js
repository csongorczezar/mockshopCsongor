import { createStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers/rootReducer"

const store = createStore(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
})

export default store