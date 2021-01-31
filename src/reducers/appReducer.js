export default function appReducer(state=null,action) {
    switch(action.type) {
        case "SET_CATEGORY":
            return {
                ...state,
                selectedCategory:action.payload
            }
        default:
            return state
    }
}