const initialState = {
    showCart:false
}
export default function cartReducer(state=initialState,action) {
    switch(action.type) {
        case "TOGGLE_CART_TAB":
            return {
                ...state,
                showCart:!state.showCart
            }
        default:
            return state
    }
}