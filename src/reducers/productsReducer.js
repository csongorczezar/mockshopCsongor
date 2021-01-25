
export default function productsReducer(state = null,action) {
    switch(action.type) {
        case"POPULATE_PRODUCTS":
            return state = action.payload
        default:
            return state
    }
}