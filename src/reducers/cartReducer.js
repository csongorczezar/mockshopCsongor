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
        case "REMOVE_FROM_CART":
            const updatedCart = Object.keys(state.itemsInCart).reduce((accumulator, key) => {
                if(key !== action.payload){
                    accumulator[key] = state.itemsInCart[key]
                }
                return accumulator
            }, {})
            return {
                ...state,
                itemsInCart:updatedCart
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