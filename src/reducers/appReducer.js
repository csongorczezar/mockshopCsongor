export const Pages = {home:"home",category:"category",product:"product",search:"search"}

const initialState = {
    selectedCategory:"",
    activePage:"",
    selectedProductId:null,
    searchTerm:""
}
export default function appReducer(state=initialState,action) {
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
            case "SET_SEARCH_TERM":
            return {
                ...state,
                searchTerm:action.payload
            }
        default:
            return state
    }
}