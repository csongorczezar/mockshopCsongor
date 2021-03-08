const initialState = {
    showCart:false,
    itemsInCart:null
}
export default function cartReducer(state=initialState,action) {
    switch(action.type) {
        case "TOGGLE_CART_TAB":
            return {
                ...state,
                showCart:!state.showCart
            }
        case "ADD_TO_CART":
            return {
                ...state,
                itemsInCart:{
                    ...state.itemsInCart,
                    ...action.payload
                }
            }
        case "EMPTY_CART":
                return {
                    ...state,
                    itemsInCart:null
                }
        default:
            return state
    }
}