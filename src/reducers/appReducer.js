export default function appReducer(state={},action) {
    switch(action.type) {
        case "SET_CATEGORY":
            return {
                ...state,
                selectedCategory:action.payload
            }
            case "SET_ACTIVE_PAGE":
                return {
                    ...state,
                    activePage:action.payload
                }
            case "SET_SELECTED_PRODUCT_ID":
            return {
                ...state,
                selectedProductId:action.payload
            }
        default:
            return state
    }
}